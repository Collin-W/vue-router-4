<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue Travel App</router-link>

    <router-link
      v-for:="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import data from "../data.json";

export default {
  data() {
    return {
      destinations: data.destinations,
    };
  },
};
</script>

<style lang="css">
#nav .vue-router-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style>
