<template>
    <div>
        <div class="input_container">
            <label for="">{{ name }}</label>
            <input @input="setPassword($event)" :placeholder="customPlaceholder" class="input" :class="classObject"
                :minlength="length.min" :maxlength="length.max" type="password" required>
        </div>
        <template v-if="confirmation">
            <div class="input_container">
                <label for="">Confirmation de {{ name }}</label>
                <input @input="setConfirmationPassword($event)" :placeholder="customPlaceholderConfirmPassword"
                    class="input" :class="classObject" :minlength="length.min" :maxlength="length.max" type="password"
                    required>
            </div>
        </template>
        <p v-if="!match && confirmation" class="form-info error">Les {{ name }} doivent etre identiques</p>
    </div>
</template>

<script>
export default {
    name: 'input-password-form',
    emits: ['update:password', 'update:confirmationPassword'],
    props: {
        confirmation: {
            type: Boolean,
            default: false
        },
        name: String,
        password: String,
        confirmationPassword: String,
        placeholder: String,
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
            match: true,
            error: '',
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
        customPlaceholderConfirmPassword() {
            return this.placeholder ? this.placeholder : `Confirmer votre ${this.name}`
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
    methods: {
        setPassword(e) {
            this.$emit('update:password', e.target.value)
        },
        setConfirmationPassword(e) {
            this.$emit('update:confirmationPassword', e.target.value)
        },
    },
    watch: {
        password: function(newVal) {
          if(newVal === this.confirmationPassword){
              this.match = true
          }else{
              this.match = false
          }
        },
      	confirmationPassword: function(newVal) { 
          if(newVal === this.password && (this.password !== '')){
              this.match = true
          }else{
              this.match = false
          }
        }
      }
}

</script>


<style lang="scss">
</style>