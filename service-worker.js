self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("cache").then((cache) => {
			cache.addAll(["/", "/readme.md", "/index.css", "/game/", "/game/game.css", "/game/game.js", "/game/levels.js", "/perilous/", "/perilous/game.css", "/perilous/game.js", "/perilous/levels.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"]);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		fetch(event.request).then((response) => {
			return response;
		}).catch(async (error) => {
			return caches.match(event.request).then((cacheRes) => {
				return cacheRes;
			})
		}
		)
	);
});