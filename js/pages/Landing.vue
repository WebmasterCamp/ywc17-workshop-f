<template lang="pug">
  section.landing
    nav-bar
    hero
    .article.bg-secondary.text-center(style="height: 400px") article
</template>

<script>
  import NavBar from '../components/NavBar'
  import Hero from '../components/Hero'

  export default {
    computed: {

    },

    components: {NavBar, Hero}
  }
</script>

<style lang="sass" scoped>

</style>
