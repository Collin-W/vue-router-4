<template>
    <div>
        <h1>Hello {{username}}</h1>
        <button @click="logout">Logout</button>
        <router-link :to="{name: 'invoices'}">
        <button >Invoices</button>
    </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: window.user
        }
    },
    methods: {
        logout(){
            window.user = null
           //router push just redirects the user
           this.$router.push({name: 'Home'})

        }
    }
}

</script>