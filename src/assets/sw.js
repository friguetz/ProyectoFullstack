//Nombre del cache de la aplicación 

const CACHE_NAME = 'Despliegue de PWA'

//Archivos que se usarán en la cache 

const urlsToCache=[
	'/'
	'../html/index.html',
	'../styles/index.css',
	'../js/index.js'
];


//Evento de instalacion del service Worker 


self.addEventListener('install', funtion(event){
	event.waitUntil(
	caches.open(CACHE_NAME)
	.then(function(cache)
	{)
	console.log("Cache abierta");
	})
   );
});

self.addEventListener("activate",function(event){
	event.waitUntil(
		cache.keys().then(function(cacheName){
			return Promise.all(
			cacheName.filter(function(cacheName))
			return cacheName !== CACHE_NAME;
			}).map(function(cacheName){
				return caches.delete(cacheName);
				})
			);
		})
	);

});


//Evento fetch para interceptar solicitudes al servidor para buscarlas primero en cache

self.addEventListener("fetch", function(event){
	event.respondWith(
		cache.match(event.request)
		.then.function(response){
		if(response){
		return response;

		}
		return fetch(event.request);
	})

	);
})















