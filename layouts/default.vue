<template>
  <div class="light mx-auto transition duration-300 ease-in-out">
    <navigation class="z-50"></navigation>
    <slot />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "@/components/footer/Footer.vue";
import Navigation from "@/components/header/Navigation.vue";

export default {
  components: {
    Navigation,
    AppFooter,
  },
};
</script>
