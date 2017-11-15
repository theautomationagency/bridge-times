var vapidPublicKey = new Uint8Array(gon.vapid_public_key)

navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  serviceWorkerRegistration.pushManager
  .subscribe({
    userVisibleOnly: true,
    applicationServerKey: vapidPublicKey
  }).then((subscription) => {
    $.post('/push', {
      subscription: subscription.toJSON(),
      message: 'You clicked a button!'
    });
  });
});

// $(document).ready(() => {
//   $('#push-notification-test').on('click', (e) => {
//     console.log('clicked');
//     navigator.serviceWorker.ready
//     .then((serviceWorkerRegistration) => {
//       serviceWorkerRegistration.pushManager.getSubscription()
//
//     });
//   });
// });
