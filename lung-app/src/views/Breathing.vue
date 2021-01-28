<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  

<template>

<div>
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
                    <base-options 
                    color = "#385F73"
                    button = "Learn more"
                    >
                    <template v-slot:header>
                        The Lungs
                    </template>

                    <template v-slot:description>
                        <p>
                            <br>
                            <strong>Normal Breathing</strong>
                            <br>
                        </p>
                        <p>
                            When the healthy lung breathes in the upright position, the lung tissue that is closest to the 
                            diaphragm expands the most. The tissue at the top of 
                            the lung expands the least.
                        </p>
                        <p>
                            We usually breathe in just as much air as we need to supply oxygen for 
                            energy for the activities that we are doing.
                        </p>
                    </template>
                    </base-options>
                </v-row>

            <!-- ------------------------------------------------------------------------
                                        BOTTOM LEFT CONTAINER
                ------------------------------------------------------------------------- -->
                <v-row> 
                    <base-options 
                    color = "#1F7087"
                    button = "Learn more"
                    >
                    <template v-slot:header>
                        Gas Exchange
                    </template>

                    <template v-slot:description>
                        <p>
                            <br>
                            <strong>Why do we need it?</strong>
                            <br>
                        </p>
                        <p>
                            Paragraph text
                        </p>
                        <p>
                            Paragraph text
                        </p>
                    </template>
                    </base-options>
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
                            <strong>Diaphragm:</strong>
                            <br>
                            The muscle that sits beneath the lungs.
                        </p>
                        <p>
                            <br>
                            <strong>Expands:</strong>
                            <br>
                            Gets bigger by filling with air (similar to a balloon).
                        </p>
                    </template>
                </base-options>
            </v-col>
        </v-row>
        <nav-btn />
        <subscribe />
    </v-container>
</div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->  
<script>
    //import NavBtn from '@/components/base/NavBtn'
    import BaseOptions from '@/components/base/PageOptions'

    export default {
        name: 'Breathing',
        components: {
            Subscribe: () => import('@/components/home/Subscribe'),
            NavBtn: () => import('@/components/base/NavBtn'),
            BaseOptions
            //BaseLayout // Undefined component (since BaseLayout is a global plugin)
        }
    }
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->  