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
                                Breathlessness
                            </template>

                            <template v-slot:subheader>
                                Why am I out of breath?
                            </template>

                            <template v-slot:description>
                                <p>
                                    Asthma causes airways to become narrower, which makes it harder to get air into the lungs. This 
                                    happens because the muscle cells that wrap around the airways becomes tighter. Sometimes extra 
                                    mucus is made and this can block airways. 
                                </p>
                                <p>
                                    The narrowing and/or blockage of airways reduces the amount of air flow that can reach the gas exchange surface. This can make us feel breathless.
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
                                Asthma Attack
                            </template>

                            <template v-slot:subheader>
                                Why breathing gets harder
                            </template>

                            <template v-slot:description>
                                <p>
                                    During an asthma attack, the airways constrict. This results in "patchy" air delivery.
                                    Some patches of the lung get a small amount of air, and other patches get more than usual.
                                </p>
                                <p>
                                    As a result:
                                    <ul>
                                        <li>Gas exchange becomes worse.</li>  
                                        <li>The breathing muscles must work harder.</li>    
                                        <li>Much more energy is required to breathe.</li>  
                                    </ul>
                                // eslint-disable-next-line prettier/prettier
                                </p>
                                <p>
                                    Asthma attacks can be very distressing.
                                    <br>Learning good breathing techniques can be a valuable way to ease discomfort.
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
                                FEV1
                            </template>

                            <template v-slot:subheader>
                                Measuring lung function
                            </template>

                            <template v-slot:description>
                                <p>
                                    The classic test of lung function is <strong>FEV1</strong>. 
                                    This measures the volume of air that is forcefully exhaled from the lung in one second.
                                </p>
                                <p>
                                    The size of FEV1 depends on the size of a person’s lungs. 
                                    But it also depends on how stretchy or floppy the lung tissue and airways are.
                                </p>
                                <p>
                                    The size of FEV1 depends on:
                                    <ul>
                                        <li>The size of a person's lungs.</li>  
                                        <li>How stretchy or floppy the lung tissue &amp; airways are.</li>    
                                    </ul>
                                </p>
                                <p>
                                    When a person with healthy lungs breathes out some volume of air, at least 80% of this air will be expired in the first 1 second.
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
                    >   <GltfModel>
                        </GltfModel>
                    
                    <!--Creates a space for lung model (implement lung model here)-->
                    </v-card>
                    <!-- <img src="../../public/img/Rotate_Zoom.png" width="180px"> -->
                      
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
import GltfModel from '@/components/ModelGLTFtwo'



export default {
    name: 'Disease', /* Change name of component */ 
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