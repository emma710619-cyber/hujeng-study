const CACHE='hujeng-v11-20260725-1';
const BASE=self.registration.scope;
const CORE=[BASE,new URL('index.html',BASE).href,new URL('manifest.webmanifest',BASE).href,new URL('icon-192.png',BASE).href,new URL('icon-512.png',BASE).href];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 if(e.request.mode==='navigate'){
  e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(new URL('index.html',BASE).href,copy));return r}).catch(()=>caches.match(new URL('index.html',BASE).href)));
  return;
 }
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r})));
});
