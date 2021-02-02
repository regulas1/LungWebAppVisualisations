<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
    <div>
        <v-container>
        <v-col style="padding-left: 6%">
            <v-card
            class="mx-auto"
            width="400px"
            max-width="400px"
            >
        
            <v-card-title>
                <slot name="header"></slot>
            </v-card-title>
        
            <v-card-subtitle>
                <slot name="subheader"></slot>
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
                    <slot name="description"></slot>
                </v-card-text>
                </div>
            </v-expand-transition>
            </v-card>
        </v-col>
        </v-container>
    </div>
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