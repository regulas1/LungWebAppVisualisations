<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-btn-toggle
            v-model="toggle_exclusive"
            active-class="white--text"
          >
            <v-btn 
              color="blue"
              class="ma-1"
              outlined
             >
              Heal Me
            </v-btn>
            <v-btn 
              active-class="green white--text"
              class="ma-1"
              outlined
             >
              Zero
            </v-btn>
            <v-btn 
              active-class="orange white--text"
              class="ma-1"
              outlined
             >
              1 Pack
            </v-btn>
            <v-btn 
              active-class="red white--text"
              class="ma-1"
              outlined
             >
              2 Packs
            </v-btn>
          </v-btn-toggle>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
export default {
    name: 'BasePackSelect', /* Change name of component */ 
    data: function() {
        return{
                toggle_exclusive: 2,
        }
    },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>