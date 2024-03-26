<template>
    <div class="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div class="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 class="inline sm:block lg:inline xl:block">Calculate your event fees with Hostello</h2>
          <div class="mt-8 text-white text-xs leading-5 tracking-wider">
            <p>When you press calculate:</p>
            <ul class="list-disc ml-6 mt-2">
              <li>You will pay a competitive event application fee of 4.1% + £0.60 per ticket.</li>
              <li>The booker will be charged the adjusted ticket price, which may include fees.</li>
              <li>You will receive the adjusted ticket price minus the application fee per ticket sold.</li>
            </ul>
            <p class="mt-4">Compare your total fees with Eventbrite's fees:</p>
            <ul class="list-disc ml-6 mt-2">
              <li>Eventbrite charges a ticketing fee consisting of a service fee (2-5% of ticket price) and an optional payment processing fee (around 2.9% + $0.30 per transaction).</li>
              <li>Eventbrite also offers optional add-on features with additional fees.</li>
            </ul>
          </div>
        </div>
        <form class="w-full max-w-md lg:col-span-5 lg:pt-2" @submit.prevent="calculateFees">
          <div class="flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-1">
              <label for="ticket-quantity" class="text-sm font-semibold text-white">Number of Tickets:</label>
              <input v-model.number="ticketQuantity" id="ticket-quantity" name="ticket-quantity" type="number" min="0" class="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" placeholder="Enter quantity" />
            </div>
            <div class="flex flex-col gap-y-1">
              <label for="ticket-price" class="text-sm font-semibold text-white">Ticket Price (£):</label>
              <input v-model.number="ticketPrice" id="ticket-price" name="ticket-price" type="number" min="0" step="0.01" class="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" placeholder="Enter price" />
            </div>
            <button type="submit" class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Calculate</button>
            <div v-if="totalFees">
              <p class="text-white mt-4">Total fees with Hostello: £{{ totalFees.toFixed(2) }}</p>
              <p>total fees with eventbrite</p>
              <p>saving x</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ticketQuantity: 0,
        ticketPrice: 10, // Default ticket price
        totalFees: 0,
        eventbriteServiceFeeRange: [2, 5], // Eventbrite service fee range (percentage)
        eventbriteProcessingFeePercentage: 2.9, // Eventbrite payment processing fee percentage
        eventbriteProcessingFeeFixed: 0.3 // Eventbrite payment processing fee fixed amount
      };
    },
    methods: {
      calculateFees() {
        // Calculate Hostello fees
        const applicationFeePercentage = 4.1;
        const applicationFeeFixed = 0.60;
  
        const quantity = parseInt(this.ticketQuantity);
        const price = parseFloat(this.ticketPrice);
  
        if (!isNaN(quantity) && !isNaN(price)) {
          const totalTicketPrice = price + (applicationFeePercentage / 100 * price) + applicationFeeFixed;
          this.totalFees = totalTicketPrice * quantity;
  
          // Calculate Eventbrite fees
          const eventbriteServiceFee = (this.eventbriteServiceFeeRange[0] + this.eventbriteServiceFeeRange[1]) / 2;
          const eventbriteProcessingFee = (this.eventbriteProcessingFeePercentage / 100 * price) + this.eventbriteProcessingFeeFixed;

const eventbriteTotalTicketPrice = price + (eventbriteServiceFee / 100 * price) + eventbriteProcessingFee;

// Compare fees
const hostelloFees = this.totalFees;
const eventbriteFees = eventbriteTotalTicketPrice * quantity;

if (hostelloFees < eventbriteFees) {
  console.log("Hostello fees are lower than Eventbrite fees.");
} else if (hostelloFees > eventbriteFees) {
  console.log("Hostello fees are higher than Eventbrite fees.");
} else {
  console.log("Hostello fees are equal to Eventbrite fees.");
}
}
}
}
}
</script>

<style scoped>
/* Component-specific styles go here */
</style>
