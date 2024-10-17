import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  './style.css'
import { ref } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import App from './App.vue'
import TheNoSidebar from "@/layouts/TheNoSidebar.vue";
import TheDefault from "@/layouts/TheDefault.vue";
import Vue3FormWizard from 'vue3-form-wizard'
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import 'vue3-form-wizard/dist/style.css'
import moment from 'moment';
import money from 'v-money3';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueSweetalert2);
app.use(Vue3FormWizard);
app.component("default-layout", TheDefault);
app.component("no-sidebar-layout", TheNoSidebar);
app.config.globalProperties.$moment = moment;
app.use(money)
export const sidebarOpen = ref(false);
app.mount('#app')
