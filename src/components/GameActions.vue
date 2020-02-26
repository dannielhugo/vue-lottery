<template>
  <v-row no-gutters>
    <base-button
      class="mr-3"
      text="Iniciar sorteio"
      :disabled="disableActions"
      @click="$emit('start-click')"
    />
    <base-button
      text="Gerar números aleatórios"
      :disabled="disableActions"
      @click="$emit('random-number-click')"
    />
  </v-row>
</template>

<script>
import BaseButton from './base/BaseButton.vue';

export default {
  name: 'GameActions',

  components: {
    BaseButton,
  },

  props: {
    disableActions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
