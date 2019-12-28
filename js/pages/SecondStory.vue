<template lang="pug">
  main
    nav-bar
    section.cover-image
      img(src="../../img/ST2.jpg")
    article.story.container
      h1 สิ่งล้ำค่าที่พ่อแม่ยุคใหม่ควบมอบให้แก่ลูกคนพิเศษ

      p พ่อแม่ย่อมปรารถนาให้ลูกมีความสุข หลายคนเชื่อว่าการมอบสิ่งดี ๆ
        | หรือสิ่งที่ลูกต้องการ คือ การมอบความสุขที่เพียงพอ

      p ความรักที่มอบให้ใช่ว่าเพียงพูดคำว่า “รัก” แต่หมายถึงการปกป้อง การดูแลและคอยเคียงข้าง
        | ไม่มีการตัดสิน ไม่มีการเปรียบเทียบ ไม่มีใครดีกว่าลูกของคุณ และที่สำคัญลูกของคุณก็ไม่ได้ดีกว่าลูกของใคร อย่ามอบน้ำนมก่อนมอบความรัก แต่จงมอบความรักก่อนมอบน้ำนม

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
