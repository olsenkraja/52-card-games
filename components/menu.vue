<script setup>
const localePath = useLocalePath()
</script>

<template>
  <div class="space-x-2">
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
</template>
