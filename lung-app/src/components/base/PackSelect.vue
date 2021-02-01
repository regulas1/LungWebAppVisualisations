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
              tile
              :key="index"
              :color="item.color"
              :outlined="toggle_exclusive==index ? false : true"
              @click="toggle_exclusive = index"
            >
              {{ item.title }} 
              {{ index }}
              {{ toggle_exclusive }}
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
                items: [
                { title: 'Heal Me', clicked: true, color: 'blue' },
                { title: 'Zero', clicked: false, color: 'green' }, /* Array corresponding to each page */
                { title: '1', clicked: false, color: 'orange' },
                { title: '2', clicked: false, color: 'red' },
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