<script setup>
const selectedCardIndex = ref()
const field = ref([])
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
  {
    number: 10,
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
    number: 10,
    color: 'spades',
  },
])

function select(index) {
  if (selectedCardIndex.value === index) {
    selectedCardIndex.value = null
  } else {
    selectedCardIndex.value = index
  }
}

function throwCard() {
  if (selectedCardIndex.value !== null) {
    field.value.push(cards.value[selectedCardIndex.value])
    cards.value.splice(selectedCardIndex.value, 1)
    selectedCardIndex.value = null
  }
}

function skip() {
  console.log('skip')
}
</script>

<template>
  <div class="absolute flex items-center justify-center inset-0">
    <div class="relative">
      <div v-for="card in field" class="absolute">
        {{ card }}
      </div>
    </div>
  </div>
  <div class="absolute -bottom-32 left-16 w-[100vw]">
    <div class="flex items-center justify-center -space-x-48">
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
  </div>
  <div class="absolute flex justify-center w-full bottom-8 space-x-4">
    <button
      class="bg-emerald-700 rounded shadow-2xl text-white p-4 w-32 disabled:opacity-25"
      :disabled="selectedCardIndex === null"
      @click="throwCard"
    >
      Throw card
    </button>
    <button
      class="bg-amber-700 rounded shadow-2xl text-white p-4 w-32"
      @click="skip"
    >
      Pass
    </button>
  </div>
</template>
