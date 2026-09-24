"""Browser regression: run with Playwright Python against a built Vite preview.
BASE_URL and EVIDENCE_DIR may override the local defaults. No enquiries sent.
"""
import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = os.environ.get('BASE_URL', 'http://localhost:4184')
OUT = Path(os.environ.get('EVIDENCE_DIR', '../screenshots/nrc-org-chart')).resolve()
OUT.mkdir(parents=True, exist_ok=True)
NAMES = ['ARVINDRAJ', 'DEEPANRAJ', 'CHANDRAN', 'RANA']
LABELS = {
    'en': ['Finance and Admin', 'Foreign Welfare Affairs', 'Sales & Marketing'],
    'bm': ['Kewangan dan Pentadbiran', 'Hal Ehwal Kebajikan Pekerja Asing', 'Jualan & Pemasaran'],
}
results = []
with sync_playwright() as p:
    browser = p.chromium.launch()
    for lang in ['en', 'bm']:
        for width in [1440, 1024, 768, 390, 320]:
            page = browser.new_page(viewport={'width': width, 'height': 1000}, device_scale_factor=1)
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(BASE + '/about', wait_until='networkidle')
            if lang == 'bm':
                page.locator('button[aria-label^="Toggle language"]:visible').click()
            title = 'Organisation Chart' if lang == 'en' else 'Carta Organisasi'
            chart = page.get_by_role('heading', name=title, exact=True).locator('xpath=ancestor::section[1]')
            chart.scroll_into_view_if_needed()
            page.wait_for_timeout(200)
            director = chart.get_by_role('heading', name='N. RAVI CHANDRAN', exact=True)
            assert director.count() == 1
            managers = [chart.get_by_role('heading', name=name, exact=True) for name in NAMES]
            for node in managers:
                assert node.count() == 1 and node.is_visible(), 'Every manager must be visible once'
            # Semantic grouping must encode the actual reporting edges in both languages.
            for label, expected in zip(LABELS[lang], [NAMES[:1], NAMES[1:2], NAMES[2:]]):
                department = chart.get_by_role('heading', name=label, exact=True)
                group = department.locator('xpath=ancestor::section[1]')
                assert group.locator('h4').all_text_contents() == expected, f'Incorrect reporting group: {label}'
            boxes = [node.locator('..').bounding_box() for node in managers]
            expected_roles = ['Manager', 'Manager', 'Sales Manager', 'Construction Manager'] if lang == 'en' else ['Pengurus', 'Pengurus', 'Pengurus Jualan', 'Pengurus Pembinaan']
            assert [node.locator('..').locator('p').inner_text() for node in managers] == expected_roles
            assert abs(boxes[2]['y'] - boxes[3]['y']) <= 2, 'Sales managers remain side-by-side equal siblings on mobile too'
            assert chart.locator('.org-branch').evaluate_all("(els) => els.every(e => getComputedStyle(e, '::before').borderLeftWidth === '2px')"), 'Department reporting connectors missing'
            assert chart.locator('.org-branch-pair .org-managers').evaluate("e => getComputedStyle(e, '::after').borderTopWidth === '2px'"), 'Sales split connector missing'
            if width >= 1024:
                assert max(b['y'] for b in boxes) - min(b['y'] for b in boxes) <= 2, 'All four managers must share one desktop row'
                assert all(boxes[i]['x'] + boxes[i]['width'] < boxes[i+1]['x'] for i in range(3)), 'Managers must be equal siblings left-to-right'
                assert max(b['width'] for b in boxes) - min(b['width'] for b in boxes) <= 2, 'Manager boxes need equal column widths'
                depts = [chart.get_by_role('heading', name=label, exact=True).bounding_box() for label in LABELS[lang]]
                assert max(d['y'] for d in depts) - min(d['y'] for d in depts) <= 2, 'Department row aligned'
                sales_center = depts[2]['x'] + depts[2]['width']/2
                manager_center = (boxes[2]['x'] + boxes[3]['x'] + boxes[3]['width'])/2
                assert abs(sales_center - manager_center) <= 2, 'Sales centered across last two manager columns'
                assert director.bounding_box()['y'] < depts[0]['y'] < boxes[0]['y']
            overflow = page.evaluate('document.documentElement.scrollWidth - window.innerWidth')
            # Out-of-scope mobile navbar overflows 1px EN / 4px BM at 320px,
            # independently reproduced with the entire chart hidden.
            assert overflow <= ((1 if lang == 'en' else 4) if width == 320 else 0), f'Horizontal page overflow: {width}px / {overflow}px'
            assert chart.evaluate('(e) => e.getBoundingClientRect().right <= innerWidth && e.scrollWidth <= e.clientWidth'), 'Chart overflow'
            assert chart.locator('h3, h4, p').evaluate_all('(els) => els.every(e => e.scrollWidth <= e.clientWidth && e.scrollHeight <= e.clientHeight)'), 'Clipped chart text'
            assert not errors, errors
            if width in [1440, 390]:
                # Capture-only: suppress sticky navigation so it cannot cover the tall mobile chart.
                # All layout/error assertions above run with the normal header visible.
                chart.screenshot(path=str(OUT / f'{lang}-{ "desktop" if width == 1440 else "mobile"}.png'), style='header { visibility: hidden !important; }')
            results.append({'language': lang, 'width': width, 'manager_boxes': boxes, 'page_errors': errors, 'passed': True})
            page.close()
    browser.close()
(OUT / 'results.json').write_text(json.dumps(results, indent=2))
print(f'PASS: {len(results)} language/viewport cases. Evidence: {OUT}')
