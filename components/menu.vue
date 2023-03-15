<script setup>
const localePath = useLocalePath()
</script>

<template>
  <div class="bg-slate-600">
    <div class="max-w-6xl mx-auto w-full my-2 px-4 py-2 xl:px-0 space-x-4 text-white">
      <NuxtLink :to="localePath('/')" class="hover:underline">
        {{ $t('home') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/about')" class="hover:underline">
        {{ $t('about') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/welcome')" class="hover:underline">
        {{ $t('welcome') }}
      </NuxtLink>
    </div>
  </div>
</template>
