<script>
import { useUserStore } from '@/stores/User.store'
import { Icone } from '@/components/basic.components'

export default {
  name: 'Home',
  components: {
    Icone
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
  data() {
    return {
    }
  },
  computed: {},
  mounted() {

  },
  methods: {},
}
</script>

<template>
  <div class="single_page_app">
    <h1>Dweller</h1>
    <section class="search"></section>
    <section class="search_result">

    </section>
  </div>
</template>
