<template>
  <div class="max-w-xl mx-auto p-4 space-y-6">
    <h2 class="text-2xl font-bold">Create Your Event</h2>
    <p class="mb-6 text-sm">
      Fill out the details below to start your event's journey and connect with
      your audience.
    </p>

    <form @submit.prevent="submitForm">
      <div class="space-y-4">

        <!-- Event Details Section -->
        <h3 @click="currentOpenSection = 'eventDetails'" class="cursor-pointer" v-if="currentOpenSection !== 'eventDetails'">
          Event Details
          <span v-if="isSectionComplete('eventDetails')" class="text-lg text-green-500">&#x2714;</span>
          <span v-else class=" text-red-600 text-xs font-bold"> - Not Complete</span>
        </h3>
        <div v-show="currentOpenSection === 'eventDetails' || isSectionComplete('eventDetails')" class="space-y-4">
          <!-- Event Name -->
          <div>
            <label for="eventName" class="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              role="textbox"
              id="eventName"
              v-model.trim="event.name"
              required
              class="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
              aria-required="true"
              aria-describedby="eventNameDescription"
            />
          </div>
          <!-- Event Date -->
          <div>
            <label for="eventDate" class="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              id="eventDate"
              v-model="event.date"
              required
              aria-required="true"
              aria-describedby="eventDateDescription"
              class="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <!-- Event Location -->
          <div>
            <label for="eventLocation" class="block text-sm font-medium text-gray-700">Event Location</label>
            <input
              type="text"
              id="eventLocation"
              v-model.trim="event.location"
              @input="showDescriptionField = true"
              required
              class="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
              aria-required="true"
              aria-describedby="eventLocationDescription"
            />
          </div>
          <!-- Event Description -->
          <div>
            <label for="eventDescription" class="block text-sm font-medium text-gray-700">Event Description</label>
            <textarea
              id="eventDescription"
              v-model="event.description"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              aria-describedby="eventDescriptionDescription"
            ></textarea>
          </div>
        </div>

        <!-- Ticket Details Section -->
        <h3 @click="currentOpenSection = 'ticketDetails'" class="cursor-pointer">
          Add Ticket Details
          <span v-if="isSectionComplete('ticketDetails')" class="text-lg text-green-500">&#x2714;</span>
          <span v-else class=" text-red-600 text-xs font-bold"> - Not Complete</span>
        </h3>
        <div v-show="currentOpenSection === 'ticketDetails'" class="space-y-4 mt-6">
          <!-- Ticket Price -->
          <div>
            <label for="ticketPrice" class="block text-sm font-medium text-gray-700">Ticket Price (£)</label>
            <input
              type="number"
              id="ticketPrice"
              placeholder="Enter final ticket price before fees."
              v-model.number="ticketPrice"
              class="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500 placeholder:text-sm placeholder:text-gray-800/50"
              aria-describedby="ticketPriceDescription"
            />
          </div>
          <!-- Tickets Available -->
          <div>
            <label for="ticketsAvailable" class="block text-sm font-medium text-gray-700">Tickets Available</label>
            <input
              type="number"
              id="ticketsAvailable"
              placeholder="Select max amount of tickets available"
              v-model.number="ticketsAvailable"
              class="block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500 placeholder:text-sm
              placeholder:text-gray-800/50 mb-2"
              aria-describedby="ticketsAvailableDescription"
            />
            <p class="text-gray-700 text-xs text-right ">
              Competitive event application fees: 4.1% + £0.60
            </p>
          </div>
          <!-- Calculated Information -->
          <div class="bg-red-600/80 flex flex-col space-y-1 p-2 rounding relative" v-if="ticketPrice && ticketsAvailable">
            <!-- Adjusted Ticket Price -->
            <p class="text-gray-50 text-xs">
              Fees per ticket: £{{ (ticketPrice - adjustedTicketPrice).toFixed(2) }}
            </p>
            <!-- Amount organiser Would Receive -->
            <p class="text-gray-50 text-xs">
              Amount the organiser would receive: £{{ organiserRevenue.toFixed(2) }}
            </p>
            <!-- Total Revenue for organiser -->
            <p class="text-gray-50 text-xs">
              Total revenue if all tickets were sold: £{{ totalRevenue.toFixed(2) }}
            </p>
          </div>
 <!-- Discount Codes -->
<div>
  <div v-for="(code, index) in discountCodes" :key="index" class="mt-2 flex space-x-2">
    <input
      v-if="code.visible"
      type="text"
      v-model="code.code"
      class="flex-1 block border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
      placeholder="Discount Code"
    />
    <input
      v-if="code.visible"
      type="number"
      v-model="code.percentage"
      class="w-24 block border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
      placeholder="%"
    />
    <button v-if="code.visible" @click.prevent="removeDiscountCode(index)" class="text-red-600 text-sm hover:text-red-500">Remove</button>
  </div>
  <button v-if="discountCodes.length < 3" @click.prevent="addDiscountCode" class="mt-2 text-red-600 text-sm hover:text-red-500">
  Add a Discount Code
