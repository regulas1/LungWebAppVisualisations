<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
    <v-container>
        <v-col>
            <v-card
            class="mx-auto"
            max-width="344"
            >
        
            <v-card-title>
                <slot name="header">Top western road trips</slot>
            </v-card-title>
        
            <v-card-subtitle>
                <slot name="subheader">1,000 miles of wonder</slot>
            </v-card-subtitle>
        
            <v-card-actions>
                <v-btn
                color="orange lighten-2"
                text
                @click="show = !show"
                >
                <v-text>{{ show ? 'Hide' : 'Reveal' }}</v-text>
                </v-btn>
        
                <v-spacer></v-spacer>
        
                <v-btn
                icon
                color="orange lighten-2"
                @click="show = !show"
                >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
        
            <v-expand-transition>
                <div v-show="show">
                <v-divider></v-divider>
        
                <v-card-text>
                    <slot name="description">I'm a thing.</slot>
                </v-card-text>
                </div>
            </v-expand-transition>
            </v-card>
        </v-col>
    </v-container>
</template>

<!-- *************************************************************************
	   SCRIPT
	  ************************************************************************ --> 

<script>
export default {
    name: "BaseReveal",
    data: function() {
      return {
        show: false,
      }
    },
}
</script>