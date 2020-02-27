<template>
  <v-app>
    <navbar />
    <v-content >
      <v-container id="v-app">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
          >
            <lottery-card
              :numbers="numbers"
              :disable-actions="loading"
              @random-number-click="generateRandomGames"
              @start-click="startLottery"
            />
          </v-col>

          <v-col
            cols="12"
          >
            <games-card
              :items="flatGames"
              :drawn-numbers="numbers"
              :disable-actions="loading"
              @new-game="open = true"
            />

            <new-game-dialog
              :open="open"
              @close-dialog="open = false"
              @input="addGame"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import LotteryCard from './components/LotteryCard.vue';
import GamesCard from './components/GamesCard.vue';
import NewGameDialog from './components/NewGameDialog.vue';
import { randomNumbers } from './utils/randomHelpers';
import { MIN_NUMBER, MAX_NUMBER, LOTTERY_NUMBERS } from './utils/constants';
import drawnNumbersObservable from './utils/drawnNumbersObservable';

export default {
  name: 'App',

  components: {
    Navbar,
    LotteryCard,
    GamesCard,
    NewGameDialog,
  },

  computed: {
    flatGames() {
      return this.games.map((game) => game.numbers);
    },
  },

  data: () => ({
    numbers: [],
    games: [],
    loading: false,
    open: false,
  }),

  mounted() {
    this.generateRandomGames();
  },

  methods: {
    generateRandomGames(numberOfGames = 3) {
      this.games = this.games.filter((game) => !!game.custom);
      const generatedGames = [];
      for (let i = 0; i < numberOfGames; i += 1) {
        generatedGames.push({
          custom: false,
          numbers: randomNumbers(MIN_NUMBER, MAX_NUMBER, LOTTERY_NUMBERS),
        });
      }

      this.games = [...generatedGames, ...this.games];
    },

    startLottery() {
      this.loading = true;
      this.numbers = [];

      /**
       * Vue RxJs plugin will automatically unsubscribe from the observable
       * when component is destroyed
       * */
      this.$subscribeTo(
        drawnNumbersObservable(),
        (value) => this.numbers.push(value),
        () => null,
        () => {
          this.loading = false;
        },
      );
    },
    addGame(values) {
      this.games.push({
        custom: true,
        numbers: [...values],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#v-app {
  max-width: 1200px;
}
</style>
