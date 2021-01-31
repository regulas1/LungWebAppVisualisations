<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-col
        cols="12"
        sm="6"
    >
        <v-text-field
            type="number"
            v-model="FEV1Select"
            :rules="[rules.required, rules.counter, rules.digit]"
            :min="0"
            label="Your FEV1"
            filled
            counter
            maxlength="3"
        ></v-text-field>
    </v-col>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
export default {
    name: 'BaseFEV1Select', /* Change name of component */ 
    data: function() {
        return{
            FEV1Select: '3.3',
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 3 || 'That is hard to believe!',
                digit: value => value.type!=="number" || 'Please only input numbers',
            }
        }
    },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>