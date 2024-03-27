<template>
  <div class="bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
      <div class="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
        <h2 class="inline sm:block lg:inline xl:block">Calculate your event fees with Hostello</h2>
        <div class="mt-8 text-white text-xs leading-5 tracking-wider">
          <p>When you press calculate:</p>
          <ul class="list-disc ml-6 mt-2">
            <li>You will pay a competitive event application fee of 4.1% + £0.60 per ticket to Hostello.</li>
            <li>The booker will be charged the adjusted ticket price, which may include fees.</li>
            <li>You will receive the adjusted ticket price minus the application fee per ticket sold.</li>
          </ul>
          <p class="mt-4">Compare your total fees with other services:</p>
          <ul class="list-disc ml-6 mt-2">
            <li>Billetto charges a fee of 3.90% + £0.90 per ticket paid by the ticket buyer.</li>
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
            <p class="text-white">Total Revenue Minus Fees: £{{ totalRevenueMinusFees.toFixed(2) }}</p>
            <p class="text-white">Compare this to other services:</p>
            <p class="text-white">Billetto Total Revenue Minus Fees: £{{ billettoTotalRevenueMinusFees.toFixed(2) }}</p>
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
      ticketPrice: 10,
      totalFees: 0,
      billettoServiceFeePercentage: 3.9,
      billettoServiceFeeFixed: 0.9,
      savings: 0,
      totalRevenueMinusFees: 0,
      billettoTotalRevenueMinusFees: 0
    };
  },
  methods: {
    calculateFees() {
      const applicationFeePercentage = 4.1;
      const applicationFeeFixed = 0.60;

      const quantity = parseInt(this.ticketQuantity);
      const price = parseFloat(this.ticketPrice);

      if (!isNaN(quantity) && !isNaN(price)) {
        const totalTicketPrice = price * quantity;
        const hostelloTotalFees = (applicationFeePercentage / 100 * price + applicationFeeFixed) * quantity;
        this.totalFees = hostelloTotalFees;
        this.totalRevenueMinusFees = totalTicketPrice - hostelloTotalFees;

        // Billetto calculations
        const billettoServiceFee = this.billettoServiceFeePercentage / 100 * price;
        const billettoTotalFees = (billettoServiceFee + this.billettoServiceFeeFixed) * quantity;
        this.billettoTotalRevenueMinusFees = totalTicketPrice - billettoTotalFees;

        // Calculate savings
        this.savings = this.eventbriteTotalRevenueMinusFees - hostelloTotalFees;
      }
    }
  }
}
</script>
