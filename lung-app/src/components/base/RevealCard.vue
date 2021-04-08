<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
        <v-row style="padding-top: 5%">
            <v-container>
        <v-col style="padding-left: 10%">
            <v-card
            class="gradient mx-auto"
            >
        
            <v-card-title>
                <slot name="header"></slot>
            </v-card-title>
        
            <v-card-subtitle>
                <slot name="subheader"></slot>
            </v-card-subtitle>
        
            <v-card-actions>
                <v-btn
                color="primary"
                text
                @click="show = !show"
                >
                <v-text>{{ show ? 'Hide' : 'Reveal' }}</v-text>
                </v-btn>
        
                <v-spacer></v-spacer>
        
                <v-btn
                icon
                color="primary"
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
        </v-row>
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

<!-- *************************************************************************
	   STYLE
	  ************************************************************************ --> 
<style scoped>

/* Color of v-card. Last parameter indicates opacity (i.e. begins with 0% opacity, ends with 50% opacity) */
.gradient {
    background-image: linear-gradient(rgba(177,153,77,1), rgba(177,153,77,0));
}

</style>