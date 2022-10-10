<template>
  <div>
    <!-- router link is used for user nav in this app 
a tags will refresh the page when the link tag will not 
router-link is fast

router-link for intrenal links and a tag for external links-->

    <div class="container">
      <!-- router veiw always renderes content of the active page, it renders the matched comp to a given path 
  
  ao depending on your url that comp linked will render-->
      <TheNavigation />
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
 components: {TheNavigation}
};
</script>
