<script setup>
const year = (new Date()).getFullYear()
</script>

<template>
  <div class="bg-slate-800 border-t border-slate-900 text-white mt-auto">
    <div class="max-w-6xl mx-auto w-full p-4 xl:px-0 text-center">
      &copy; {{ $t('copyright') }} {{ year }}
    </div>
  </div>
</template>
