<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-container>
        <base-subheading>Disease</base-subheading> <!--Main heading-->
        <v-container class="grey lighten-5">
            <v-row class="grey lighten-3 fill-height">
                <v-col
                    cols="12"
                    md="3"
                > 
                <!-- ------------------------------------------------------------------------
                                                TOP LEFT CONTAINER
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
                                            BOTTOM LEFT CONTAINER
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
                                        <li>Interstitial lung disease</li> <!--Key Vocab: interstitial (stiff lung)-->
                                        <li>Sarcoidosis</li> <!--Key vocab: autoimmune disease which attacks body-->
                                        <li>Scoliosis</li> <!--Key vocab: deformation of spine-->
                                    </ul>
                                </p>
                            </template>
                        </base-reveal>
                    </v-row>
                </v-col>

            <!-- ------------------------------------------------------------------------
                                            CENTRE CONTAINER
                ------------------------------------------------------------------------- -->
                 <v-col
                    cols="6"
                >Second column: lung model goes here
                </v-col>

            <!-- ------------------------------------------------------------------------
                                            TOP RIGHT CONTAINER
                ------------------------------------------------------------------------- -->
                <v-col
                    cols="6"
                    md="3"
                > 
                    <base-options 
                        color = "grey"
                        button = "none" 
                    > <!--Since button option text is "none", no button will be displayed-->
                        <template v-slot:header>
                            Key Vocabulary
                        </template>

                        <template v-slot:description>
                            <ul>
                                <li>Interstitial: charactersied by a stiff lung</li>
                                <li>Obstructive: characterised by a soft/squishy lung</li>
                                <li>Sarcoidosis: an autoimmune disease where the immune system attacks its own body</li>
                            </ul>
                        </template>
                    </base-options>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
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
<style scoped></style>