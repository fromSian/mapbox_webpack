import { createApp } from "vue";
// import * as Vue from 'vue'
import App from "./App.vue";
// import store from './store/init';
// import router from './router/init';
// import 'xe-utils';
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'
// import base from '../base'
const app = createApp(App);
// app.config.globalProperties.$changeData='base';
// app.config.globalProperties.$change=base
// app.use(store).use(router).use(VXETable, {
//     size: 'small',
//     tooltipConfig: {
//       zIndex: 3000
//     }
//   })
app.mount("#app");
