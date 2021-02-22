const Page = {
    template: `<div>Page: {{ $route.params.id }}</div>`
  }
  
/*
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
]*/

const routes = [{   
    path: '/:id', 
    component: Page,
  }]

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