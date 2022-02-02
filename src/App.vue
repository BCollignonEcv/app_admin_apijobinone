<template>
  <Header />
  <main>
  <router-view v-slot="{ Component }">
    <transition 
      enter-active-class="animate__animated animate__fadeIn" 
      leave-active-class="animate__animated animate__fadeOutDown"
      mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  </main>
  <Footer />
</template>

<script>
import Header from './components/views/header.vue'
import Footer from './components/views/footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
</style>
