<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
  <div>
    <div>
      <button v-on:click="isHidden = !isHidden">Hide show Lungs</button>


         <v-col
                    cols="12"
                    md="6"
                    align="center"
                    v-if="!isHidden"
                >
        <GltfModel> </GltfModel>
      
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
import GltfModel from "@/components/ModelGLTFthree";
export default {
  name: "Modal",
  data() {
    return {
      isHidden: false
    };
  },

  components: {
    GltfModel
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped></style>
