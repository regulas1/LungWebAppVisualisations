const Breathing = { template: '<div>Breathing</div>' }
const Asthma = { template: '<div>Asthma</div>' }

  const routes = [{
    path: '/',
    component: Breathing
},
{
    path: '/breathing',
    component: Breathing
},
{
    path: '/asthma',
    component: Asthma
},
]

let router = new VueRouter({
    routes // short for `routes: routes`
})

const vuetifyOptions = { }
Vue.use(Vuetify)


const app = new Vue({
    el: '#app',
    watch: {},
    mounted() {

    },
    data: {
        title: 'Lungs',
    },
    methods: {},
    router,
    vuetify: new Vuetify(vuetifyOptions),
})