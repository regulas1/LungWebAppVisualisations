<!-- *************************************************************************
     *************************************************************************
	TEMPLATE
    ************************************************************************
	************************************************************************ -->  
<template>
    <v-container>
        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="3"
        >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                  >
                    <slot name="header"></slot>
                  </v-card-title>
  
                  <v-card-subtitle v-text="item.description"></v-card-subtitle>
  
                  <v-card-actions>
                    <v-btn
                      v-if="item.description === 'Click to play the video'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
  
                    <v-btn
                      v-else
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    >
                      LEARN MORE
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: "BaseOptions",
    /*props: [
        'color',
        'title',
        'description',
    ]*/
    data: () => ({
            items: [
                {
                color: '#385F73',
                //src: './path/to/url',
                title: 'The Lungs',
                description: 'How breathing works',
                },
                {
                color: '#1F7087',
                //src: './path/to/url',
                title: 'Gas Exchange',
                description: 'Why do we need it?',
                },
            ],
        }),
}
</script>