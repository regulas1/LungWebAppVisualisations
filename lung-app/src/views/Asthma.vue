<template>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col
                cols="12"
                md="3"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                    <base-subheading>Asthma</base-subheading> <!--Main heading-->

                    <h1 class="title my-3">Why is breathing difficult?</h1> <!--Subheading-->
                    
                    <p>
                    Asthma causes airways to become narrower which makes it harder to get air into the lungs. This 
                    happens because the muscle cells that wrap around the airways becomes tighter. Sometimes extra 
                    mucus is made and this can block airways. The narrowing and/or blockage of airways reduces the 
                    amount of air flow that can reach the gas exchange surface and can make us feel breathless.
                    </p>
                    
                    <p>
                    Extra paragraph
                    </p>
                </v-card>
            </v-col>

            <v-col
                cols="6"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                Second column: lung model goes here
                </v-card>
            </v-col>

            <v-col
                cols="6"
                md="3"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                    <h1 class="title my-3">Key Vocabulary</h1> <!--Subheading-->
                    <p>
                        <ul>
                            <li>Airways: "tubes" that allow oxygen to flow to the lungs.</li>
                            <li>Gas Exchange: inhaled oxygen is transferred to the blood from the lungs. 
                                Carbon dioxide is transferred out of the blood (and then exhaled).</li>
                        </ul>
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

 <script src="jquery-3.5.1.min.js"></script>

<script>

   
    export default {
        name: 'Breathing',
        //components: 'BaseLayout', // Undefined component (since BaseLayout is a global plugin)
    }

    $(selector).getJSON("./smoker_and_asthmatic_flow_1.json",data,success(data,status,xhr))

</script>