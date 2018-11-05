import Vue from 'vue';
import App from './App';
import router from './router';
import { Picker } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;
Vue.component(Picker.name, Picker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
