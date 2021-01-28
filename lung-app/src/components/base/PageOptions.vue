<!-- *************************************************************************
     *************************************************************************
	   TEMPLATE
    ************************************************************************
	  ************************************************************************ -->  
<template>
    <v-container>
        <v-col
        >
            <v-card
              :color="color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="title"
                  >
                  </v-card-title>
  
                  <v-card-subtitle v-text="description"></v-card-subtitle>
  
                  <v-card-actions
                    v-if="button != 'none'"> <!--If the text for the button is "none", no button will be displayed-->
                    <v-btn
                      v-if="description === 'Click to play the video'"
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
                    > <!--The text for the button is determined by the text within button = " " in the component using this custom directive-->
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
        </v-col>
    </v-container>
</template>

<!-- *************************************************************************
     *************************************************************************
	   SCRIPT
    ************************************************************************
	  ************************************************************************ --> 

<script>
export default {
    name: "BaseOptions",
    props: [
        'color',
        'title',
        'description',
        'button',
    ]
}
</script>