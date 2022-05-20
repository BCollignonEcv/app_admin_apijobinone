<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from '@/components/global.components/Header.vue'
import Footer from '@/components/global.components/Footer.vue'

export default ({
  name: "App",
  components: {
    Header, Footer,
    RouterView
  },
});
</script>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/base.scss';
@import '@/styles/layer.scss';
@import '@/styles/components.scss';
</style>
