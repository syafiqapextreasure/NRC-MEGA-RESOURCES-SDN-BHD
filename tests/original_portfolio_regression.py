import os,json,hashlib,zipfile
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[2]
repo=Path(__file__).resolve().parents[1]
out=Path(os.getenv('EVIDENCE_DIR',str(root/'screenshots/nrc-original-portfolio')));out.mkdir(parents=True,exist_ok=True)
base=os.getenv('BASE_URL','http://127.0.0.1:4184')
mapping=json.loads((out/'image-mapping.json').read_text())
with zipfile.ZipFile(mapping['presentation']) as z:
 for asset in mapping['assets']:
  assert Path(asset['original']).read_bytes()==z.read(asset['source']),asset
  assert hashlib.sha256(Path(asset['original']).read_bytes()).hexdigest()==asset['sha256']
results=[];errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch()
 for width in [375,768,1024,1536]:
  for route in ['/', '/services', '/portfolio']:
   page=browser.new_page(viewport={'width':width,'height':1000});page.on('pageerror',lambda e:errors.append(str(e)))
   page.goto(base+route,wait_until='networkidle')
   for lang in ['en','bm']:
    if lang=='bm':page.locator('header button[aria-label^="Toggle language"]:visible').click()
    page.locator('main img').evaluate_all('(imgs)=>imgs.forEach(i=>i.loading="eager")')
    page.wait_for_function('Array.from(document.querySelectorAll("main img")).every(i=>i.complete&&i.naturalWidth>0)')
    overflow=page.evaluate('document.documentElement.scrollWidth>innerWidth')
    assert not overflow,(width,route,lang,'overflow',page.locator('main *').evaluate_all('(els)=>els.filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>[e.tagName,e.className,e.textContent.slice(0,60)]).slice(0,10)'))
    assert page.locator('main img[src^="/nrc-"]').count()==0
    assert page.locator('main img[src="/hero-background.jpg"]').count()==0
    if route=='/portfolio':
     cards=page.locator('[data-photo-id]');assert cards.count()==35
     assert cards.locator('a').count()==0
     assert page.locator('main a[href*="wa.me"]').count()==1
     assert cards.locator('img').evaluate_all('(imgs)=>imgs.every(i=>getComputedStyle(i).objectFit==="cover")')
     assert page.locator("[data-photo-group]").count()==0
     assert cards.evaluate_all("els=>new Set(els.map(e=>e.parentElement)).size===1")
     ratios=cards.locator('img').evaluate_all('(imgs)=>imgs.map(i=>i.clientWidth/i.clientHeight)');assert all(abs(x-4/3)<0.02 for x in ratios),ratios
     counts=[5,5,16,5,4]
     nav=page.locator('main nav button')
     for idx,count in enumerate(counts,1):
      nav.nth(idx).click();assert cards.count()==count
     nav.nth(2).click() # after originals include portrait shrubs
     trigger=cards.first.locator('button').first;trigger.focus();trigger.press('Enter')
     dialog=page.get_by_role('dialog');dialog.wait_for()
     assert dialog.locator('a').count()==0
     image=dialog.locator('img');assert image.get_attribute('src')=='/originals/image30.png'
     assert image.evaluate('(i)=>getComputedStyle(i).objectFit')=='contain'
     assert dialog.evaluate('(e)=>{let r=e.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight}')
     page.keyboard.press('Shift+Tab');assert dialog.locator('button').last.evaluate('(e)=>e===document.activeElement')
     page.keyboard.press('Tab');assert dialog.locator('button').first.evaluate('(e)=>e===document.activeElement')
     page.screenshot(path=str(out/f'lightbox-{lang}-{width}.png'))
     page.keyboard.press('ArrowRight');assert image.get_attribute('src')=='/originals/image31.png'
     page.keyboard.press('Escape');assert dialog.count()==0
     assert trigger.evaluate('(e)=>e===document.activeElement')
     page.locator('[data-photo-grid]').screenshot(path=str(out/f'landscaping-after-{lang}-{width}.png'))
     nav.first.click()
    page.locator('main img').evaluate_all('(imgs)=>imgs.forEach(i=>i.loading="eager")')
    page.wait_for_function('Array.from(document.querySelectorAll("main img")).every(i=>i.complete&&i.naturalWidth>0)')
    page.evaluate('window.scrollTo(0,0)')
    page.screenshot(path=str(out/f'{route.strip("/") or "home"}-{lang}-{width}.png'),full_page=True)
    results.append(dict(width=width,route=route,lang=lang,overflow=False))
   page.close()
 assert not errors,errors
 browser.close()
(out/'qa-results.json').write_text(json.dumps(dict(originalAssetsVerified=len(mapping['assets']),checks=results,pageErrors=errors),indent=2))
print('PASS: original byte provenance, 24 route/language/viewport checks, 35 photos, grouped filters/counts, no image CTA, full-frame stages, portrait lightbox, keyboard navigation/focus, no page errors/overflow')
