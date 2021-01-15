<template>
    <v-container>
        <v-layout column>
            <base-subheading>Disease</base-subheading> <!--Main heading-->

            <h1 class="title my-3">Obstructive</h1> <!--Subheading-->

            <p>
                In people with an obstructive lung disease, their airways are <strong>obstructed</strong>, making 
                it harder to exhale all of the air in their lungs.
            </p>
		    
            <h1 class="title my-3">Restrictive</h1> <!--Subheading-->

            <p>
                In people with a restrictive lung disease, their lungs are <strong>restricted</strong> from 
                filling entirely with air. They cannot expand to their optimal volume.
            </p>

            <v-flex mt-4>
                <!--Change capitalised text-->
                <p>
                    <v-btn color="primary" to="/menu"> Click here </v-btn> to learn more about YOUR LUNG DISEASE.
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Disease', /* Change name of component */ 
};
</script>

<style scoped></style>
