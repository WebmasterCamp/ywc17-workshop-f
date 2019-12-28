<template lang="pug">
  section 
    .story-top
      .story-title บทความล่าสุด
            //- .link-container-top.text-center
      //-   router-link(to="/google" tag="div")
      //-     .link อ่านทั้งหมด
    .story-container.d-flex
      .story-item
        img(src="../../img/article-01.jpg", alt="alt")
        .story-overlay
        .story-content-title {{ article[0].title }}
      .story-item
        img(src="../../img/article-02.jpg", alt="alt")
        .story-overlay
        .story-content-title {{ article[1].title }}
      .story-item
        img(src="../../img/article-03.jpg", alt="alt").d-flex
        .story-overlay
        .story-content-title {{ article[2].title }}
    //-   router-link(to="/google" tag="div")
    //-     .link อ่านทั้งหมด
</template>

<script>
  import ArticleData from '../mockData/ArticleData'

  export default {
    data() {
      return {
        article: ArticleData
      }
    },
    computed: {

    },

    components: {}
  }
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *
  .top
    text-align: left
    padding: 0 5%
    font-size: 32px
    color: #1E1E1E
  .link
    font-size: 20px
    color: #1E1E1E
    cursor: pointer
    -webkit-tap-highlight-color: transparent
    text-decoration: none
    color: inherit
  .link:hover
    color: $accent
  .link-container-top
    display: block
  .link-container-bottom
    display: none

  .story-title
    font-size: 32px
    margin: 0 5%
  .story-container
    justify-content: center
  .story-item
    width: 28%
    margin: 15px
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15)
    border-radius: 1rem
    text-align: center
    position: relative
  .story-item img 
    width: 100%
    border-radius: 0.8rem
  .story-content-title 
    position: absolute
    bottom: 1vw
    font-size: 2vw
    right: 1vw
    text-align: right
    color: white
    width: 100%
  .story-overlay
    width: 100%
    height: 100%
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)
    position: absolute
    top: 0
    border-radius: 1rem

  @media only screen and (max-width: 768px)
    .story-title
      text-align: center
    .story-container
      flex-direction: column
      padding-top: 0
    .story-item
      margin: 0 auto
      width: 85%
      margin-top: 20%
</style>