<!--Corresponds to all 3 images on Homepage-->
<template>
  <v-container>
    <v-row>
      <!--Corresponds to main images on Homepage-->
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <!--Centres "Page 1 of 1"-->
    <v-row align="center">
      <v-col cols="3">

      </v-col>
      <v-col
        class="text-center subheading"
        cols="6"
      >
        PAGE {{ page }} OF {{ pages }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities needed for all three images on Homepage
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },


    data: () => ({
      layout: [2, 2], // Corresponds to positioning of two smaller images on Homepage
      page: 1,
    }),
  
    // Corresponds to 2 smaller images and page number on Homepage
    computed: {
      ...mapState(['articles']),
      pages () {
        return Math.ceil(this.articles.length / 11)
      },
      paginatedArticles () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11

        return this.articles.slice(start, stop)
      },
    },
  }
</script>
