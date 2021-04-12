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
          {{item}}
        </v-tab>
      </v-tabs>
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
    props: ['labels']
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