<template lang="pug">
  section.landing
    nav-bar
    hero
    article-section
    Character
    footer-section
</template>

<script>
import Hero from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ArticleSection from '../components/Article'
import Character from '../components/Character'
import FooterSection from '../components/FooterSection'

export default {
  components: {NavBar, Hero, ArticleSection, Character, FooterSection},
}
</script>
