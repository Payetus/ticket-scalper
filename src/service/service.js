// Register the Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker Registered', registration);
      })
      .catch((error) => {
        console.error('Service Worker Registration Failed', error);
      });
  }
  
  // Request Notification Permissions
  export function requestNotificationPermission() {
    console.log('Requesting Notification Permission...');
    if (Notification.permission === 'granted') {
      console.log('Notification permission already granted.');
    } else if (Notification.permission === 'denied') {
      console.log('Notification permission denied.');
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          showLocalNotification('Permission Granted', 'You can now receive notifications.');
        }
      });
    }
  }
  
  