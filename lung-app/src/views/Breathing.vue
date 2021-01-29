<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-container>
        <base-subheading>Breathing</base-subheading> <!--Main heading-->
        <v-container class="grey lighten-5">
            <v-row class="grey lighten-3 fill-height">
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
                                Normal Breathing
                            </template>

                            <template v-slot:subheader>
                                What our lungs should do
                            </template>

                            <template v-slot:description>
                                <p>
                                    When the healthy lung breathes in the upright position, the lung tissue that is closest to the 
                                    diaphragm expands the most. The tissue at the top of 
                                    the lung expands the least.
                                </p>
                                <p>
                                    Any activity we do requires a certain amount of energy. We usually breathe in
                                    just enough air to supply oxygen needed to create that energy.
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
                                Healthy Gas Exchange
                            </template>

                            <template v-slot:subheader>
                                Oxygen IN and carbon dioxide OUT
                            </template>

                            <template v-slot:description>
                                <p>
                                    Air (oxygen &amp; carbon dioxide) is transported to/from our lungs via 30,000 airways. Blood is carried to the lungs via blood vessels.
                                    Deep within the lungs, there are gas exchange units called <strong>alveoli</strong>.  
                                </p>
                                <p>    
                                    Air and blood are delivered to the alveoli. Oxygen mixes with blood to form oxygenated blood, which is carried to the heart and delivered around the body. 
                                    Carbon dioxide must be removed from the blood and exhaled.
                                </p>
                                <p>
                                    Gas exchange works best when the same amount of air and blood is delivered to the alveoli. 
                                    Lung diseases affect the amount of air or blood that is delivered: some get too much, and some get too little.
                                </p>
                            </template>
                        </base-reveal>
                    </v-row>
                </v-col>

            <!-- ------------------------------------------------------------------------
                                           COLUMN 2; CONTAINER 1
                ------------------------------------------------------------------------- -->
                 <v-col
                    cols="6"
                >Second column: lung model goes here
                </v-col>

            <!-- ------------------------------------------------------------------------
                                            COLUMN 3; CONTAINER 1
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
                            <p>
                                <br>
                                <strong>Alveoli</strong>
                                <br>
                                Site/unit of gas exchange at the end of airways deep within the lungs.
                            </p>
                            <p>
                                <br>
                                <strong>Diaphragm</strong>
                                <br>
                                The muscle that sits beneath the lungs.
                            </p>
                            <p>
                                <br>
                                <strong>Expands</strong>
                                <br>
                                Gets bigger by filling with air (similar to a balloon).
                            </p>
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