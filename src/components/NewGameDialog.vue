<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="headline">Novo jogo</v-card-title>

      <v-card-text>
        Informe os seis números desejados
      </v-card-text>

      <v-row
        no-gutters
        class="ma-4"
        justify="center"
      >
        <v-col
          v-for="(number, index) in numbers"
          :key="index"
          cols="4"
          class="mr-6"
        >
          <base-number-input
            :value="number"
            @change="onNumberChange($event, index)"
            @has-error="onNumberError"
          />
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          :disabled="invalid"
          @click="closeDialog"
        >
          Cancelar
        </v-btn>

        <v-btn
          color="green darken-1"
          text
          :disabled="invalid"
          @click="closeDialog"
        >
          Confirmar novo jogo
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BaseNumberInput from './base/BaseNumberInput.vue';

import { randomNumbers } from '../utils/randomHelpers';
import { MIN_NUMBER, MAX_NUMBER, LOTTERY_NUMBERS } from '../utils/constants';


export default {
  name: 'NewGameDialog',

  components: {
    BaseNumberInput,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dialog: false,
      numbers: [],
      invalid: true,
    };
  },

  watch: {
    open(value) {
      this.dialog = value;
    },
  },

  mounted() {
    this.numbers = randomNumbers(MIN_NUMBER, MAX_NUMBER, LOTTERY_NUMBERS);
    this.$emit('close-dialog');
  },

  methods: {
    closeDialog() {
      this.dialog = false;
      this.$emit('close-dialog');
    },
    onNumberChange(value, index) {
      if (value) {
        this.numbers[index] = value;
      }
    },
    onNumberError(value) {
      this.invalid = value;
    },
    getOffset(index) {
      return index % 0 === 0 ? 0 : 2;
    },
  },

};
</script>
