<template>
  <v-btn
    color="primary"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
