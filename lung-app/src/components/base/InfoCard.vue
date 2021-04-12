<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
    <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-3 basil--text">
                <slot name="header"></slot>
            </h1>
        </v-card-title>

        <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          v-for="(item, index) in labels"
          :key="index"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(item, index) in descriptions"
          :key="index"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
</template>

<!-- *************************************************************************
	   SCRIPT
	  ************************************************************************ --> 

<script>
export default {
    name: "InfoCard",
    data() {
      return {
        tab: null,
        text: this.descriptions[0],
      }
    },
    props: ['labels', 'descriptions']
}
</script>

<!-- *************************************************************************
	   STYLE
	  ************************************************************************ --> 
<style scoped>
/* Helper classes */
.basil {
background-color: #FFFBE6 !important;
}
.basil--text {
color: #356859 !important;
}

</style>