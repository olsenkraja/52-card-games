<script setup>


function logout() {
  const token = useCookie('token')
  token.value = null
  navigateTo('/login')
}
</script>

<template>
  <div class="bg-slate-50">
    <div class="h-screen max-w-6xl flex flex-col mx-auto">
      <div class="mx-auto w-full">
        <div>
          <div class="flex justify-between">
            <div class="space-x-2">
              <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
              <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
            </div>
            <div class="flex space-x-2">
              <LocaleSelector />
              <button @click="logout">
                Logout
              </button>
            </div>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>