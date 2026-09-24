import os
from pathlib import Path
from playwright.sync_api import sync_playwright
base=os.getenv('BASE_URL','http://127.0.0.1:4184')
out=Path(os.getenv('EVIDENCE_DIR','../screenshots/nrc-clients'));out.mkdir(parents=True,exist_ok=True)
names=['Tenaga Nasional Berhad','Resonac','Can-One Berhad','Roca','SungWoo Technologies Sdn. Bhd.','Allo']
with sync_playwright() as p:
 b=p.chromium.launch(); errors=[]
 for width in [375,768,1536]:
  page=b.new_page(viewport={'width':width,'height':1000});page.on('pageerror',lambda e:errors.append(str(e)))
  page.goto(base,wait_until='networkidle')
  for lang in ['en','bm']:
   if lang=='bm':page.locator('header button[aria-label^="Toggle language"]:visible').click()
   section=page.locator('#clients')
   assert section.count()==1,'Clients section missing'
   for name in names:
    assert section.get_by_text(name,exact=True).count()==1,name
   assert section.locator('img').count()==6
   assert section.locator('img').evaluate_all('(imgs)=>imgs.every(i=>i.complete&&i.naturalWidth>0)')
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),'Page overflow'
   section.screenshot(path=str(out/f'clients-{lang}-{width}.png'))
  page.close()
 assert not errors,errors
 b.close()
print('PASS: six clients, loaded logos, EN/BM, three screen widths, no overflow/page errors')
