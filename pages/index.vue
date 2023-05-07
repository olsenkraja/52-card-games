<script setup>
const selectedCardIndex = ref()
const cards = ref([
  {
    number: 4,
    color: 'hearts',
  },
  {
    number: 6,
    color: 'hearts',
  },
  {
    number: 'J',
    color: 'hearts',
  },
  {
    number: 'K',
    color: 'spades',
  },
])

function select(index) {
  selectedCardIndex.value = index
}
</script>

<template>
  <h1 class="text-red-500 text-4xl">
    {{ $t('home') }}
  </h1>
  <div class="flex ml-64">
    <Card
      v-for="(card, i) in cards"
      :key="card"
      :card="card"
      :index="i"
      :is-selected="i === selectedCardIndex"
      :amount="cards.length"
      @selected="select"
    />
  </div>
</template>
