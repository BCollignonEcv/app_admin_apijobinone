<template>
    <header>
        <router-link to="/">Jobinone</router-link>
        <router-link to="/sources">Sources</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/account">Account</router-link>
    </header>
</template>
<script>
import router from '../../routes';

export default {
  data() {
    return {
      paths: this.$router
    }
  }
}
</script>
