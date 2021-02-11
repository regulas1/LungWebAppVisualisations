<template>
  <base-card 
      dark 
      class="gradient"
      height="600px"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
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
      </v-row>
  </base-card>
</template>

<script>
import typical from '@/components/home/Typical.vue'

  export default {
    name: 'HomeBanner',
    components: typical
  }
</script>

<style scoped>
.gradient {
    background-image: linear-gradient(rgba(33,33,33,0.5), rgba(177,153,77,0.5));
}
</style>