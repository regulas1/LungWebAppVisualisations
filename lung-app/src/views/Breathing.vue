<!-- *************************************************************************
     *************************************************************************
	TEMPLATE
    ************************************************************************
	************************************************************************ -->  

<template>

<div>
    <v-container>
        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="3"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>
  
                  <v-card-subtitle v-text="item.description"></v-card-subtitle>
  
                  <v-card-actions>
                    <v-btn
                      v-if="item.description === 'Click to play the video'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
  
                    <v-btn
                      v-else
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    >
                      LEARN MORE
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
          </v-container>

    <v-container class="grey lighten-5">
        <v-row class="yellow lighten-3 fill-height">
            <v-col
                cols="12"
                md="3"
            > 
            <!-- *************************************************************************
                                        TOP LEFT CONTAINER
                 ************************************************************************ -->
                 <v-row> 
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                        <base-subheading>The Lungs</base-subheading> <!--Main heading-->

                        <h1 class="title my-3">Normal Breathing</h1> <!--Subheading-->
                        
                        <p>
                        When the healthy lung breathes in the upright position, the lung tissue that is closest to the 
                        diaphragm expands the most. The tissue at the top of 
                        the lung expands the least. 
                        </p>
                        <p>
                        We usually breathe in just as much air as we need to supply oxygen for 
                        energy for the activities that we are doing.
                        </p>
                    </v-card>
                </v-row>
                <!-- *************************************************************************
                                            BOTTOM LEFT CONTAINER
                 ************************************************************************ -->
                 <v-row> 
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                        <base-subheading>The Lungs</base-subheading> <!--Main heading-->

                        <h1 class="title my-3">Normal Breathing</h1> <!--Subheading-->
                        
                        <p>
                        When the healthy lung breathes in the upright position, the lung tissue that is closest to the 
                        diaphragm expands the most. The tissue at the top of 
                        the lung expands the least. 
                        </p>
                        <p>
                        We usually breathe in just as much air as we need to supply oxygen for 
                        energy for the activities that we are doing.
                        </p>
                    </v-card>
                </v-row>
            </v-col>

        <!-- *************************************************************************
                                     CENTRE CONTAINER
             ************************************************************************ -->
            <v-col
                cols="6"
            >Second column: lung model goes here
            </v-col>

        <!-- *************************************************************************
                                    TOP LEFT CONTAINER
             ************************************************************************ -->
            <v-col
                cols="6"
                md="3"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                    <h1 class="title my-3">Key Vocabulary</h1> <!--Subheading-->
                    <p>
                        <ul>
                            <li>Diaphragm: the muscle that sits beneath the lungs.</li>
                            <li>Expands: gets bigger by filling with air (similar to a balloon).</li>
                        </ul>
                    </p>
                </v-card>
            </v-col>
        </v-row>

        <!--<v-row>-->
                <nav-btn />
        <!--</v-row>-->
        <subscribe />
    </v-container>
</div>
</template>

<!-- *************************************************************************
     *************************************************************************
	SCRIPT
    ************************************************************************
	************************************************************************ -->  
<script>
    //import NavBtn from '@/components/base/NavBtn'

    export default {
        name: 'Breathing',
        data: () => ({
            items: [
                {
                color: '#385F73',
                //src: './path/to/url',
                title: 'The Lungs',
                description: 'How breathing works',
                },
                {
                color: '#1F7087',
                //src: './path/to/url',
                title: 'Gas Exchange',
                description: 'Why do we need it?',
                },
            ],
        }),
        components: {
            Subscribe: () => import('@/components/home/Subscribe'),
            NavBtn: () => import('@/components/base/NavBtn'),
            //BaseLayout // Undefined component (since BaseLayout is a global plugin)
        }
    }
</script>

<!-- *************************************************************************
     *************************************************************************
	STYLE
    ************************************************************************
	************************************************************************ -->  