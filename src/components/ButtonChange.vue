<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <!--Centers buttons in column-->
        <sequential-entrance>
          <v-btn
            v-for="(item, index) in items"
            class="ma-2"
            fab
            large
            :key="index"
            :color="item.color"
            :outlined="toggle_exclusive == index ? false : true"
            @click="toggle_exclusive = index"
          >
            {{ item.title }}
          </v-btn>
        </sequential-entrance>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
export default {
  name: "ButtonChange" /* Change name of component */,
  data: function() {
    return {
      toggle_exclusive: 2,
      temp_toggle: 2,
      items: [{ title: "Show Lungs", color: "blue white--text" }]
    };
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped></style>
