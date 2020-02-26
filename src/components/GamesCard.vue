<template>
  <v-card
    class="elevation-12"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>Meus Jogos</v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-item v-if="!items.length">
        Ainda não existem jogos
      </v-list-item>

      <v-list-item
        v-for="(game, index) in items"
        :key="index"
      >
        <v-list-item-icon>
          <h3>{{ index }} :</h3>
        </v-list-item-icon>

        <v-list-item-content>
          <v-row no-gutters>
            <base-rounded-number
              v-for="number in game"
              :number="number"
              :key="number"
              :drawn="isDrawnNumber(number)"
            />
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <base-button
        text="+ Novo Jogo"
        class="ml-3"
        :disabled="disableActions"
        @click="$emit('new-game')"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import BaseRoundedNumber from './base/BaseRoundedNumber.vue';
import BaseButton from './base/BaseButton.vue';

export default {
  name: 'Games',

  components: {
    BaseRoundedNumber,
    BaseButton,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    drawnNumbers: {
      type: Array,
      default: () => [],
    },
    disableActions: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    isDrawnNumber(number) {
      return this.drawnNumbers.includes(number);
    },
  },
};
</script>
