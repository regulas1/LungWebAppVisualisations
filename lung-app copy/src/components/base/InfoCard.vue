<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
    <v-card color="#ECEFF1">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-3 dark--text">
                <slot name="header"></slot>
            </h1>
        </v-card-title>

        <v-tabs
        v-model="tab"
        background-color="transparent"
        color="dark"
        grow
        center-active
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
            color="#ECEFF1"
            flat
          >
            <v-card-text>{{ descriptions[index] }}</v-card-text>
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
      }
    },
    props: ['labels', 'descriptions'],
}
</script>

<!-- *************************************************************************
	   STYLE
	  ************************************************************************ --> 
<style scoped>
/* Helper classes */
.dark {
background-color: #37474F !important;
}
.dark--text {
color: #37474F !important;
}

</style>