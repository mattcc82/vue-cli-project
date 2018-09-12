<template>
  <div>
    <b-container>
      <!-- header -->
      <b-row class="header-section">
        <app-header></app-header>
      </b-row>
      <!-- main stage -->
      <div class="main-section">
        <transition name="fade-slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

      <b-row class="footer-section">
        <app-footer></app-footer>  
      </b-row>
    </b-container>
    <!-- footer -->
    <!-- <section class="footer-section">
      <app-footer></app-footer>
    </section> -->
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'
  export default {
    data () {
      return {
        name: 'app'
      }
    },
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    },
    created () {
      this.$store.dispatch('initStocks')
    }
  }
</script>
<style lang="scss" scoped>
  .header-section, .main-section {
    padding-top: 30px;
  }
  .main-section {
    margin-left: -15px;
    margin-right: -15px;
  }
  // fade-slide
  .fade-slide-enter {
    transform: translateY(50px);
    opacity: 0;
  }

  .fade-slide-enter-active {
    transition: all .25s ease-in-out;
  }

  .fade-slide-leave-active {
    transition: .5s ease-in-out;
    transform: translateY(50px);
    opacity: 0;
  }
</style>
