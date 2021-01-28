<template>
    <v-container>
        <v-layout column>
            <base-subheading>Disease</base-subheading> <!--Main heading-->

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
import BaseReveal from '@/components/base/RevealCard'

export default {
    name: 'Disease', /* Change name of component */ 
    components: {
        BaseReveal,
    }
};
</script>

<style scoped></style>
