import axios from "axios";

export const fetchEvents = async () => {
    const url = 'https://events.xceed.me/v1/events';
    // fetch with axios adding searchParams
    const response = await axios.get(url, {
        params: {
            orderBy: 'date',
            sort: 'ASC',
            offset: '0',
            venues: '7ce75945-919c-11e9-846c-06b12363b88e',
            startTime: Math.floor(Date.now() / 1000)
        }
    });
    return response.data.data;
}

export const fetchDetailedOffers = async () => {
    const events = await fetchEvents();
    const promises = events.map(offer => fetchOffers(offer.id));
    const detailedOffers = await Promise.all(promises);
    detailedOffers.forEach((offers, index) => {
      const mappedOffers = offers.map(offer => ({
        quantity: offer.quantity,
        release: offer.name,
        price: offer.price
      }));
      events[index].offers = mappedOffers;
  
    })
    return events;
}
export const fetchOffers = async (id) => {
    try {
      const res = await axios.get(`https://offer.xceed.me/v1/events/${id}/offers?lang=en`);
      const offers = res.data.data.ticket.filter(offer => !offer.salesStatus.isSoldOut);
      offers.forEach(offer => {
        console.log(`Offer: ${offer.name}, Quantity Left: ${offer.quantity}`);
      });
      return offers;
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  } 
