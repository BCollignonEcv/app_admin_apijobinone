<template>
    <div class="wrapper single_page_form">
        <div class="page_header">
            <Image :filename="'dweller-logo.svg'" class="logo"></Image>
        </div>
        <form @submit.prevent="onSubmit" class="form_registration fw centered">
            <h3 class="form_title">Login</h3>
            <Input v-model.trim="email" :type="'text'" :name="'Username'" :length="{min: 4, max: 24}" :required="true" />
            <InputPassword v-model:password.trim="password" :type="'password'" :name="'Password'" :required="true" :length="{min: 6, max: 16}" />
            <div class="submit_container">
                <input type="submit" value="Register">
                <p class="form-info error">{{ errorMsg.form }}</p>
            </div>
            <p class="form-info">You are not already register ? <router-link to="/Register">Register</router-link>
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
    setup() {
        const userStore = useUserStore();
        return { userStore }
    },
    data() {
        return {
            email: null,
            password: null,
            errorMsg: {
                form: null,
            }
        }
    },
    computed: {},
    methods: {
        async onSubmit() {
            this.errorMsg.form = null;
            if (this.email && this.password) {
                this.userStore.signinUser(this.email, this.password).then(response => {
                    if (response && response.status === 'success') {
                        this.$router.push('/')
                    } else if (response.message) {
                        this.errorMsg.form = response.message;
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.page_header {
    width: 60%;
    margin: var(--m-1) auto var(--m-3) auto;

    figure {
        margin-bottom: var(--m-3);
    }
}

.form_registration {}
</style>

