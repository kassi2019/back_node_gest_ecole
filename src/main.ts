import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ref } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import App from './App.vue'
import TheNoSidebar from "@/layouts/TheNoSidebar.vue";
import TheDefault from "@/layouts/TheDefault.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueSweetalert2);
app.component("default-layout", TheDefault);
app.component("no-sidebar-layout", TheNoSidebar);

export const sidebarOpen = ref(false);
app.mount('#app')
