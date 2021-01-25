<template>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col
                cols="12"
                md="3"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                First column
                </v-card>
            </v-col>

            <v-col
                cols="6"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                Second column: lung model goes here
                </v-card>
            </v-col>

            <v-col
                cols="6"
                md="3"
            > 
                <v-card
                class="pa-2"
                outlined
                tile
                >
                Third column
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'BaseLayout', //Camel Case
    }
</script>