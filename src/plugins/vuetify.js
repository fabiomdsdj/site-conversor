import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/es5/locale/pt';
import VueI18n from 'vue-i18n'

Vue.use(Vuetify);
Vue.use(VueI18n);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#82257A',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { pt },
      current: 'pt',
    },
});
