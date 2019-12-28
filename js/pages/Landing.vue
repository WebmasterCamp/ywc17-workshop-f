<template lang="pug">
  section.landing
    nav-bar
    .hero(style="height: 500px") hero
    Article
</template>

<script>
  import NavBar from '../components/NavBar'
  import Article from '../components/Article'

  export default {
    computed: {

    },

    components: {
      NavBar,
      Article}
  }
</script>

<style lang="sass" scoped>

</style>
