<script setup>
const localePath = useLocalePath()

function logout() {
  const token = useCookie('token')
  token.value = null
  navigateTo(localePath('/login'))
}
</script>

<template>
  <button @click="logout">
    {{ $t('logout') }}
  </button>
</template>
