<template>
    <div> <!--Need extra div since we must have a single root component-->
        <radial-menu
            style="margin: auto; margin-top: 150px; background-color: white"
            :itemSize=50
            :radius="120"
            :angle-restriction="180">
            <radial-menu-item 
                v-for="(item, index) in items" 
                :key="index" 
                style="background-color: white" 
                @click="() => handleClick(item)">
            <span>{{item}}</span>
            </radial-menu-item>
        </radial-menu>
        <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>
    </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'NavBtn',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['Breathing', 'Asthma', 'Smoking', 'Disease',],
      lastClicked: 'click on something!'
    }
  },
  methods: {
    handleClick (item) {
      this.lastClicked = item;
    }
  }
}
</script>