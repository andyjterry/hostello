<template>
    <div class="lg:ml-auto lg:pl-4 lg:pt-4 z-90">
      <div class="">
        <h2 class="text-base font-semibold leading-7">Streamline Your Events</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Effortless Event Management</p>
        <p class="mt-6 text-lg leading-8 ">Host and manage your hotel events with ease, using Hostello's comprehensive event management platform. Tailored for hotels, our system simplifies every aspect of event planning.</p>
        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
          <div v-for="feature in features" :key="feature.name" class="relative pl-9">
            <dt class="inline font-semibold ">
              <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            {{ ' ' }}
            <dd class="inline">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CalendarIcon, TicketIcon, UserGroupIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Seamless Event Scheduling.',
      description: 'Easily plan and schedule events with our intuitive calendar interface, designed specifically for hotel venues.',
      icon: CalendarIcon,
    },
    {
      name: 'Ticket Sales & Management.',
      description: 'Boost your event revenue with integrated ticket sales and real-time tracking of sales data.',
      icon: TicketIcon,
    },
    {
      name: 'Guest & Attendee Management.',
      description: 'Manage guest lists, send out invites, and keep track of RSVPs all in one place. Enhance the attendee experience with personalized communications.',
      icon: UserGroupIcon,
    },
  ]
  </script>
  