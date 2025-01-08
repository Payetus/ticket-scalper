<script setup>
// add props array of events
const { events } = defineProps({
    events: Array
})
</script>

<template>
    <h1> Events </h1>
    <div class="events">
        <div v-for="event in events" key="event.id" class="event-card">
            <h2>Event: {{ event.name }}</h2>
            <p>Location: {{ event.venue.name }}</p>
            <p>Time: {{ new Date(event.startingTime *1000).toLocaleString() }} </p>
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
    padding: 1rem;
    cursor: pointer;

}
</style>