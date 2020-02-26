<template>
  <div
    class="number"
    :class="{ drawn: drawn }"
  >
    {{ number }}
  </div>
</template>

<script>
export default {
  name: 'BaseRoundedNumber',
  props: {
    number: {
      type: Number,
      required: true,
    },
    drawn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid black;
  font-family: monospace;
  font-size: 30px;
  font-weight: bold;
  margin-right: 10px;
  background: lightgoldenrodyellow;

  &.drawn {
    background: lightgreen;
  }
}
</style>
