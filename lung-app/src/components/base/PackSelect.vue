<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <!--<v-btn-toggle
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
          </v-btn-toggle>-->
          <div>
          <v-btn 
              v-for="(item, index) in items"
              class="ma-2"
              fab
              large
              :key="index"
              :color="item.color"
              :outlined="toggle_exclusive==index ? false : true"
              @click="toggle_exclusive = index"
            >
              {{ item.title }} 
            </v-btn>
            </div>
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
                temp_toggle: 2,
                items: [
                { title: 'Heal', color: 'blue white--text' },
                { title: 'Zero', color: 'green white--text' }, /* Array corresponding to each page */
                { title: '1', color: 'orange white--text' },
                { title: '2', color: 'red white--text' },
            ],

        }
    },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>