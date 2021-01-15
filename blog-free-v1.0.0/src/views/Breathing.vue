<template>
    <v-container>
        <v-layout column>
            
            <base-subheading>The Lungs</base-subheading> <!--Main heading-->

            <h1 class="title my-3">Normal Breathing</h1> <!--Subheading-->

            <p>
                When the healthy lung breathes in the upright position, the lung tissue that is closest to the 
                diaphragm (the muscle that sits beneath the lungs) expands the most, and the tissue at the top of 
                the lung expands the least. We usually breathe in just as much air as we need to supply oxygen for 
                energy for the activities that we are doing.
            </p>

        <!--Commented out code below corresponds to methods (below) to be exported in script, currently unused-->
        <!--<div
                v-for="(item, idx) in userRecipes"
                class="subheading mb-2"
                :key="idx"
            >
                {{ item }}
            </div>-->

            <v-flex mt-4>
                <!--Change capitalised text-->
                <p>
                    <v-btn color="primary" to="/menu"> Click here </v-btn> to learn more about GAS EXCHANGE.
                </p>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Breathing', /* Change name of component */ 

    /* Commented out code below corresponds to <div> (above), currently unused */
    /* computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        }
    }*/
};

</script>

<style scoped></style>
