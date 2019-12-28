<template lang="pug">
  section.landing
    nav-bar
    hero
    article-section
</template>

<script>
import Hero from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ArticleSection from '../components/Article'

export default {
  components: {NavBar, Hero, ArticleSection},
}
</script>
