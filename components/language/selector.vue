<script setup>
const { locale, availableLocales } = useI18n()
const router = useRouter()

watch(locale, (newValue, oldValue) => {
  router.push(router.currentRoute.value.path.replace('/' + oldValue, '/' + newValue))
})
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option v-for="l in availableLocales" :key="l" :value="l">
          {{ l }}
        </option>
      </select>
    </form>
  </div>
</template>
