<template lang="pug">
  section 
    .title บทความล่าสุด
    .article-row.p-4.d-flex.justify-content-center.flex-wrap
      .article-el
        img(src="../../img/article-01.jpg", alt="alt")
        .article-overlay
        .article-title {{ article[0].title }}
      .article-el
        img(src="../../img/article-02.jpg", alt="alt")
        .article-overlay
        .article-title {{ article[1].title }}
      .article-el
        img(src="../../img/article-03.jpg", alt="alt")
        .article-overlay
        .article-title {{ article[2].title }}
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

  section
    text-align: center
    font-size: 32px
  .article-el
    width: 28%
    margin: 0.8rem
    position: relative
  .article-el img 
    width: 100%
    height: 100%
    border-radius: 0.8rem
  .article-title 
    position: absolute
    bottom: 1vw
    font-size: 2vw
    right: 1vw
    text-align: right
    color: white
    width: 100%
  .article-overlay
    width: 100%
    height: 100%
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)
    position: absolute
    top: 0

  @media only screen and (max-width: 576px)
    .title
      text-align: left
      padding-left: 10%
    .article-el
      width: 80%
    .article-title 
      bottom: 8%
      font-size: 20px
      right: 8%
</style>