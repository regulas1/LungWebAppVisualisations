<template>
  <div>
    <!--Need extra div since we must have a single root component-->
    <radial-menu
      style="margin: auto; margin-top: 150px; background-color: white"
      :size="70"
      :itemSize="80"
      :radius="120"
      :angle-restriction="100"
    >
      <radial-menu-item
        v-for="(item, index) in items"
        :key="index"
        style="background-color: white"
        @click="() => handleClick(item)"
      >
        <span align="center">{{ item }}</span>
      </radial-menu-item>
    </radial-menu>
    <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">
      {{ lastClicked }} {{ enabledItem }}
    </div>
  </div>
</template>

<script>
import { RadialMenu, RadialMenuItem } from "vue-radial-menu";

export default {
  name: "NavBtn",
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data() {
    return {
      items: ["Learn More", "Pause Model", "My Info"],
      lastClicked: "click on something!",
      enabledItem: [false, false, false] // Boolean to represent current state of button
    };
  },
  methods: {
    handleClick(item) {
      this.lastClicked = item;
      this.enabledItem = !this.enabledItem; // Change boolean value to opposite of current button state
    }
  }
};
</script>
