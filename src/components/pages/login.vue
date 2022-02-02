<template>
  <div class="hello">
    <h1>Login</h1>
    <form id="app"
          @submit.prevent="onSubmit"
          method="post">
      <p>
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            name="username"
            placeholder="Your username"
            required
          >
          <span v-if="username in errors">{{errors.username.message}}</span>
      </p>
      <p>
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="Your password"
            required
          >
          <span v-if="password in errors">{{errors.password.message}}</span>
      </p>       
      <p>
        <input
          type="submit"
          value="S'identifier"
        >
      </p>
      <p>
        <span v-if="errors.global">{{errors.global.message}}</span>
        <span v-if="errors.unknow">{{errors.unknow.message}}</span>
      </p>
    </form>
  </div>
</template>

<script>
import { userService } from '../../services'

export default {
  name: 'Login',
  data(){
    return{
      username: "",
      password: "",
      errors: {},
      request: {},
    }
  },
  methods: {
    onSubmit(){
      this.errors = {};
      if(!this.username){
        this.errors.username = { message: "Username is empty"};
      }
      if(!this.password){
        this.errors.password= { message: "Password is empty"};
      }
      if(Object.keys(this.errors).length === 0){
        userService.login(this.username, this.password).then((response) => {
          // Authentification succed
          this.$router.push('/')
        }).catch(err => {    
          console.log(err)  
          // Authentification failed
          if(err.response && err.response.status === 401){
            this.errors.global = {message: err.response.data}
          }else{
            this.errors.unknow = {message: err}
          }
        });
      }
    },
  }
}


</script>

<style scoped>
</style>
