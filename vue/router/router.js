import Axios from '../components/Axios.js'
import Message from '../components/Message.js'
import Form from '../components/Form.js'
import Save from '../components/Save.js'
import Community from '../components/Community.js'
import Myplants from '../components/Myplants.js'
import Calendar from '../components/Calendar.js'
import Selection from '../components/Selection.js'
import Notifications from '../components/Notifications.js'
import Privacy from '../components/Privacy.js'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/Save',
            component: Save,

        },
        {
            path: '/Community',
            component: Community,

        },
        {
            path: '/Message',
            component: Message
        },
        {
            path: '/Myplants',
            component: Myplants
        },
        {
            path: '/Calendar',
            component: Calendar
        },
        {
            path: '/Selection',
            component: Selection
        },
        {
            path: '/',
            component: Form,
            alias: '/'
        },
        {
            path: '/Notifications',
            component: Notifications
        },
        {
            path: '/Privacy',
            component: Privacy
        },
        {
            path: '/Axios',
            component: Axios,

        },
    ]
})


export default router





