<template>
    <div class="wrapper single_page_form">
        <div class="page_header">
            <Image :filename="'dweller-logo.svg'" class="logo"></Image>
        </div>
        <form @submit.prevent="onSubmit" class="form_registration fw centered">
            <h3 class="form_title">Register</h3>
            <Input v-model.trim="username" :type="'text'" :name="'Username'" :length="{ min: 4, max: 24 }"
                :required="true" />
            <Input v-model.trim="email" :type="'email'" :name="'Email'" :required="true" />
            <InputPassword v-model:password="password" v-model:confirmationPassword="confirmationPassword" :confirmation="true"
                :type="'password'" :name="'Password'" :required="true" :length="{ min: 6, max: 16 }" />
            <div class="submit_container">
                <input type="submit" value="Register">
                <p class="form-info error">{{ errorMsg.form }}</p>
            </div>
            <p class="form-info">You are already register ? <router-link to="/Login">Login</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/User.store'
import { Image } from '@/components/basic.components'
import { Input, InputPassword } from '@/components/form.components'

export default {
    name: 'Register',
    components: {
        Image,
        Input, InputPassword
    },
    data() {
        return {
            username: null,
            email: null,
            password: null,
            confirmationPassword: null,
            errorMsg: {
                form: null,
            }
        }
    },
    setup() {
        const userStore = useUserStore();
        return { userStore }
    },
    computed: {
        isIdenticalPassword() {
            return this.password === this.confirmationPassword;
        }
    },
    methods: {
        async onSubmit() {
            if (!this.isIdenticalPassword) {
                this.errorMsg.passwordMatch = "Passwords are not matching"
            }
            this.resetErrorMessage();
            await this.userStore.signupUser(this.email, this.password, this.username).then(response => {
                if (response && response.status === 'success') {
                    this.$router.push('/')
                } else if (response.message) {
                    this.errorMsg.form = response.message;
                }
            });
        },
        resetErrorMessage() {
            this.errorMsg.form = null;
            this.errorMsg.passwordMatch = null;
        },
    }
}
</script>

<style lang="scss" scoped>
.form_registration {}
</style>
