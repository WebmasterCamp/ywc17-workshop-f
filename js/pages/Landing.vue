<template lang="pug">
  section.landing
    nav-bar
    .hero.bg-light.text-center(style="height: 500px") hero
    .article.bg-secondary.text-center(style="height: 400px") article
</template>

<script>
  import NavBar from '../components/NavBar'

  export default {
    computed: {

    },

    components: {NavBar}
  }
</script>

<style lang="sass" scoped>

</style>
