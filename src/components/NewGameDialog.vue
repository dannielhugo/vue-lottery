<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="headline">Use Google's location service?</v-card-title>

      <v-card-text>
        Let Google help apps determine location.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="closeDialog"
        >
          Disagree
        </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click="closeDialog"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NewGameDialog',

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dialog: false,
    };
  },

  watch: {
    open(value) {
      this.dialog = value;
    },
  },

  methods: {
    closeDialog() {
      this.dialog = false;
      this.$emit('close-dialog');
    },
  },

};
</script>
