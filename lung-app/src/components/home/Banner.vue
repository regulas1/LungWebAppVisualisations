<template>
  <base-card 
      dark 
      class="grey darken-4"
      height="600px"
      width="100%"
    >
      <v-row 
        no-gutters
        class="fill-height"
        align="center"
      >
        <v-col
          cols="11"
          md="6"
          offset="1"
        >
          <h1 class="display-3 font-weight-light">
            Visualising My Lungs
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Use your mouse to rotate the interactive lung model
          </div>

          <v-btn
            color="primary"
            depressed
          >
            Learn How
          </v-btn>
        </v-col>

        <v-col
          cols="12"
          md="5"
          align="center"
        >
          <model-json />
        </v-col>
        
      </v-row>
  </base-card>
</template>

<script>
//import typical from '@/components/home/Typical.vue'
import ModelJson from '../ModelGLTF.vue'

export default {
    name: 'HomeBanner',
    components: {
      //typical,
      ModelJson,
  }
}
</script>