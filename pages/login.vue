<script setup>
definePageMeta({
  layout: 'unauthenticated'
})
console.log('login')

function login() {
  const token = useCookie('token')
  token.value = 'dummy'
  navigateTo('/')
}
</script>

<template>
  <h1 class="text-red-500 text-4xl">login</h1>
  <div class="flex flex-col space-y-2">
    <input type="text">
    <input type="password">
    <button @click="login">login</button>
  </div>
</template>