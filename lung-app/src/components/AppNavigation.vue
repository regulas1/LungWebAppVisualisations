<template>
    <span>

        <!--All navigation buttons to go inside <v-toolbar> tag-->
        <v-toolbar 
            app 
            color="#385F73" 
            dark
            extended
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
                    :key="index" 
                    :to="item.url"
                    
                >
                    {{ item.title }} 
                </v-btn>
                <!--
                <v-spacer class="hidden-sm-and-down"></v-spacer>
                <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                    <v-btn flat to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
                    <v-btn
                        color="brown lighten-3"
                        to="/join"
                        class="nav-join"
                        data-cy="joinBtn"
                        >JOIN</v-btn
                    >
                </div>
                <div v-else>
                    <v-btn flat to="/about">PROFILE</v-btn>
                    <v-btn outline color="white" @click="logout" data-cy="logout"
                        >Logout</v-btn
                    >
                </div>
                -->
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
                { title: 'My Lungs', url: '/' },
                { title: 'Breathing', url: '/breathing' }, /* Array corresponding to each page */
                { title: 'Asthma', url: '/asthma' },
                { title: 'Smoking', url: '/smoking' },
                { title: 'Disease', url: '/disease' }
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

</style>