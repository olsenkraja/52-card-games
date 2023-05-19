<script setup>
const props = defineProps({
  isSelected: Boolean,
  card: Object,
  index: Number,
  amount: Number,
})
const emit = defineEmits(['selected'])

function select() {
  emit('selected', props.index)
}
</script>

<template>
  <button
    class="h-96 w-64 border -ml-48 rounded-3xl text-left transform bg-white shadow-xl p-4 flex flex-col hover:bg-blue-50"
    :class="{
      'text-red-500': card.color === 'hearts',
      '!bg-blue-100 ring-4 ring-blue-500': isSelected,
    }"
    :style="`--tw-rotate: ${6 * (index - amount / 2)}deg; margin-top: ${Math.abs(8 * (index - amount / 3))}px`"
    @click="select"
  >
    <span class="text-4xl font-extrabold">
      {{ card.number }}
    </span>
    <span class="text-3xl" v-html="'&' + card.color + ';'" />
  </button>
</template>
