<template>
  <figure :class="classObject">
      <img :src="'/img/' + filename" :alt="filename">
  </figure>
</template>

<script>
export default {
    name:"image-basic",
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
                size: ['Default', 'large', 'medium', 'small', 'fullWidth', 'fullHeight'],
            }
        }
    },
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(`img-${value}`);
                    }
                }
            }
            return customClassObject;
        }
    },
}
</script>

<style lang="scss" scoped>
    figure{
        &.img-fullWidth{
            width: 100%;
            height: auto;
        }

        &.img-fullHeight{
            width: auto;
            height: 100%;
        }

        &.img-large{
            width: 70%;
            height: auto;
        }
        &.img-medium{
            width: 50%;
            height: auto;
        }

        &.img-small{
            width: 30%;
            height: auto;
        }

        img{
            width: 100%;
        }
    }
</style>