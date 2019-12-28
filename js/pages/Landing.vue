<template lang="pug">
  section.landing
    nav-bar
    hero
    .article.bg-secondary.text-center(style="height: 400px") article
</template>

<script>
import Hero from '../components/HeroSection'
import NavBar from '../components/NavBar'

export default {
  components: {NavBar, Hero},
}
</script>
