import Vue from 'vue';
import vuetify from './plugins/veutify';
import VueSocketIO from 'vue-socket.io-extended';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const socket = io('localhost:6969');
Vue.use(VueSocketIO, socket);

new Vue({
	router,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
