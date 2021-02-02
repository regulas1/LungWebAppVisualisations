<template>
  <base-card 
      dark 
      class="grey darken-4"
      height="700px"
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
          <typical 
        :steps="['Hello', 1000, 'Hello world!', 500]" 
        :wrapper="'h2'"
      ></typical>
      <typical 
        class="typicalWrapper"
        :steps="['So', 1000, 'So Awesome!', 500, 'So Awesome! Aha :-) 👋', 1000]" 
        :loop=3 
        :wrapper="'h3'"
      ></typical>

          <v-btn
            color="primary"
            depressed
          >
            Subscribe
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
