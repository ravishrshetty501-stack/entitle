// ENTITLE Offline-First Service Worker
// Enables complete offline operation, caching of app shell, assets, and scheme payloads.

const CACHE_NAME = "entitle-cache-v1";
const SCHEME_CACHE = "entitle-schemes-v1";

const APP_SHELL = [
    "/",
    "/index.html",
    "/manifest.json",
    "/favicon.ico"
];

// 1. Install Event: Cache app shell
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(APP_SHELL);
        }).then(() => self.skipWaiting())
    );
});

// 2. Activate Event: Clean up old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME && key !== SCHEME_CACHE) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Fetch Event: Offline-first strategy with network fallback
self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    // API calls to schemes: Network-first with cache fallback
    if (url.pathname.startsWith("/api/schemes")) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const copy = response.clone();
                        caches.open(SCHEME_CACHE).then((cache) => {
                            cache.put(event.request, copy);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request).then((cached) => {
                        if (cached) return cached;
                        // Return empty array fallback if not in cache
                        return new Response(JSON.stringify([]), {
                            headers: { "Content-Type": "application/json" }
                        });
                    });
                })
        );
        return;
    }

    // Static assets & navigation: Cache-first, fallback to network, fallback to index.html
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Background refresh
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
                    }
                }).catch(() => { });
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && event.request.method === "GET") {
                    const copy = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                }
                return networkResponse;
            }).catch(() => {
                // If requesting an HTML navigation route, serve index.html
                if (event.request.mode === "navigate" || event.request.headers.get("accept")?.includes("text/html")) {
                    return caches.match("/index.html");
                }
            });
        })
    );
});

