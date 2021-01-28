<!-- *************************************************************************
	   TEMPLATE
	  ************************************************************************ -->  
<template>
    <v-container>
        <v-col
        >
            <v-card class="mx-auto" max-width="500">
            <v-card-text>
                <p class="display-1 text--primary">
                    <slot name="header"></slot>
                </p>
                <p><!--subtitle--></p>
                <div class="text--primary">
                    <slot name="description"></slot>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="teal accent-4" @click="reveal = true">
                Learn More
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                <v-card-text class="pb-0">
                    <p class="display-1 text--primary">
                        <slot name="hiddenHeader">Origin</slot>
                    </p>
                    <p>
                        <slot name="hiddenDescription"></slot> </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="reveal = false">
                    Close
                    </v-btn>
                </v-card-actions>
                </v-card>
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
    name: "BaseTestCard",
    data: function() {
      return {
        reveal: false,
      }
    },
}
</script>

<!-- *************************************************************************
	   STYLE
	  ************************************************************************ --> 
<style>
.v-card--reveal {
bottom: 0;
opacity: 1 !important;
position: absolute;
width: 100%;
}
</style>