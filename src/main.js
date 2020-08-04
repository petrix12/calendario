import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// Inicialmente decia: var firebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyBIdgby5Goc_nhWH5t0BmvIfWi3bftZXno",
    authDomain: "vue-calendario-dbef1.firebaseapp.com",
    databaseURL: "https://vue-calendario-dbef1.firebaseio.com",
    projectId: "vue-calendario-dbef1",
    storageBucket: "vue-calendario-dbef1.appspot.com",
    messagingSenderId: "536089541138",
    appId: "1:536089541138:web:2e0fe3a7ee49573d8236cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
