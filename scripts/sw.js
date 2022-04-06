// TODOuse cdn
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉Service Worker is working!`);
} else {
  console.log(`Boo! Workbox didn't load 😬Service Worker won't work properly...`);
}

//const { precacheAndRoute, matchPrecache } = workbox.precaching;

workbox.precaching.preacheAndRoute(
    [
        {
            url: '/index.html',
            revision: '383676'
        },
    ],
);
