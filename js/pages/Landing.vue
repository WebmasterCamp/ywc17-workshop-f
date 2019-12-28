<template lang="pug">
  section.landing
    nav-bar
    hero
    article-section
    Character
</template>

<script>
import Hero from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ArticleSection from '../components/Article'
import Character from '../components/Character'

export default {
  components: {NavBar, Hero, ArticleSection, Character},
}
</script>
