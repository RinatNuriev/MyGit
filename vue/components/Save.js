import router2 from '../router/router2.js'


const app3 = Vue.createApp({})
app3.use(router2)
app3.mount('#app2')


export default {
    name: 'Save',
    data() {
        return {
            count: 0
        }
    },
    template: `<div id="app">

                    <div class="account-nav">
                        <router-link to="/saveplants" class="link">Сохраненное</router-link>
                        <router-link to="/savearticles" class="link">Сообщество</router-link>
                    </div>
    
                <div class="info2">
                    <router-view></router-view>
                </div>
    </div>`
}