<template>
    <div class="dark py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-lg font-semibold leading-7 text-secondary">Hotel Event Solutions</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Seamless event management for hotels</p>
          <p class="mt-6 text-lg leading-8 ">Our platform offers an all-in-one solution for hotels to manage, promote, and execute events with efficiency and style. From small meetings to grand galas, streamline every step.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <!-- Refactor features to focus on hotel-specific benefits -->
            <div v-for="feature in features" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-xl font-semibold leading-7 ">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 ">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-secondary">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { BuildingOfficeIcon, CalendarIcon, UsersIcon } from '@heroicons/vue/20/solid'
  
  // Refactor features with icons and descriptions tailored to hotel event management
  const features = [
    {
      name: 'Venue Showcase',
      description: 'Elegantly present your hotel’s event spaces with immersive galleries and virtual tours.',
      href: '#',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Direct Booking',
      description: 'Streamline your booking process with our direct reservation system for event organizers.',
      href: '#',
      icon: CalendarIcon,
    },
    {
      name: 'Integrated Services',
      description: 'Offer comprehensive event services, including catering, AV setup, and room bookings, in one package.',
      href: '#',
      icon: UsersIcon,
    },
  ]
  </script>
  