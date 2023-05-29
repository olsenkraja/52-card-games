<script setup>
defineProps({
  field: Array,
  cards: Array,
  beingThrown: Array,
})
</script>

<template>
  <div class="bg-teal-700 w-full max-w-3xl h-[75vh] relative">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-64 h-64 relative overflow-hidden">
        <FieldCard v-for="card in field" :key="card" :card="card">
          {{ card }}
        </FieldCard>
        <FieldUnseenCard v-for="card in cards" :key="card" :card="card" :throwing="beingThrown.includes(card)">
          {{ card }}
        </FieldUnseenCard>
      </div>
    </div>
  </div>
</template>
