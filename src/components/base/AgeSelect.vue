<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-col
        cols="6"
        sm="3"
    >
        <v-text-field
            type="number"
            v-model="AgeSelect"
            :rules="[rules.required, rules.counter, rules.digit]"
            :min="0"
            label="Your Age"
            dense
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
    name: 'BaseAgeSelect', /* Change name of component */ 
    data: function() {
        return{
            AgeSelect: '50',
            rules: {
                required: value => !!value || 'Required',
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