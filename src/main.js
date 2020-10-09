import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

let messages = require('./i18n/en')
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
