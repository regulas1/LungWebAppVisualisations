<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <!--<container>--> <!-- Remove container since creating an error -->
        <!--<base-subheading>Smoking</base-subheading>--> <!--Main heading-->
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
                                Effects of Smoking
                            </template>

                            <template v-slot:subheader>
                                How does smoking affect my lungs?
                            </template>

                            <template v-slot:description>
                                <p>
                                   The worst effect of smoking is that it damages the airways and gas exchange tissue of your lungs. This makes it harder to get enough oxygen.
                                </p>
                                <p>
                                    Some consequences of lung damage:
                                    <ul>
                                        <li>Airways become irritated, so they secrete too much mucus. This then leads to coughing.</li>  
                                        <li>The lung tissue breaks down and becomes ‘floppy’.</li>    
                                        <li>Smokers become breathless, and are at high risk of heart failure.</li>  
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
                                Effects of Quitting
                            </template>

                            <template v-slot:subheader>
                                How will quitting affect my condition?
                            </template>

                            <template v-slot:description>
                                <p>
                                    Smoking affects your body in many ways. Smokers are at higher risk of lung cancer. Smoking damages your 
                                    heart muscle and the blood vessels of your heart. Smoking even damages your eyes.
                                </p>
                                <p>
                                   For patients of <strong>Chronic Obstructive Pulmonary Disease</strong>, smoking is especially harmful.
                                   Smoking cessation is the single most effective treatment
                                   available.
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
                    <!-- <v-card 
                        height="450px" 
                        color="rgb(0, 0, 0, 0)"
                        flat
                    >  -->
                    <!--Creates a space for lung model (implement lung model here)-->
                    <!-- </v-card> -->
                    <!-- <img src="../../public/img/Rotate_Zoom.png" width="180px"> -->
                    <GltfModel>
                        </GltfModel>
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
                                    <strong>Cessation</strong>
                                    <br>
                                    To cease or stop.
                                </p>
                                <p>
                                    <br>
                                    <strong>Chronic Obstructive Pulmonary Disease</strong>
                                    <br>
                                    An obstructive lung disease characterised by breathlessness.
                                    <br> Check out the 'Disease' page to learn more about obstructive lung diseases.
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
import GltfModel from '@/components/ModelGLTFthree'
// import Selectors from '@/components/Selectors'

export default {
    name: 'Disease', /* Change name of component */ 
    components: {
        BaseOptions,
        BaseReveal, GltfModel,

        // Selectors,

    }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>