import {createApp} from 'vue'
import App from './App.vue'
// import SunVueUi from './../dist/sun-vue-ui.es'
import SunVueUi from './main'

const app = createApp(App)
app.use(SunVueUi)
app.mount('#app')
