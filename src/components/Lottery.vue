<template>
  <v-row
    align="center"
    justify="center"
    class="ml-3"
  >
    <h2 class="headline" v-if="numbers.length === 0">Nenhum número sorteado</h2>
    <template
      no-gutters
      v-else
    >
      <base-rounded-number
        v-for="number in numbers"
        :key="number"
        :number="number"
        :drawn="true"
      />
    </template>
  </v-row>
</template>

<script>
import BaseRoundedNumber from './base/BaseRoundedNumber.vue';

export default {
  name: 'Lottery',

  components: {
    BaseRoundedNumber,
  },

  props: {
    numbers: {
      type: Array,
      default: () => [],
    },
  },

};
</script>
