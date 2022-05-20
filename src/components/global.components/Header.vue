<template>
  <header v-if="userStore.isLogged" class="header-navigation" :class="{ open: open }">
    <transition name="slide">
      <div v-if="open" class="header-navigation_overlay vertical" @click="open = false">
        <div class="title sb">
          <Image :filename="'dweller-logo.svg'" :size="'small'" />
          <Icone :filename="'cross.svg'" />
        </div>
        <div class="header_welcome">
          <p>Bonjour {{ userStore.getUserName }},</p>
        </div>
        <nav class="app_navigation">
          <RouterLink to="/">Rechercher un Job</RouterLink>
          <RouterLink to="/account">Mon compte</RouterLink>
        </nav>
        <div v-if="userStore.isLogged" class="flex_footer header_footer">
          <button @click="logout()">Log Out</button>
        </div>
      </div>
    </transition>
    <div class="header-navigation_fixe">
      <Icone :filename="'menu.svg'" @click="open = true"></Icone>
    </div>
  </header>
</template>

<script>
import { Icone, Image } from '@/components/basic.components'
import { useUserStore } from '@/stores/User.store'


export default {
  components: {
    Icone, Image
  },
  data() {
    return {
      open: false
    }
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
  methods: {
    logout() {
      this.userStore.logoutUser()
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="scss">
$headerOverlayWidth: 90vw;

.header-navigation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  cursor: pointer;


  .header-navigation_fixe {
    padding: var(--m-5);
  }

  .header-navigation_overlay {
    @include flex;
    z-index: 1001;
    padding: var(--m-5);
    transition: margin .2s ease-in;

    .title {
      @include flex;
      align-items: center;
      margin-bottom: var(--m-3);
    }

    .header_welcome {
      padding: var(--m-5);
      text-transform: capitalize;
    }

    .app_navigation {
      a {
        display: block;
        width: 100%;
        border-bottom: 1px solid var(--c-1-25);
        font-weight: bold;
        color: var(--c-1-100);
        padding: var(--m-5);
        text-transform: none;
      }
    }

    .header_footer {
      padding: var(--m-5);
      border-top: 1px solid var(--c-1-25);
    }

    width: $headerOverlayWidth;
    height: 100vh;
    background-color: var(--c-0-100);
    box-shadow: 5px 0px 15px 0px var(--c-1-50);
  }

}

.slide-enter-active,
.slide-leave-active {
  margin-left: 0;
}

.slide-enter-from,
.slide-leave-to {
  margin-left: -$headerOverlayWidth;
}
</style>