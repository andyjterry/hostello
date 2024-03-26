<template>
    <nuxt-link to="/">
    <div class="relative">
    <div class="spartan font-bold text-4xl p-2 flex flex-row items-center justify-center hidden sm:block">
        <span class="text-secondary">hostello</span>
    </div>
    <div class="spartan font-bold text-4xl p-2 flex flex-row items-center justify-center sm:hidden block">
        <span class="text-secondary">h</span>
    </div>
</div>
</nuxt-link>
</template>

<style>
    .spartan {
        font-family: "League Spartan", sans-serif;
        letter-spacing: 1px;        
    }
    .code {
        @apply absolute -top-2 -right-4  text-xl font-bold text-blue-600; 
        font-family: "Source Code Pro", monospace;
        span {
            @apply text-orange-600
        }
    }
</style>