<template>
  <v-text-field
    :label="label"
    :min="min"
    :max="max"
    :rules="[rules.min, rules.max, rules.invalid]"
    v-model="model"
    type="number"
    @update:error="hasError"
    @input="onChange"
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
    invalidValues: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      model: this.value,
      rules: {
        min: (value) => value >= this.min || `Número deve ser maior que ${this.min}`,
        max: (value) => value <= this.max || `Número deve ser menor que ${this.max}`,
        invalid: (value) => !this.isValid(value) || 'Número já usado',
      },
    };
  },

  methods: {
    hasError(value) {
      this.$emit('has-error', value);
    },
    onChange() {
      this.$emit('change', this.model);
    },
    isValid(value) {
      const aCount = new Map([...new Set(this.invalidValues)].map(
        (x) => [x, this.invalidValues.filter((y) => y === x).length],
      ));

      return aCount.get(+value) > 1;
    },
  },
};
</script>
