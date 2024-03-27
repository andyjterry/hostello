<template>
  <div class="tabs" style="z-index: 9999;">
    <nav class="flex divide-x space-x-2 divide-gray-200 rounded-lg sm:max-w-md sm:max-w-lg sm:mx-10" aria-label="Tabs">
      <div v-for="(tab, tabIdx) in tabs" :key="tab.name"
           :class="[
             'group relative flex-1 overflow-hidden py-2 px-2 max-w-sm text-dark bg-light cursor-pointer',
             tabIdx === 0 ? 'rounded-t-lg' : '',
             tabIdx === tabs.length - 1 ? 'rounded-t-lg ' : '',
             tab.current ? 'bg-light text-gray-900 shadow-md' : 'text-gray-500 hover:bg-gray-50 opacity-95',
             'text-xs sm:text-lg font-bold text-center hover:bg-gray-50 focus:z-10 '
           ]"
           @click.prevent="toggleTab(tabIdx)">
        <span>{{ tab.name }}</span>
        <span v-if="!tab.current" class="absolute inset-x-0 bottom-0 h-1.5 bg-gray-300  blur-sm opacity-80"></span>
      </div>
    </nav>

    <component class=" sm:p-6 text-xs sm:text-lg relative h-full isolate overflow-hidden light rounded-b-lg sm:rounded-lg shadow-lg" :is="selectedComponent"></component>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';
import CreateEvent from "~/components/tabs/CreateEvent.vue"; 
import ViewEvents from "~/components/tabs/ViewEvents.vue";

const selectedComponent = shallowRef(CreateEvent);

const tabs = [
  { name: "Create Event", component: CreateEvent, current: true },
  { name: "View Your Events", component: ViewEvents, current: false },

];

const toggleTab = (tabIndex) => {
  tabs.forEach((tab, idx) => {
    tab.current = idx === tabIndex;
  });
  selectedComponent.value = tabs[tabIndex].component;
};
</script>
