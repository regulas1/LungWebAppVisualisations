<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-toolbar
        prominent
        rounded
        flat
        floating
        height="100px"
    >
        <base-age-select />
        <base-gender-select />
        <base-FEV1-select />
    </v-toolbar>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
import BaseAgeSelect from '@/components/base/AgeSelect'
import BaseGenderSelect from '@/components/base/GenderSelect'
import BaseFEV1Select from '@/components/base/FEV1Select'

export default {
    name: "Selectors",
    components: {
        BaseAgeSelect,
        BaseGenderSelect,
        BaseFEV1Select,
    }
}
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
