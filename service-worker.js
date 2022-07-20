self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("lightblue").then((cache) => {
			cache.addAll([
				'./index.html',
				'./game/normal/index.html',
				'./game/perilous/index.html',
				'./index.css',
				'./game/normal/game.css',
				'./game/perilous/game.css',
				'./service-worker.js',
				'./game/normal/game.js',
				'./game/normal/levels.js',
				'./game/perilous/game.js',
				'./game/perilous/levels.js',
				'./menu/img/musicOn.svg',
				'./menu/img/musicOff.svg',
				'./favicon.ico',
				'./music/LightBlues.wav',
				'./music/MizuiroNoTenshon.wav',
				'./music/LightBlues.mp3',
				'./music/Vincent.mp3'
			]);
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
			});
		}
		)
	);
});
