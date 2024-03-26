<template>
  <div class="relative z-10 bg-dark">

    <div class="z-30 relative">
      <div class="text-light drop-shadow-lg max-w-7xl mx-auto flex flex-col sm:mb-10 space-y-3 p-4">
        <h1 class="sm:text-7xl mt-10">Streamline Your Events</h1>
        <p class="leading-6">Discover the unparalleled convenience of seamless hotel
          event booking with Hostello. <span class="hidden sm:block"> Our intuitive platform revolutionizes the way you
            plan and manage events, providing a hassle-free experience from start to finish. Whether you're organizing
            corporate conferences, extravagant weddings, or intimate gatherings, Hostello equips you with the tools and
            resources to bring your vision to life effortlessly. Say goodbye to the complexities of event planning and
            hello to a smoother, more efficient process with Hostello by your side.</span></p>
      </div>
      <div class="sm:grid grid-cols-10 sm:gap-10 sm:max-w-7xl mb-20 mx-auto sm:p-10 p-4 sm:rounded-xl shadow-lg bg-opacity-20 sm:bg-opacity-100 sm:bg-gray-900/40 backdrop-blur-lg">
        <lazy-sections-tabs class="col-span-7 sm:col-span-4"></lazy-sections-tabs>
        <div class="sm:col-span-6">
          <intro class="text-light mt-20 sm:mt-0"></intro>
        </div>
      </div>
      <call-to-action></call-to-action>
      <LazySectionsCalculator></LazySectionsCalculator>
      <review></review>

    </div>

    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 w-full h-screen bg-auto bg-no-repeat bg-center z-0"
       :style="{ backgroundImage: `url('https://images.unsplash.com/photo-1626125345510-4603468eedfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }">
  </div>
      <div class="absolute inset-0 sm:bg-black/80"></div>

    </div>

  </div>
</template>

<script>
import Intro from "~/components/sections/Intro.vue";
import Review from "~/components/sections/Review.vue";
import CallToAction from "~/components/sections/CallToAction.vue";

export const pageTitle = "Hostello - Your Hotel Event Booking System";
export const pageDescription = "Discover seamless hotel event booking with Hostello. Plan and manage your events effortlessly, from conferences to weddings, with our intuitive platform.";

export default {
  name: 'IndexPage',
  components: {
    Intro,
    Review,
    CallToAction
  },
  head() {
    return {
      title: pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: pageDescription
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: pageTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: pageDescription
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://hostello.com/your-image.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://hostello.com/your-page-url'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: pageTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: pageDescription
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://hostello.com/your-image.jpg'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
}
</script>

<style>
.overlay {
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(29, 29, 29, 0.5) 40%,
    #1d1d1d 100%
  );
}

</style>
