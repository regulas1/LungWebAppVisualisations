<template>
    <v-container>
        <v-layout column>
            <base-subheading>Smoking</base-subheading> <!--Main heading-->

            <h1 class="title my-3">How does smoking affect my lungs?</h1> <!--Subheading-->

            <p>
                Smoking affects the body in many ways. Smokers are at higher risk of lung cancer. Smoking damages the 
                heart muscle and the blood vessels of the heart. Smoking even damages your eyes.
            </p>
		    
            <p>
                The worst effect of smoking is that it damages the airways and gas exchange tissue of the lungs, 
                making it harder to get enough oxygen. Airways become irritated so they secrete too much mucus which 
                leads to coughing. The lung tissue breaks down and gets ‘floppy’. Smokers become breathless, and are 
                at high risk of heart failure.
            </p>

            <v-flex mt-4>
                <!--Change capitalised text-->
                <p>
                    <v-btn color="primary" to="/menu"> Click here </v-btn> to learn more about YOUR SMOKING LUNG.
                </p>
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
