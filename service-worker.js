importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

if (workbox) {
  console.log("%c📣 Yay! Service Worker is working! 🎉", "background: linear-gradient(45deg, #dce35b, #45b649); color: black;border-radius: 3px;padding: 3px;")
} else {
  console.warn(`🧧 Boo! Workbox didn't load 😬Service Worker won't work properly...`);
}

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute, matchPrecache } = workbox.precaching;

precacheAndRoute([{"revision":"2af8a647106f2d3f8d842e878d25a3cb","url":"android-chrome-192x192.png"},{"revision":"a589662a52a15e7ba5acf7d7f5947f65","url":"android-chrome-512x512.png"},{"revision":"dcc7d57adeadbd5821f35b56d284a442","url":"apple-touch-icon.png"},{"revision":"a493ba0aa0b8ec8068d786d7248bb92c","url":"browserconfig.xml"},{"revision":"bd359faf7dc5062889aeaa767ee7dfeb","url":"favicon-16x16.png"},{"revision":"39827d4c2dd23d31a28bd1d09489d26f","url":"favicon-32x32.png"},{"revision":"7def88f237b7c9dd7200f50a7aa73f17","url":"favicon.ico"},{"revision":"23fdf349e63b97c071e33fc9ee899f21","url":"favicon.png"},{"revision":"cfa3f34d421415e4c5fd828a7a5c2ee1","url":"index.html"},{"revision":"b9d834af70c5d22dcd92d7bd011625ea","url":"mstile-150x150.png"},{"revision":"3f2edf6cda0bed154ddf710fa5c23032","url":"robots.txt"},{"revision":"796e3f9bf607dac6ce50cdd401b0b449","url":"safari-pinned-tab.svg"},{"revision":"8dc8cc9f9b7226df119c1489bd53aa62","url":"sitemap.xml"},{"revision":"122b907efdc7a40a76fbcc5223f618d4","url":"workbox-startup.js"}]);

registerRoute(
  /\.css$/,
  // Use cache but update in the background.
  new StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|woff2?|ttf)$/,
  // Use the cache if it's available.
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        // Cache only a few images.
        maxEntries: 100,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(/\.js$/, new StaleWhileRevalidate());
registerRoute(/(^\/$|index.html)/, new StaleWhileRevalidate());

// Fix: check matchMedia
//const mqStandAlone = '(display-mode: standalone)'
//// Check this page is running in pwa mode
//if (navigator.standalone || self.matchMedia(mqStandAlone)) {
  //document.title = ''
//}

// self test
self.addEventListener('install', function(event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});

//
// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});
