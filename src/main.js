import Vue from 'vue';
import jQuery from 'jquery';
import App from './App.vue';
import router from './router';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/app.sass';


// eslint-disable-next-line no-multi-assign
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
