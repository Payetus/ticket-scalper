<script setup>

import { requestNotificationPermission } from './service/service';
import { showNotification } from './service/notification';
import { fetchDetailedOffers, fetchOffers, fetchEvents } from './loaders/fetch-offers';
import EventsCard from './components/EventsCard.vue';
import { ref } from 'vue';

const interval = 3* 60 * 1000;

const events  = ref([]);

fetchDetailedOffers().then((data) => {
  console.log(data);
  events.value = data;
});
// setInterval( fetchOffer, interval);
console.log( new Date().toLocaleString(), interval);
requestNotificationPermission();
setInterval(() => {
  fetchOffers('047fe0ce-b95e-11ef-87dd-0242ac110006').then((offer) => {
    showNotification('offer', `Offer: ${offer.name}, Quantity Left: ${offer.quantity}`);
  });
}, interval)
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <EventsCard :events="events" />
</template>
