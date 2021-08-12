<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <!--<container>--> <!-- Remove container since creating an error -->
        <!--<base-subheading>Disease</base-subheading>--> <!--Main heading-->
        <v-row 
                class="grey darken-4 fill-height"
                style="padding-bottom: 50px"
            >

            <!-- ------------------------------------------------------------------------
                                                COLUMN 1
                ------------------------------------------------------------------------- -->
                <v-col
                    cols="12"
                    md="3"
                > 
                <!-- ------------------------------------------------------------------------
                                                COLUMN 1; CONTAINER 1
                    ------------------------------------------------------------------------- -->
                    <v-row>
                        <base-reveal>
                            <template v-slot:header>
                                Obstructive Lung Diseases
                            </template>

                            <template v-slot:subheader>
                                Asthma, Bronchiectasis, COPD, Cystic fibrosis
                            </template>

                            <template v-slot:description>
                                <p>
                                    If you have an obstructive lung disease, your airways are <strong>obstructed</strong>, making 
                                    it harder to exhale all of the air in your lungs.
                                </p>
                                <p>
                                    Chronic obstructive pulmonary disease <strong>(COPD)</strong> affects 1 in 7 adults over the age of 40 in New Zealand.
                                    Two common types of COPD include:
                                    <ul>
                                        <li>Chronic bronchitis</li>
                                        <li>Emphysema</li>
                                    </ul>
                                    
                                </p>
                            </template>
                        </base-reveal>
                    </v-row>

                <!-- ------------------------------------------------------------------------
                                            COLUMN 1; CONTAINER 2
                    ------------------------------------------------------------------------- -->
                    <v-row>
                        <base-reveal>
                            <template v-slot:header>
                                Restrictive Lung Diseases
                            </template>

                            <template v-slot:subheader>
                                Pumonary fibrosis
                            </template>

                            <template v-slot:description>
                                <p>
                                    If you have a restrictive lung disease, your lungs are <strong>restricted</strong> from 
                                    filling entirely with air. They cannot expand to their optimal volume.
                                </p>
                                <p>
                                    Some common causes of restrictive lung diseases include:
                                    <ul>
                                        <li>Interstitial lung disease</li>  
                                        <li>Sarcoidosis</li>    
                                        <li>Scoliosis</li>  
                                    </ul>
                                </p>
                            </template>
                        </base-reveal>
                    </v-row>
                </v-col>

            <!-- ------------------------------------------------------------------------
                                            COLUMN 2; CONTAINER 1
                ------------------------------------------------------------------------- -->
                 <v-col
                    cols="12"
                    md="6"
                    align="center"
                >
                    <v-card 
                        height="450px" 
                        color="rgb(0, 0, 0, 0)"
                        flat
                    > 
                    <!--Creates a space for lung model (implement lung model here)-->
                    </v-card>
                    <img src="../../public/img/Rotate_Zoom.png" width="180px">
                </v-col>

            <!-- ------------------------------------------------------------------------
                                                COLUMN 3
                ------------------------------------------------------------------------- -->
                <v-col
                    cols="6"
                    md="3"
                > 
                <!-- ------------------------------------------------------------------------
                                            COLUMN 3; CONTAINER 1
                ------------------------------------------------------------------------- -->
                    <v-row>
                        <base-options 
                            color = "grey"
                            button = "none" 
                        > <!--Since button option text is "none", no button will be displayed-->
                            <template v-slot:header>
                                Key Vocabulary
                            </template>

                            <template v-slot:description>
                                <p>
                                    <br>
                                    <strong>Interstitial</strong>
                                    <br>
                                    Charactersied by a stiff lung.
                                </p>
                                <p>
                                    <br>
                                    <strong>Obstructive</strong>
                                    <br>
                                    Characterised by a soft/squishy lung.
                                </p>
                                <p>
                                    <br>
                                    <strong>Sarcoidosis</strong>
                                    <br>
                                    An autoimmune disease where the immune system attacks its own body.
                                </p>
                                <p>
                                    <br>
                                    <strong>Scoliosis</strong>
                                    <br>
                                    Deformation of the spine.
                                </p>
                            </template>
                        </base-options>
                    </v-row>
                </v-col>
            </v-row>
    <!--</container>-->
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
import BaseOptions from '@/components/base/PageOptions'
import BaseReveal from '@/components/base/RevealCard'

export default {
    name: 'Disease', /* Change name of component */ 
    components: {
        BaseOptions,
        BaseReveal,
    }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>