<template>
  <div class="single_page_app">
    <section class="account_header">
      <p>Hello {{ userStore.getUserName }} !</p>
    </section>
    <section class="account_informations spliter-5 vertical">
      <h5>Mon profil</h5>
      <div class="block block__rounded">
        <template v-if="switchAccountEditMode">
          <form @submit.prevent="onSubmit" class="form_registration fw centered">
            <h3 class="form_title">Login</h3>
            <!-- <div class="input_container">
                <label>Email</label>
                <input type="email" v-model.trim="email" placeholder="Saisir votre email" required>
            </div> -->
            <div class="input_container">
                <label>Password</label>
                <input type="password" v-model.trim="password" placeholder="Saisir votre password" minlength="6"
                    maxlength="16" required>
            </div>
            <div class="submit_container">
                <input type="submit" value="Register">
                <p class="form-info error">{{ errorMsg.form }}</p>
            </div>
            <p class="form-info">You are not already register ? <router-link to="/Register">Register</router-link>
            </p>
        </form>
          <Button @click="updateUser()">Sauvegarder</Button>
        </template>
        <template v-else>
          <div class="block__actions">
            <Icone :filename="'edit.svg'" @click="switchAccountEditMode = true" />
          </div>
          <div class="block__content spliter-6 vertical">
            <p class="icone_inline">
              <Icone :filename="'account.svg'" />{{ userStore.getUserName }}
            </p>
            <p class="icone_inline">
              <Icone :filename="'email.svg'" />{{ userStore.getUserEmail }}
            </p>
            <p class="icone_inline">
              <Icone :filename="'password.svg'" />∗∗∗∗∗∗∗∗∗∗∗∗
            </p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/User.store'
import { Button, Input } from '@/components/form.components'
import { Icone } from '@/components/basic.components'

export default {
  name: 'Account',
  components: {
    Button, Input,
    Icone
  },
  data() {
    return {
      switchAccountEditMode: false,
    }
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
  methods: {
    updateUser(){
      this.switchAccountEditMode = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.account_header {
  padding: var(--m-5) 0;
  text-transform: capitalize;
  font-weight: bold;
}

.account_informations {
  @include flex;
  border-radius: var(--m-5);
  background-color: var(--c-0-25);

  .block__rounded {
    .block__content {
      @include flex;
    }
  }
}
</style>
