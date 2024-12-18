import App from './App.vue'
import router from './routers'

// 样式
import '@/styles/index.scss'

// ElementPlus
import ElementPlus from "element-plus";
import pinia from "@/stores";

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
