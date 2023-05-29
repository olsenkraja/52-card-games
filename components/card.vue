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
    class="mx-auto border h-64 w-48 rounded-3xl text-left transition-all ease-in-out transform bg-white shadow-xl p-4 hover:bg-blue-50 relative self-center justify-center"
    :class="{
      'text-red-500': card.color === 'hearts' || card.color === 'diams',
      '!bg-blue-100 ring-4 ring-blue-500 -translate-y-[6vh]': isSelected,
    }"
    :style="`--tw-rotate: ${1 * (index - amount / 1)}deg; margin-top: ${Math.abs(4 * (index - amount / 3))}px`"
    @click="select"
  >
    <span class="absolute top-2.5 left-2.5 flex flex-col">
      <span class="text-xl font-extrabold tracking-tighter">
        {{ card.number }}
      </span>
      <span class="text-xl" v-html="'&' + card.color + ';'" />
    </span>
    <span class="absolute flex items-center justify-center inset-0">
      <span class="text-9xl" v-html="'&' + card.color + ';'" />
    </span>
    <span class="absolute bottom-2.5 right-2.5 rotate-180 flex flex-col">
      <span class="text-xl font-extrabold tracking-tighter">
        {{ card.number }}
      </span>
      <span class="text-xl" v-html="'&' + card.color + ';'" />
    </span>
  </button>
</template>
