importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.2/workbox-sw.js');

// https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.routing#registerRoute

workbox.routing.registerRoute(
  /.*\.html/,
  // https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies
  new workbox.strategies.CacheFirst({
    cacheName: 'workbox:html',
  })
);

workbox.routing.registerRoute(
  /.*\.js'/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'workbox:js',
  })
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
	new workbox.strategies.CacheFirst({
    cacheName: 'workbox:css',
  })
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif|ico)/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'workbox:image',
  })
);



// self.addEventListener("install", (event) => {
// 	event.waitUntil(
// 		caches.open("cache").then((cache) => {
// 			cache.addAll(["/", "/index.css", "/game/", "/game/game.css", "/game/game.js", "/game/levels.js", "/perilous/", "/perilous/game.css", "/perilous/game.js", "/perilous/levels.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"]);
// 		})
// 	);
// });

// self.addEventListener("fetch", (event) => {
// 	event.respondWith(
// 		fetch(event.request).then((response) => {
// 			return response;
// 		}).catch(async (error) => {
// 			return caches.match(event.request).then((cacheRes) => {
// 				return cacheRes;
// 			});
// 		}
// 		)
// 	);
// });