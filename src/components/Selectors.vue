<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
    <v-container>
        <v-row style="padding-top: 3%">
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
            <base-pack-select />
        </v-row>
    </v-container>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
import BaseAgeSelect from '@/components/base/AgeSelect'
import BaseGenderSelect from '@/components/base/GenderSelect'
import BaseFEV1Select from '@/components/base/FEV1Select'
import BasePackSelect from '@/components/base/PackSelect'

export default {
    name: "Selectors",
    components: {
        BaseAgeSelect,
        BaseGenderSelect,
        BaseFEV1Select,
        BasePackSelect,
    }
}
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
