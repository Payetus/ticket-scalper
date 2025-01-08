<script setup>
const { events } = defineProps({
    events: Array
});
</script>

<template>
    <h1>Events</h1>
    <div class="events">
        <div 
            v-for="event in events" 
            :key="event.id" 
            :class="['event-card', { 'low-quantity': event.quantity < 70 }]">
            <h2>Event: {{ event.name }}</h2>
            <p>Location: {{ event.venue.name }}</p>
            <p>Time: {{ new Date(event.startingTime * 1000).toLocaleString() }}</p>
            <p>Price: {{ event.price.amount }} {{ event.price.currency }}</p>
            <p>Release: {{ event.release }}</p>
            <p>Quantity Left: {{ event.quantity }}</p>
        </div>
    </div>
</template>

<style scoped>
.events {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    width: 100%;
}

.event-card {
    border: 1px solid darkmagenta;
    border-radius: 5px;
    text-align: left;
    padding: 1rem;
    cursor: pointer;
}

.low-quantity {
    background-color: lightcoral;
}
</style>
