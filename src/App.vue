<template>
  <div>
    <!-- router link is used for user nav in this app 
a tags will refresh the page when the link tag will not 
router-link is fast

router-link for intrenal links and a tag for external links-->

    <div class="container">
      <!-- router veiw always renderes content of the active page, it renders the matched comp to a given path 
  
  ao depending on your url that comp linked will render-->
  <router-view v-slot="{Component}" >
      <transition name="fade" mode="out-in" >
        <!-- important to use the key here rather than the view tag -->
        <component :key="$route.path" :is="Component"></component>
      </transition>
    </router-view>
      <TheNavigation />
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>


<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

