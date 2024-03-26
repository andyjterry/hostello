<template>
  <div class="max-w-xl mx-auto p-4 space-y-6">
    <h2 class="text-2xl font-bold">Your Events</h2>
    <p class="mb-6 text-sm">
  You have currently have {{ bookedEvents.length }} events, 
</p>
    <ul role="list" class="grid grid-cols-1 gap-y-3">
      <li
        v-for="event in events"
        :key="event.id"
        class=" border rounded shadow-md hover:shadow-none px-2 py-2 transition duration-300 ease-in-out"
        :class="[
    event.cancelled ? 'border-red-500/20 bg-red-50/50 opacity-60 hover:opacity-100 shadow-none' : eventFinished(event.eventDate, event.eventTime) ? 'border-black/10 bg-gray-50/50 opacity-60 hover:opacity-100 shadow-none' : 'border-green-500/20 bg-green-50/20'
  ]"
      >
        <div
          class="flex items-center gap-x-4"
        >
        <div>
        <h4 class="text-base font-bold leading-6 text-gray-900">{{ event.name }}</h4>
        <div v-if="!event.cancelled">
        <p v-if="ticketsLeft(event) > 0" class="text-xs font-semibold  mb-2"><span class="font-bold">{{ ticketsLeft(event) }}</span> tickets available.</p>
        <p v-else class="text-xs font-bold text-red-500 mb-2">Sold Out</p>
      </div>
        <div class="flex flex-row items-center">
            <img
            :src="event.imageUrl"
            :alt="'Image for ' + event.name + ' event'"
            class="h-12 w-12 flex-none rounded-full object-cover"
          />
              <div class="flex flex-col text-xs font-medium text-gray-900 ml-3 tracking-wider">
              <div class="flex flex-row items-center ">
                <time :datetime="event.eventDate">{{ formatDate(event.eventDate) }}</time>
                <span class="mx-0.5 mb-0.5 text-sm opacity-85 font-bold">@</span>
                <span v-if="event.eventTime">{{event.eventTime}}</span>
              </div>
                <p class="text-xs mb-0.5 ">{{ event.location }}</p>
                <p v-if="event.cancelled" class="text-red-600 font-bold text-xs">Event Cancelled</p>
                <p class="text-xs font-bold" v-else>
                  <span  :class="{ 'text-gray-800': eventFinished(event.eventDate, event.eventTime), 'text-green-500': !eventFinished(event.eventDate, event.eventTime) }">{{ eventFinished(event.eventDate, event.eventTime) ? 'Finished' : 'Upcoming' }}</span>
                </p>
              </div>
          </div>
        </div>
          <Menu as="div" class="relative ml-auto z-90">
            <MenuButton
              class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Open options</span>
              <EllipsisHorizontalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="z-90 absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-light py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
              >
                <MenuItem>
                  <a
                    href="#"
                    class="block px-3 py-1 text-sm leading-6 text-gray-900"
                    >View</a
                  >
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    class="block px-3 py-1 text-sm leading-6 text-gray-900"
                    >Edit</a
                  >
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    class="block px-3 py-1 text-sm leading-6 text-red-600"
                    >Cancel</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </li>
    </ul>
    <button class="bg-blue-500/90 hover:bg-blue-500 transition ease-in-out duration-300 text-light font-bold py-2 px-4 rounded w-full">
  view more events
</button>
  </div>
</template>
  
  <script setup>
  import { computed } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisHorizontalIcon } from "@heroicons/vue/20/solid";

function formatDate(date) {
  const options = { day: "numeric", month: "short", year: "numeric" };
  let formattedDate = date.toLocaleDateString("en-GB", options);

  // Adding suffix to day
  const day = date.getDate();
  let suffix = "th";
  if (day < 4 || day > 20) {
    suffix = ["st", "nd", "rd"][(day % 10) - 1] || "th";
  }

  return formattedDate.replace(day, `${day}${suffix}`);
}

function eventFinished(eventDate, eventTime) {
  // Combines the eventDate and eventTime to a single Date object
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const day = eventDate.getDate();
  const hours = parseInt(eventTime.split(":")[0], 10);
  const minutes = parseInt(eventTime.split(":")[1], 10);

  const eventDateTime = new Date(year, month, day, hours, minutes);

  // Compares the eventDateTime to the current date and time
  return eventDateTime < new Date();
}

// Sorts events by date and time
// Function to determine if an event is in the past
function isEventPast(eventDate, eventTime) {
  const [hours, minutes] = eventTime.split(':').map(Number);
  const eventDateTime = new Date(eventDate);
  eventDateTime.setHours(hours, minutes);
  return eventDateTime < new Date();
}

// Computed property to sort events by upcoming, past, and cancelled
const events = computed(() => {
  return [...bookedEvents].sort((a, b) => {
    const aPast = isEventPast(a.eventDate, a.eventTime);
    const bPast = isEventPast(b.eventDate, b.eventTime);

    // Prioritize upcoming events over past and cancelled events
    if (!a.cancelled && !b.cancelled) {
      if (aPast && !bPast) return 1;
      if (!aPast && bPast) return -1;
    }

    // Sort cancelled events to appear last
    if (a.cancelled && !b.cancelled) return 1;
    if (!a.cancelled && b.cancelled) return -1;

    // For events that are both upcoming or both past, sort by date and time
    const dateA = new Date(a.eventDate);
    const dateB = new Date(b.eventDate);
    dateA.setHours(...a.eventTime.split(':').map(Number));
    dateB.setHours(...b.eventTime.split(':').map(Number));

    return dateA - dateB;
  });
});

function ticketsLeft(event) {
  return event.ticketsAvailable - event.ticketsSold;
}

const bookedEvents = [
  {
    id: 1,
    name: "Master Vue.js",
    imageUrl: "/event-img/vue-logo.png",
    eventDate: new Date("2024-10-25"),
    eventTime: "10:00",
    location: "Manchester",
    cancelled: false,
    ticketsAvailable: 100,
    ticketsSold: 84,
  },
  {
    id: 2,
    name: "The Edinburgh Art Fair",
    imageUrl: "/event-img/eaf.png",
    eventDate: new Date("2024-06-14"),
    eventTime: "11:00",
    location: "Edinburgh",
    cancelled: true,
    ticketsAvailable: 300,
    ticketsSold: 104,
  },
  {
    id: 3,
    name: "The Future of Tech in London",
    imageUrl: "/event-img/robot.jpg",
    eventDate: new Date("2023-12-07"),
    eventTime: "14:00",
    location: "London",
    cancelled: false,
    ticketsAvailable: 75,
    ticketsSold: 19,
  },
  {
    id: 4,
    name: "Climb Snowdon",
    imageUrl: "/event-img/snowdon.jpeg",
    eventDate: new Date("2024-07-20"),
    eventTime: "09:30",
    location: "Snowdon",
    cancelled: false,
    ticketsAvailable: 200,
    ticketsSold: 123,
  },
  {
    id: 5,
    name: "Distillery Tours in Scotland",
    imageUrl: "/event-img/scottish.png",
    eventDate: new Date("2024-09-14"),
    eventTime: "13:00",
    location: "Glasgow",
    cancelled: false,
    ticketsAvailable: 150,
    ticketsSold: 150,
  },
];
</script>

<style>
.finished {
  @apply text-red-500;
}
.upcoming {
  @apply text-green-500;
}
</style>