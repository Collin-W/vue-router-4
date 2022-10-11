<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" name="username" class="input" type="text" />

      <label for="password">Password</label>
      <input v-model="password" name="password" class="input" type="text" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      //this is where we could authenticate our user against out api
      window.user = this.username;
      const redirectPath = this.$route.query.redirect || '/protected'
      this.$router.push(redirectPath);
      // this.$router.push({ name: "protected" });
    },
  },
};
</script>
