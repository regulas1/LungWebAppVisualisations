<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-container>
        <base-subheading>Asthma</base-subheading> <!--Main heading-->
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
                                            BOTTOM LEFT CONTAINER
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
                                </p>
                                <p>
                                    Asthma attacks can be very distressing.
                                    <br>Learning good breathing techniques can be a valuable way to ease discomfort.
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
                            <p>
                                <br>
                                <strong>Airways</strong>
                                <br>
                                "Tubes" that allow oxygen to flow to the lungs.
                            </p>
                            <p>
                                <br>
                                <strong>Gas Exchange</strong>
                                <br>
                                <ul>
                                    <li>Inhaled oxygen is transferred to the blood from the lungs.</li>
                                    <li>Carbon dioxide is transferred out of the blood (and then exhaled).</li>
                                </ul>
                                <br> Check out the 'Breathing' page for more details.
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