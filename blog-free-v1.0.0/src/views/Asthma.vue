<template>
    <v-container>
        <v-layout column>
            
            <base-subheading>Asthma</base-subheading> <!--Main heading-->

            <h1 class="title my-3">Why is breathing difficult?</h1> <!--Subheading-->

            <p>
                Asthma causes airways to become narrower which makes it harder to get air into the lungs. This 
                happens because the muscle cells that wrap around the airways becomes tighter. Sometimes extra 
                mucus is made and this can block airways. The narrowing and/or blockage of airways reduces the 
                amount of air flow that can reach the gas exchange surface and can make us feel breathless. 
            </p>
                
            <p>
                Select an option from MILD, MODERATE, and SEVERE asthma to see how flow of air is altered.
            </p>

            <v-flex mt-4>
                <!--Change capitalised text-->
                <p>
                    <v-btn color="primary" to="/menu"> Click here </v-btn> to learn more about measuring LUNG FUNCTION.
                </p>
            </v-flex>

            <p>
                When the airways constrict during an asthma attack, this causes the air delivery to be ‘patchy’. 
                Some patches of lung get a small amount of air, and others get more air than usual.
            </p>

            
            
            <p>
                In this model <font color="green">Green</font> is good, <font color="red">Red</font> is too high, and <font color="blue">Blue</font> is too low.
            </p>
		    

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Asthma', /* Change name of component */ 
};
</script>

<style scoped></style>
