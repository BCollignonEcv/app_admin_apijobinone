<template>
    <div class="block block__rounded">
        <div class="block__actions">
            <Icone v-if="isFavorite" :filename="'favorite-on.svg'" />
            <Icone v-else :filename="'favorite-off.svg'" />
        </div>
        <div class="block__content spliter-6 vertical">
            <p class="icone_inline">
                <Icone :filename="'account.svg'" />Company
            </p>
            <p class="icone_inline">
                <Icone :filename="'email.svg'" />Poste
            </p>
            <p class="icone_inline">
                <Icone :filename="'password.svg'" />Salaire
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['job'],
    data() {
        return {
            isFavorite: false,
        }
    },
    computed: {

    }
}
</script>

<style>
</style>