<template lang="pug">
  main
    nav-bar
    section.cover-image
      img(src="../../img/ST3.jpg")
    article.story.container
      h1 วิธีรับมือถ้าลูกมีแฟนเป็นเด็กออทิสติก

      p หากลูกรักหรือคนในครอบครัวมีแฟนเป็นเด็กออทิสติก การดูแลรักษาสภาพจิตใจของเด็กกลุ่มนี้เป็นเรื่องที่ควรทำ เพื่อพยายามทำความเข้าใจ และให้ความรักของพวกเขาทั้งสองอยู่ในรูปแบบอิสระ หรือแนะนำให้ไม่เกิดการคาดหวังต่าง ๆ ที่อาจจะส่งผลต่อความสัมพันธ์ในอนาคตเกิดขึ้นได้

      p และที่สำคัญการยอมรับตัวตนของเด็กทั้งสองฝ่ายควรเป็นเรื่องที่ผู้ปกครองควรทำความเข้าใจ และเปิดกว้างในส่วนนี้ อย่าพูดเปรียบเทียบความรักของพวกเขากับคนอื่น
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  components: {NavBar},
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  h1
    font-family: $heading-font
    font-size: 28px
    line-height: 40px

  h2
    font-family: $heading-font
    font-size: 20px
    font-weight: bold
    line-height: 30px

  p
    font-family: $body-font
    line-height: 25px

  img
    width: 100%
    max-width: 800px

  figcaption
    margin-top: 10px
    font-family: $body-font

  figure
    width: 100%
    margin: 50px auto
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

  .cover-image
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100%
    margin: 50px 0

  .cover-image img
    margin: 0 auto
    margin-top: 20px

  article
    margin-bottom: 50px
</style>
