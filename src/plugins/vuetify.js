import Vue from 'vue';
import Vuetify, {
  VSpacer,
  VAppBar,
  VImg,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VSpacer,
    VAppBar,
    VImg,
  },
});

export default new Vuetify();