</button>
</div>


        </div>

        <!-- Branding Section -->
        <h3 @click="currentOpenSection = 'branding'" class="cursor-pointer">
          Add Branding 
          <span v-if="isSectionComplete('branding')" class="text-lg text-green-500">&#x2714;</span>
          <span v-else class=" text-red-600 text-xs font-bold"> - Not Complete</span>
        </h3>
        <div v-show="currentOpenSection === 'branding'" class="space-y-4 mt-6">
          <div class="space-y-4 mt-6">
            <div>
              <label for="brandColor1" class="block text-sm font-medium text-gray-700">Brand Color 1 (Hex)</label>
              <input
                type="text"
                id="brandColor1"
                v-model="branding.colors[0]"
                class="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="#FFFFFF"
                aria-describedby="brandColor1Description"
              />
            </div>
            <div>
              <label for="brandColor2" class="block text-sm font-medium text-gray-700">Brand Color 2 (Hex)</label>
              <input
                type="text"
                id="brandColor2"
                v-model="branding.colors[1]"
                class="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="#000000"
                aria-describedby="brandColor2Description"
              />
            </div>
            <div>
              <label for="logoUpload" class="block text-sm font-medium mb-3 text-gray-700">Upload Logo</label>
              <input
                type="file"
                id="logoUpload"
                @change="handleLogoUpload($event)"
                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold cursor-pointer file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                aria-describedby="logoUploadDescription"
              />
            </div>
          </div>
        </div>
      </div>
      <p v-show="allSectionsComplete" class="text-xs my-3 bg-red-500 text-light p-2 rounded">Please ensure all form fields are completed before submitting the form to start your event's journey and connect with your audience.</p>

      <button
      :disabled="!allSectionsComplete"
      role="button"
        type="submit"
        class="mt-6 px-4 py-2 w-full bg-red-600 text-light rounded-md hover:bg-red-700"
        aria-describedby="createEventButtonDescription"
      >
        Create Event
      </button>

    </form>
  </div>
</template>




<script setup>
import { ref, watch, computed } from 'vue';

const currentOpenSection = ref('eventDetails');
const event = {
  name: "",
  date: "",
  location: "",
  description: "",
};
const ticketPrice = ref(null);
const ticketsAvailable = ref(null);
const discountCodes = ref([]);
const branding = {
  colors: ["", ""],
  logo: null,
};
const showDescriptionField = ref(false);
// Calculate the adjusted ticket price
const adjustedTicketPrice = ref(0);
const feesPercentage = 0.041; // 4.1%
const feesFixed = 0.60; // £0.60

// Calculate the amount the organiser would receive
const organiserRevenue = ref(0);

// Watch for changes in ticketPrice and ticketsAvailable
watch([ticketPrice, ticketsAvailable], () => {
  const totalFees = ticketPrice.value * feesPercentage + feesFixed;
  adjustedTicketPrice.value = ticketPrice.value - totalFees;
  organiserRevenue.value = adjustedTicketPrice.value;
});

// Calculate the total revenue for the organiser
const totalRevenue = ref(0);
watch(ticketsAvailable, () => {
  totalRevenue.value = ticketsAvailable.value * adjustedTicketPrice.value;
});

const submitForm = () => {
  if (allSectionsComplete.value) {
    alert("Form submitted. Check the console for data.");
    console.log(ticketPrice, ticketsAvailable, discountCodes);
  } else {
    alert("Please ensure all sections are complete before submitting the form.");
  }
};


const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  branding.logo = file;
  console.log("Uploaded file:", file.name);
};

// Function to calculate adjusted ticket price
const calculateAdjustedTicketPrice = () => {
  const feesPercentage = 0.041; // 4.1%
  const feesFixed = 0.60; // £0.60
  const totalFees = ticketPrice.value * feesPercentage + feesFixed;
  return parseFloat(ticketPrice.value) + totalFees;
};

// checks if a section is complete
const isSectionComplete = (section) => {
  if (section === 'eventDetails') {
    return event.name && event.date && event.location && event.description;
  } else if (section === 'ticketDetails') {
    return ticketPrice.value !== null && ticketsAvailable.value !== null;
  } else if (section === 'branding') {
    return branding.colors[0] && branding.colors[1] && branding.logo;
  }
};

// All sections are complete
const allSectionsComplete = computed(() => {
  return (
    event.name !== "" &&
    event.date !== "" &&
    event.location !== "" &&
    event.description !== "" &&
    ticketPrice.value !== null &&
    ticketsAvailable.value !== null &&
    discountCodes.value.length > 0 &&
    branding.colors[0] !== "" &&
    branding.colors[1] !== "" &&
    branding.logo !== null
  );
});

// discount code logic

// Function to add a discount code
const addDiscountCode = () => {
  if (discountCodes.value.length < 3) {
    discountCodes.value.push({ code: "", percentage: "", visible: true });
  }
};

// Function to remove a discount code
const removeDiscountCode = (index) => {
  discountCodes.value.splice(index, 1);
};

// Hide the discount code input fields initially
onMounted(() => {
  addDiscountCode();
});
</script>

<style lang="scss" scoped>
 h3 {
  @apply text-xs font-semibold tracking-wider text-red-500/80 hover:text-red-500;
 }
 .rounding {
  @apply rounded-lg rounded-tr-2xl;
 }
</style>

