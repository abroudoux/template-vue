import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Font Awesome Librarys

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import Specific Icons

// import { 'faNameIcon' } from '@fortawesome/free-solid-svg-icons' or '@fortawesome/free-brands-svg-icons' or '@fortawesome/free-regular-svg-icons'
// library.add('icons_names')

createApp(App).use(store).use(router).mount("#app");

// <- add '.component('font-awesome-icon', FontAwesomeIcon)'
