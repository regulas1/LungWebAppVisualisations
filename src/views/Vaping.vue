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
                                 E-liquids are made up of propylene glycol, glycerol, flavourings and other chemicals. They can come with or without nicotine included. There are more than 15,000 flavours available around the world and each of these products will have a different list of chemicals included. Likely at least 50 different chemicals within each. While the chemicals in an e-liquid are thought to be safe to eat, no one knows if they are safe to breath in.
When the aerosol or vape is created through an e-cigarette, different chemicals can be found. This includes dangerous chemicals like formaldehyde, acrolein and acetaldehyde. Heavy metals, which come from the heating coil and other metal parts of the vape, can also be found in the aerosol that is breathed in.
Users are exposed to less chemicals from vaping as compared to smoking, but there are different chemicals associated with vaping. We don’t yet know the effects these different chemicals might have on our bodies.
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
                                What does vaping do to your
                                <p> lungs ?</p>
                            </template>

                            <template v-slot:subheader>
                    
                            </template>

                            <template v-slot:description>
                                <p>
                            
                                </p>
                                <p>
                             
                                    <ul>
                                        <li>  The long-term health effects of vaping are not yet known because they have not been around long enough for us to study them. But many studies are showing that vaping does have some harmful effects. The question is, how harmful are they?</li>  
                                    <li>  Animal studies and short-term studies on humans have shown some similar changes to the lungs as cause by smoking. This includes inflammation (this is the bodies normal response to something foreign entering the body), changes to the airways and even early studies suggesting emphysema and a link to increased chance of cancer. Only time will expose the long-term effects.</li>    
                                    
                                    </ul>
                           
                                <p>
                                    <br>  
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
                                What does vaping do to your <p>heart?</p>
                            </template>

                            <template v-slot:subheader>
                    
                            </template>

                            <template v-slot:description>
                         
                                <p>
                           Vaping has been shown to increase heart rate (how fast your heart beats), blood pressure, and the stiffness of blood vessels around the heart, like traditional cigarettes.
                                </p>
                                <p>
                            
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
                   
                            </template>

                            <template v-slot:description>
                                <p>
                                E-cigarettes were developed as a tool to help reduce smoking and the harmful effects that come with this. Unfortunately, many younger people/non-smokers are starting to vape. While vaping is still thought to be safer than smoking, it is very likely that they will cause harm. Vaping is not for non-smokers, but it has the potential to help smokers to quit.
                                </p>
                                <p>
                               
                                </p>
                                <p>
  
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
                 <button   style="background-color:white;" v-on:click="isHidden = !isHidden">
    Hide show Lungs</button>

                  
                   <!-- <GenderSelect/> -->
                    <GltfModel v-if="!isHidden">
                        </GltfModel>
                    <GltfModelairways v-if="isHidden">
                        </GltfModelairways>
                        
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
                                    <strong> ENDS</strong>
                                    <br>
                      : Electronic Nicotine Deliver System.
                                   

                                </p>
                                <p>
                                    <br>
                                    <strong>E-cigarette / E-cig / Vape
</strong>
                                    <br>
                                   : Electronic cigarette. A type of ENDS that heats up an e-liquid that the user inhales.
                                </p>
                                <p>
                                    <br>
                                    <strong>E-liquid</strong>
                                    <br>
                                    <p>
                                         This is the liquid that is used within an e-cigarette.
                                    </p>
                                    <br> Check out the 'Breathing' page to learn more about gas exchange.
                               
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
                                    <br>Select MILD, MODERATE, or SEVERE to see how different levels of affect air flow because of vaping
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
import GltfModel from '@/components/ModelGLTFthree'
// import GenderSelect from '@/components/base/BtnAgeSelect'
import GltfModelairways from '@/components/ModelGLTFthreeairways'

export default {
    name: 'Vaping', /* Change name of component */ 
    components: {
        BaseOptions,
        BaseReveal,
        GltfModel,
        GltfModelairways,
        // GenderSelect,
    },
      data() {
    return {
      isHidden: false
    };
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped></style>