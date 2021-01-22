<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
    <span> <!--span only takes up as much space as needed (not entire page width)-->
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown ighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <!--Fill-->
            </v-list>
        <v-navigation-drawer>

        <v-toolbar app colour="brown darken-4" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <!--"md-and-up" refers to screen sizes >= large tablets (& all laptops)-->

            <v-spacer class="hidden-md-and-up"></v-spacer>

            <router-link to="/">
                <v-toolbar-title data-cy="homeBtn">{{
                    homeTitle
                }}</v-toolbar-title>
            </router-link>

            <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/breathing"
                data-cy="pageBtn"
            >Breathing</v-btn>
        </v-toolbar>
    </span>
</template>


<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->
<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            homeTitle: 'My Lungs',
            drawer: false,
            items: [
                { title: 'Breathing', url: '/breathing' },
            ],
        };
    },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->
<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>