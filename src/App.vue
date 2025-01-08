<script setup>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { requestNotificationPermission } from './service/service';
import { showNotification } from './service/notification';

const interval = 15* 60 * 1000;
const fetchOffer = async () => {
  try {
    const res = await axios.get('https://offer.xceed.me/v1/events/047fe0ce-b95e-11ef-87dd-0242ac110006/offers?lang=en');
    const offers = res.data.data.ticket.filter(offer => !offer.salesStatus.isSoldOut);
    offers.forEach(offer => {
      console.log(`Offer: ${offer.name}, Quantity Left: ${offer.quantity}`);
    });
    return offers[0];
  } catch (error) {
    console.error('Error fetching offers:', error);
  }
} 
// setInterval( fetchOffer, interval);
requestNotificationPermission();
setTimeout(() => {

  fetchOffer().then((offer) => {
    showNotification('offer', `Offer: ${offer.name}, Quantity Left: ${offer.quantity}`);
  });
}, 1000)
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
  <HelloWorld msg="Vite + Vue" />
</template>
