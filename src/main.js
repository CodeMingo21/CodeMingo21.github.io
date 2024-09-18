import { createApp, render } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/styles.css';

// new Vue({
//     render: (h) => h(App),
// }).$mount('#app')

createApp(App).use(router).mount('#app')

