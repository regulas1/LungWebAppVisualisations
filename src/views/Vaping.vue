<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <!--<container>--> <!-- Remove container since creating an error -->
        <!--<base-subheading>Asthma</base-subheading>--> <!--Main heading-->
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
                                Whats in a Vape
                            </template>

                            <template v-slot:subheader>
                                There are lot of chemicals in Aerosol find out more here
                            </template>

                            <template v-slot:description>
                                <p>
                                    Vape .. 
                                </p>
                                <p>
                                   ...
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
                                What does vaping do to your lungs ?
                            </template>

                            <template v-slot:subheader>
                                Why breathing gets harder
                            </template>

                            <template v-slot:description>
                                <p>
                                   ..info here ..
                                </p>
                                <p>
                                    As a result:
                                    <ul>
                                        <li>   ..info here ...</li>  
                                        <li>   ..info here ...</li>    
                                        <li>   ..info here ..</li>  
                                    </ul>
                                </p>
                                <p>
                                       ..info here ..
                                    <br>   ..info here ..
                                </p>
                            </template>
                        </base-reveal>
                    </v-row>
                <!-- ------------------------------------------------------------------------
                                            COLUMN 1; CONTAINER 3
                    ------------------------------------------------------------------------- -->
                    <v-row>
                        <base-reveal>
                            <template v-slot:header>
                                What does vaping do to your heart?
                            </template>

                            <template v-slot:subheader>
                               .. info here .. 
                            </template>

                            <template v-slot:description>
                                <p>
                                      .. info here .. <strong>   .. info here .. </strong>. 
                                      .. info here .. 
                                </p>
                                <p>
                                       .. info here .. 
                                </p>
                                <p>
         .. info here .. 
                                </p>
                                <p>
   .. info here .. 
                                </p>
                            </template>
                        </base-reveal>
                    </v-row>
               
                <!-- ------------------------------------------------------------------------
                                            COLUMN 1; CONTAINER 4
                    ------------------------------------------------------------------------- -->
                    <v-row>
                        <base-reveal>
                            <template v-slot:header>
                                Other facts about vaping
                            </template>

                            <template v-slot:subheader>
                               .. info here .. 
                            </template>

                            <template v-slot:description>
                                <p>
                                      .. info here .. <strong>   .. info here .. </strong>. 
                                      .. info here .. 
                                </p>
                                <p>
                                       .. info here .. 
                                </p>
                                <p>
         .. info here .. 
                                </p>
                                <p>
   .. info here .. 
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
                    <img src="../../public/img/Rotate_Zoom.png" width="180px">
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
                                    <strong>Airways</strong>
                                    <br>
                                    "Tubes" that allow oxygen to flow to the lungs.
                                </p>
                                <p>
                                    <br>
                                    <strong>FEV1 test</strong>
                                    <br>
                                    Tells us how healthy a lung is.
                                </p>
                                <p>
                                    <br>
                                    <strong>Gas Exchange</strong>
                                    <br>
                                    <ul>
                                        <li>Inhaled oxygen is transferred to the blood from the lungs.</li>
                                        <li>Carbon dioxide is transferred out of the blood (and then exhaled).</li>
                                    </ul>
                                    <br> Check out the 'Breathing' page to learn more about gas exchange.
                                </p>
                            </template>
                        </base-options>
                    </v-row>
                <!-- ------------------------------------------------------------------------
                                            COLUMN 3; CONTAINER 2
                    ------------------------------------------------------------------------- -->
                    <v-row>
                        <base-options 
                            color = "#385F73"
                            button = "none" 
                        > <!--Since button option text is "none", no button will be displayed-->
                            <template v-slot:description>
                                <p>
                                    <strong>3D Model Guide</strong>
                                    <br>Select MILD, MODERATE, or SEVERE to see how different levels of asthma affect air flow.
                                </p>
                                <p>
                                    <strong>Colour Guide</strong>
                                    <ul>
                                        <li>Green represents good air flow</li>
                                        <li>Red is too high</li>
                                        <li>Blue is too low</li>
                                    </ul>
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
import GltfModel from '@/components/ModelGLTF'

export default {
    name: 'Vaping', /* Change name of component */ 
    components: {
        BaseOptions,
        BaseReveal,
        GltfModel,
    }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped></style>