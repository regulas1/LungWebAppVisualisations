<template>
    <span>
        <!--All navigation buttons to go inside <v-toolbar> tag-->
        <v-toolbar 
            color="grey darken-4" 
            dark
            prominent
            style="padding-top: 1%"
        >
            <sequential-entrance>
                <!--Corresponds to left-most button ("My Lungs")-->
                <!--<v-spacer class="hidden-md-and-up"></v-spacer>
                <router-link to="/">
                    <v-toolbar-title 
                        data-cy="titleBtn"
                        class="title"
                    >
                        {{ appTitle }}
                    </v-toolbar-title>
                </router-link>-->

                <!--Corresponds to v-btn for each page-->
                <!--Change url name ("to=") and button text-->
                <v-btn 
                    v-for="(item, index) in items"
                    class="ma-2"
                    tile
                    large
                    :key="index" 
                    :to="item.url"
                    :color="item.colour"
                    active-class="active"
                >
                    {{ item.title }} 
                </v-btn>   
            </sequential-entrance>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'My Lungs', /* Text in left-most button */
            items: [
                { title: 'My Lungs / pūkahukahu', colour: '#caa962', url: '/' },
                { title: 'Breathing / manawa', colour: '#9dafb5', url: '/breathing' }, /* Array corresponding to each page */
                { title: 'Asthma / huangō', colour: '#c5673e', url: '/asthma' },
                { title: 'Smoking / momi hikareti', colour: '#9ca286', url: '/smoking' },
                { title: 'Disease / mate', colour: '#87795f', url: '/disease' }
            ]
        };
    },
    /*
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    } */
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

.active {
    outline: solid 0.2em 
}

</style>