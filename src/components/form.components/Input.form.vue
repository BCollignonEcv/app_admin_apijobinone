<template>
    <div class="input_container">
        <label for="">{{ name }}</label>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="customPlaceholder"
            :type="type" :required="required" class="input" :class="classObject" :minlength="length.min"
            :maxlength="length.max">
        <p></p>
    </div>
</template>

<script>
export default {
    name: 'input-form',
    emits: ['update:modelValue'],
    props: {
        name: String,
        modelValue: String,
        placeholder: String,
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false,
        },
        length: {
            type: Object,
            default: () => {
                return {
                    min: 'auto',
                    max: 'auto'
                }
            }
        },
        customStyle: {
            type: Object,
            default: () => {
                return {
                    color: 'Default',
                    design: 'Default'
                }
            }
        },

    },
    data() {
        return {
            allowedClass: {
                color: ['Default', 'primary', 'secondary', 'correct', 'incorrect'],
                type: ['Default', 'large', 'circle', 'round', 'medium', 'small'],
            }
        }
    },
    computed: {
        customPlaceholder() {
            return this.placeholder ? this.placeholder : `Saisir votre ${this.name}`
        },
        classObject() {
            let customClassObject = [];
            for (const [key, value] of Object.entries(this.customStyle)) {
                if (value != "Default") {
                    if (this.allowedClass[key] && this.allowedClass[key].includes(value)) {
                        customClassObject.push(`input-${value}`);
                    }
                }
            }
            return customClassObject;
        }
    },
}
</script>


<style lang="scss">
</style>