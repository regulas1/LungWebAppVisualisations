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
                    <base-subheading>The Lungs</base-subheading> <!--Main heading-->

                    <h1 class="title my-3">Normal Breathing</h1> <!--Subheading-->
                    
                    <p>
                    When the healthy lung breathes in the upright position, the lung tissue that is closest to the 
                    diaphragm expands the most. The tissue at the top of 
                    the lung expands the least. 
                    </p>
                    <p>
                    We usually breathe in just as much air as we need to supply oxygen for 
                    energy for the activities that we are doing.
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
                <test />
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
                            <li>Diaphragm: the muscle that sits beneath the lungs.</li>
                            <li>Expands: gets bigger by filling with air (similar to a balloon).</li>
                        </ul>
                    </p>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="n in 3"
                :key="n"
            >
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >Hello</v-card>
                <nav-btn />
            </v-col>
        </v-row>
        <subscribe />
    </v-container>
</template>


<script>
    //import test from '@/components/test.js' 

    export default {
        name: 'Breathing',
        components: {
            Subscribe: () => import('@/components/home/Subscribe'),
            NavBtn: () => import('@/components/base/NavBtn'),
            test // Undefined component (since BaseLayout is a global plugin)
        }
    }
</script>