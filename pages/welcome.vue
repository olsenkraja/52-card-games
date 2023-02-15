<script setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <h1 class="text-red-500 text-4xl">
    {{ $t('welcome') }}
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda aut autem dolor doloremque earum fuga
    impedit itaque molestias numquam odit quod, rerum saepe suscipit ut veritatis voluptatum! Assumenda, explicabo?
  </p>
</template>
