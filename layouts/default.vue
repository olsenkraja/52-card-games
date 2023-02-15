<script setup>
const localePath = useLocalePath()

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
            <div class="flex space-x-2">
              <LanguageSelector />
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
