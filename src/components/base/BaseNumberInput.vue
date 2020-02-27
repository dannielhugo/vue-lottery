<template>
  <v-text-field
    :label="label"
    :min="min"
    :max="max"
    :rules="[rules.min, rules.max]"
    v-model="model"
    type="number"
    @update:error="hasError"
    @input="$emit('change', model)"
  ></v-text-field>
</template>

<script>
import { MIN_NUMBER, MAX_NUMBER } from '../../utils/constants';

export default {
  name: 'BaseNumberInput',

  props: {
    label: {
      type: String,
      default: 'Número',
    },
    value: {
      type: Number,
      default: MIN_NUMBER,
    },
    min: {
      type: Number,
      default: MIN_NUMBER,
    },
    max: {
      type: Number,
      default: MAX_NUMBER,
    },
  },

  data() {
    return {
      model: this.value,
      rules: {
        min: (value) => value >= this.min || `Número deve ser maior que ${this.min}`,
        max: (value) => value <= this.max || `Número deve ser menor que ${this.max}`,
      },
    };
  },

  methods: {
    hasError(value) {
      this.$emit('has-error', value);
    },
  },
};
</script>
