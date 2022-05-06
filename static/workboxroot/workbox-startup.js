/**
 * how to set variable in console log
 *
 */
  const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );

  function register(config) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = 'service-worker.js';

        if (isLocalhost) {
          return;
        } else {
          // Is not localhost. Just register service worker
          //console.log('🔵 Register service worker 👷');
          console.log("%c🔵 Register service worker 👷", "background: linear-gradient(to right, #dce35b, #45b649); color: black;border-radius: 3px;padding: 3px;")
          registerValidSW(swUrl, config);
        }
      });
    }
  }

  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        //console.log('Service worker is speeding up this wiki.')
        console.log('%c🟢 Speeding by serviceWorker 🏍️',"background: linear-gradient(to right, #dce35b, #45b649); color: black;border-radius: 3px;padding: 3px;" )
        registration.onupdatefound = () => {
          console.log('%c🍎 New content is found, prepare to fetch', registration);
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated precached content has been fetched,
                // but normally the previous service worker will still serve the older
                // content until all client tabs are closed.
                // but we have set self.skipWaiting() in the service worker, so just inform user to reload the page to take effect.
                console.log('%c🎁 New content is available and will be used when after refresh or refetch', "background: linear-gradient(to right, #dce35b, #45b649); color: black;border-radius: 3px;padding: 3px;");

                // Execute callback, prepare an info to inform user refresh here.
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');

                // Execute callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  }

  function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found. Proceed as normal.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('🔴 No internet connection found. App is running in offline mode.');
      });
  }

  function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }

  function informUserToReloadToGetLatestContent() {
    const body = document.querySelector('body');
    const infoElement = document.createElement('div');
    infoElement.className = 'ask-user-reload';
    infoElement.innerHTML =
      navigator.language === 'zh-CN'
        //? '新内容已准备好，点击此处刷新页面更新到新版。'
        ? '🎉 New content available. Click to refresh 🐬'
        : 'New content available. Click here to Refresh this page to get update.';
    infoElement.onclick = () => location.reload();
    infoElement.onKeyDown = () => location.reload();
    infoElement.tabindex = 1;
    infoElement.role = 'button';

    const closeElement = document.createElement('div');
    closeElement.className = 'ask-user-reload-close';
    closeElement.innerHTML = navigator.language === 'zh-CN' ? '×' : '×';
    closeElement.onclick = () => body.removeChild(infoElement);
    closeElement.onKeyDown = () => body.removeChild(infoElement);
    closeElement.tabindex = 0;
    closeElement.role = 'button';
    infoElement.appendChild(closeElement);

    body.appendChild(infoElement);
  }

  register({ onUpdate: informUserToReloadToGetLatestContent });
