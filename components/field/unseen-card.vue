<script setup>
defineProps({
  card: Object,
  throwing: Boolean,
})
</script>

<template>
  <div
    class="absolute inset-0 flex items-center justify-center transition-all duration-1000"
    :class="[throwing ? 'translate-y-0' : 'translate-y-96']"
  >
    <div
      class="mx-auto border h-24 w-16 rounded text-left transition-all ease-in-out transform bg-white shadow-xl hover:bg-blue-50 relative self-center justify-center"
      :class="{
        'text-red-500': card.color === 'hearts' || card.color === 'diams',
      }"
    >
      <span class="absolute top-1 left-1 flex flex-col">
        <span class="text-sm font-extrabold tracking-tighter leading-none">
          {{ card.number }}
        </span>
        <span class="text-sm leading-none" v-html="'&' + card.color + ';'" />
      </span>
      <span class="absolute flex items-center justify-center inset-0">
        <span class="text-3xl" v-html="'&' + card.color + ';'" />
      </span>
      <span class="absolute bottom-1 right-1 rotate-180 flex flex-col">
        <span class="text-sm font-extrabold tracking-tighter leading-none">
          {{ card.number }}
        </span>
        <span class="text-sm leading-none" v-html="'&' + card.color + ';'" />
      </span>
    </div>
  </div>
</template>
