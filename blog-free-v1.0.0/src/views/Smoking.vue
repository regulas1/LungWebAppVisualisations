<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">Smoking</h1> <!--Change heading-->
            <div
                v-for="(item, idx) in userRecipes"
                class="subheading mb-2"
                :key="idx"
            >
                {{ item }}
            </div>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">See my SMOKING LUNG</v-btn> <!--Change button text-->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Smoking', /* Change name of component */ 
};
</script>

<style scoped></style>
