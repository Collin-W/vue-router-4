<template>
  <div id="nav">
    <AppLink id="logo" to="/">Vue Travel App</AppLink>

    <AppLink
      v-for:="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
    <AppLink to="https://vueschool.io"
    > Vue School

    </AppLink>
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
