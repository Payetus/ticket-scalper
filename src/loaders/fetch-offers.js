import axios from "axios";

export const fetchOffers = async () => {
    const params = {
        orderBy: 'date',
        sort: 'ASC',
        offset: '0',
        venues: '7ce75945-919c-11e9-846c-06b12363b88e'
        
    };
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

export const fetchOffer = async (id) => {
    try {
      const res = await axios.get(`https://offer.xceed.me/v1/events/{id}/offers?lang=en`);
      const offers = res.data.data.ticket.filter(offer => !offer.salesStatus.isSoldOut);
      offers.forEach(offer => {
        console.log(`Offer: ${offer.name}, Quantity Left: ${offer.quantity}`);
      });
      return offers[0];
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  } 
