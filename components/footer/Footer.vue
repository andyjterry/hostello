<template>
  <footer class="dark" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <LazyUiLogo></LazyUiLogo>
          <p class="text-sm leading-6 text-gray-300">Allowing hotel event organizers to create unforgettable experiences.</p>
          <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-light">Products</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.products" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-light">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-light">Plan Events</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.events" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-light">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-light">Popular Events</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.findEvents" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-light">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-light">Connect With Us</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.connectWithUs" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-light">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">&copy; 2024 Hostello. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  products: [
    { name: 'Event Marketing Platform', href: '#' },
    { name: 'Hostello Mobile Ticket App', href: '#' },
    { name: 'Hostello Check-In App', href: '#' },
    { name: 'Hostello App Marketplace', href: '#' },
    { name: 'Event Registration Software', href: '#' },
  ],
  events: [
    { name: 'Sell Tickets Online', href: '#' },
    { name: 'Event Planning', href: '#' },
    { name: 'Sell Concert Tickets Online', href: '#' },
    { name: 'Event Payment System', href: '#' },
    { name: 'Solutions for Professional Services', href: '#' },
  ],
  findEvents: [
    { name: 'Bristol Music Events', href: '#' },
    { name: 'Southampton Business Events', href: '#' },
    { name: 'Oxford Fashion Events', href: '#' },
    { name: 'Birmingham Sikh Events', href: '#' },
    { name: 'Cambridge Music Events', href: '#' },
  ],
  connectWithUs: [
    { name: 'X', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ],
}
</script>
