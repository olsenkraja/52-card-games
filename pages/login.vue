<script setup>
definePageMeta({
  layout: 'unauthenticated',
})
const localePath = useLocalePath()

function login() {
  const token = useCookie('token')
  token.value = 'dummy'
  navigateTo(localePath('/'))
}
</script>

<template>
  <div class="flex justify-end">
    <LanguageSelector />
  </div>
  <h1 class="text-red-500 text-4xl">
    {{ $t('login') }}
  </h1>
  <div class="flex flex-col space-y-2">
    <input type="text">
    <input type="password">
    <button @click="login">
      {{ $t('login') }}
    </button>
  </div>
</template>
