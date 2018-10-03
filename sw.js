self.addEventListener('install',function(e)
{
    e.waitUntil(
        caches.open('shufflegames').then(function(cache)
        {
            return cache.addAll([
                '/',
                'index.html',
                'css/bootstrap.css',
                'js/jquery-1.8.2.js',
                'js/bootstrap.js',
                'shuffle2.png'
            ]);
        })
    );
})
self.addEventListener('fetch',function(event)
{
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response)
        {
            return response || fetch(event.request);
        })
    );
});