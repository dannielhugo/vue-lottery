<template>
  <v-card
    class="elevation-12"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>Sorteio</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <lottery
        :numbers="numbers"
      />
    </v-card-text>

    <v-card-actions>
      <game-actions
        class="mt-3 ml-3"
        :disable-actions="disableActions"
        @start-click="$emit('start-click')"
        @random-number-click="$emit('random-number-click')"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import Lottery from './Lottery.vue';
import GameActions from './GameActions.vue';

export default {
  name: 'LotteryCard',

  components: {
    GameActions,
    Lottery,
  },

  props: {
    numbers: {
      type: Array,
      default: () => [],
    },
    disableActions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
