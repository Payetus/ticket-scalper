export function showNotification(title, body) {
    console.log('showing notifcation');
    if ('serviceWorker' in navigator) {
        console.log('service worker in navigator');
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, {
                body,
                icon: '/icon.png',
            });
        });
    }
}