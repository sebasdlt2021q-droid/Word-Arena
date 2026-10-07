// Kept for the original game's PWA registration. Native Android runs the game directly from app assets.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
