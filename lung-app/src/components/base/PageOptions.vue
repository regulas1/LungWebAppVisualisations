<!-- *************************************************************************
	   TEMPLATE
	  ************************************************************************ -->  
<template>
    <v-container>
        <v-row style="padding-top: 6%">
        <v-col style="padding-right: 12%">
            <v-card
              :color="color"
              dark
            >           
              <!-- ------------------------------------------------------------------------
                                            TITLE OF CARD
                  ------------------------------------------------------------------------- -->                   
                  <v-card-title
                    :class="headline"
                  >
                    <slot name="header"> </slot>
                  </v-card-title>

              <!-- ------------------------------------------------------------------------
                                            BODY CONTENT OF CARD
                  ------------------------------------------------------------------------- -->   
                  <v-card-subtitle>
                    <slot name="description"> </slot>
                  </v-card-subtitle>

              <!-- ------------------------------------------------------------------------
                                            BUTTON OF CARD
                  ------------------------------------------------------------------------- -->   
                  <v-card-actions
                    v-if="button != 'none'"> <!--If the text for the button is "none", no button will be displayed-->
                    <v-btn
                      v-if="button === 'Click to play the video'"
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
                      v-text="button"
                      @click="reveal = true"
                    > <!--The text for the button is determined by the text within button = " " in the component using this custom directive-->
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                      <v-card-text class="pb-0">
                        <p class="display-1 text--primary">
                          Origin
                        </p>
                        <p>late 16th century</p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn text color="teal accent-4" @click="reveal = false">
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
            </v-card>
        </v-col>
        </v-row>
        </v-container>
</template>

<!-- *************************************************************************
	   SCRIPT
	  ************************************************************************ --> 

<script>
export default {
    name: "BaseOptions",
    props: [
        'color',
        'button',
    ],
    data: function() {
      return {
        reveal: false,
      }
    },
}
</script>

<!-- *************************************************************************
	   STYLE
	  ************************************************************************ --> 
<style>
.v-card--reveal {
bottom: 0;
opacity: 1 !important;
position: absolute;
width: 100%;
}

.headline {
  font-size: 5px;
}
</style>