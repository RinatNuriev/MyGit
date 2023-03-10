import router from './router/router.js'
import Menu from './components/Menu/js'

const app = Vue.createApp({})
app.use(router)
app.mount('#app')


const app2 = Vue.createApp({
    component: Menu,
})
app2.mount('#container-2')

