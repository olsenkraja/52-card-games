<script setup>
const { t, locale, availableLocales } = useI18n()

const localeCookie = useCookie('locale')
if (localeCookie.value) {
  locale.value = localeCookie.value
}

watch(locale, (locale) => {
  localeCookie.value = locale
})
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option
            v-for="availableLocale in availableLocales"
            :value="availableLocale"
            :key="availableLocale"
        >
          {{ availableLocale }}
        </option>
      </select>
    </form>
  </div>
</template>