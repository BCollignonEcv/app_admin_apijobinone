<template>
  <div>
    <h1>Welcome, to Account</h1>
    <button @click="logout">Se déconnecter</button>
  </div>
</template>

<script>
import { userService } from '../../services'

export default {
  name: 'Account',
  methods: {
    logout(){
      userService.logout();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>
