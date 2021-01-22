<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->
<template>
    <model-smoker @on-load="onLoad" src='static/models/...'></model-smoker>
</template>


<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->
<script>
import SmokerModel from "/src/smoker-model";

export default {
    name: "smoker-dir",
    components: { 
        SmokerModel,
    },
};
</script>