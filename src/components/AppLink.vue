<template>
  <!-- for external links -->
  <a v-if="isExternal" :href="to"><slot /></a>
  <!-- handles all internal links -->
  <router-link v-else v-bind="$props"><slot /></router-link>
</template>

<script>
//want it to take all the same props as router link
import { RouterLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props,
  },
  computed: {
    isExternal(){
        return typeof this.to === 'string' && this.to.startsWith('http')
    }
  }
};
</script>
