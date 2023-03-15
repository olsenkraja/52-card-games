<script setup>
const localePath = useLocalePath()

function logout() {
  const token = useCookie('token')
  token.value = null
  navigateTo(localePath('/login'))
}
</script>

<template>
  <div class="bg-slate-50">
    <div class="flex flex-col mx-auto min-h-screen">
      <div class="max-w-6xl mx-auto w-full px-4 xl:px-0">
        <div>
          <div class="flex justify-between">
            <Menu />
            <div class="flex space-x-2">
              <LanguageSelector />
              <button @click="logout">
                {{ $t('logout') }}
              </button>
            </div>
          </div>
          <slot />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
