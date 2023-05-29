<script setup>
const selectedCardIndex = ref()
const field = ref([])
const beingThrown = ref([])
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
    number: 'A',
    color: 'hearts',
  },
  {
    number: 'Q',
    color: 'hearts',
  },
  {
    number: 2,
    color: 'diams',
  },
  {
    number: 4,
    color: 'clubs',
  },
  {
    number: 6,
    color: 'diams',
  },
  {
    number: 'J',
    color: 'diams',
  },
  {
    number: 10,
    color: 'clubs',
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
    beingThrown.value.push(cards.value[selectedCardIndex.value])
    setTimeout(() => {
      field.value.push(cards.value[selectedCardIndex.value])
      cards.value.splice(selectedCardIndex.value, 1)
      selectedCardIndex.value = null
      beingThrown.value.push([])
    }, 1000)
  }
}

function skip() {
  console.log('skip')
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <Field :field="field" :cards="cards" :being-thrown="beingThrown" />
  </div>
  <div class="absolute bottom-0 w-screen h-[400px] pt-32 overflow-hidden inset-x-0">
    <div
      class="grid px-8 w-full md:max-w-3xl md:mx-auto"
      :style="'grid-template-columns: repeat(' + cards.length + ', minmax(0, 1fr));'"
    >
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
