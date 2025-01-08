self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker Activated');
  });
  
  self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked', event.notification);
    event.notification.close();
    // You can navigate to a URL or perform other actions
    event.waitUntil(
      clients.openWindow('https://example.com') // Replace with your desired URL
    );
  });
  
  self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const options = {
      body: data.body || 'Default body content',
      icon: data.icon || '/default-icon.png',
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title || 'Default Title', options)
    );
  });
  