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
            <span> Location: {{ event.venue.name }}</span>
            <span> Time: {{ new Date(event.startingTime * 1000).toLocaleString() }}</span>
            <div >
                <div v-for="offer in event.offers" :key="offer.release" class="release">
                    <ul>
                        <li>Release: {{ offer.release }} -> {{ offer.price && offer.price.amount }}€</li>
                        <li>Qty: {{ offer.quantity }}</li>
                    </ul>
                </div>

            </div>
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

.release {
    background: lightslategray;
    color: black;
}
</style>
