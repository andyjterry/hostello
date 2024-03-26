<template>
  <Disclosure as="nav" class="dark shadow z-90" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex px-2 lg:px-0">
          <div class="flex flex-shrink-0 items-center">
           <LazyUiLogo></LazyUiLogo>
          </div>
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
            <a href="#" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-semibold">Events</a>
            <a href="#" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-semibold">Pricing</a>
            <a href="#" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-semibold">Contact</a>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only text-xs">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input id="search" name="search" class="block w-full rounded-md border-0 bg-dark pl-10 pr-3 text-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Search events..." type="search" />
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-4 flex-shrink-0">
            <div>
              <MenuButton class="relative flex rounded-full bg-light text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://media.licdn.com/dms/image/C5603AQH4PD8XgvPkVw/profile-displayphoto-shrink_400_400/0/1563478491620?e=1717027200&v=beta&t=RJG_09Gc65gIFcc-g2wkxSkrwowKG9euC5Nd566WHcs" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="z-90 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-light py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden light">
      <div class="space-y-1 pb-3 pt-2">
    <DisclosureButton as="a" href="#" class="block border-l-4 border-orange-500 bg-red-500 py-2 pl-3 pr-4 text-base font-bold tracking-wide text-light"> + Create New Event</DisclosureButton>
    <DisclosureButton as="a" href="#" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">View Events</DisclosureButton>
    <DisclosureButton as="a" href="#" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">Billing</DisclosureButton>
    <DisclosureButton as="a" href="#" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">Calculator</DisclosureButton>
  </div>
      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C5603AQH4PD8XgvPkVw/profile-displayphoto-shrink_400_400/0/1563478491620?e=1717027200&v=beta&t=RJG_09Gc65gIFcc-g2wkxSkrwowKG9euC5Nd566WHcs" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Uğur EKEN</div>
            <div class="text-lg font-semibold text-gray-500">ugur@indigospark.co.uk</div>
          </div>
          <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-light p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
          </button>
        </div>
        <div class="mt-3 space-y-1">
    <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Your Profile</DisclosureButton>
    <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Settings</DisclosureButton>
  <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Sign out</DisclosureButton>
  </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>