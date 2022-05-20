<template>
    <img :src="getIconeUrl()" class="icone" :class="classObject">
</template>

<script>
export default {
    props: {
        filename: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'Default'
        },
    },
    data () {
        return {
            allowedClass: {
                size: ['Default', 'large', 'small'],
            }
        }
    },
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(`icone-${value}`);
                    }
                }
            }
            return customClassObject;
        }
    },
    methods: {
        getIconeUrl() {
            return new URL(`../../assets/icones/${this.filename}`, import.meta.url).href
        }
    }
}
</script>

<style lang="scss" scoped>
.icone {
    width: 24px;
    height: 24px;

    &-small {
        width: 16px;
        height: 16px;
    }

    &-large {
        width: 32px;
        height: 32px;
    }
}
</style>