<template lang="pug">
  main
    nav-bar
    section.cover-image
      img(src="../../img/STOCK1.jpg")
    article.story.container
      h1 CBD oil น้ำมันกัญชา ยาวิเศษสำหรับเด็กพิเศษ

      p หากลูกของคุณกำลังโยนของไปมา สะบัดมือซ้ำ ๆ หรือชอบพูดเลียนแบบ โดยอาการอาจรุนแรงไปจนถึงขั้นโมโหร้าย รวมกระทั่งการอาละวาด และทำร้ายร่างกายตนเอง
        | หากคำตอบของการควบคุมอาการของเด็กพิเศษเหล่านี้คือ การใช้น้ำมันกัญชาล่ะ

      p จากงานวิจัยศึกษาเรื่องพัฒนาการของเด็กออทิสติก (อายุต่ำกว่า 18 ปี)
        | พบว่า การใช้น้ำมันกัญชาเป็นทางเลือกที่ปลอดภัยและมีประสิทธิภาพต่อการรักษา
        | ทั้งอาการชัก สั่นเทา การแสดงอารมณ์เกรี้ยวกราดก้าวร้าว และการอยู่ไม่เป็นสุข

      p ซึ่งสิ่งที่น่าสนใจคือ การแพทย์มหาวิทยาลัย Soroka รายงานว่าหลังจากหกเดือนของการรักษาร้อยละ 80 ของผู้เข้าร่วม พบว่าบางกลุ่มมีพฤติกรรมที่ดีขึ้นอย่างเห็นได้ชัด

      p “ลองจินตนาการว่า ถ้าเด็กพิเศษกลุ่มนี้ไม่ได้รับการดูแลที่ใกล้ชิดและเหมาะสม กำลังเกิดอาการร้องไห้ โมโหและอาละวาด ไม่หยุด เพราะไม่สามารถควบคุมและระงับอามรณ์ที่เกิดขึ้นได้”

      p คงไม่แปลกที่พ่อแม่จะลองหาทุกวิถีทางในการรักษาและพบว่า น้ำมันกัญชาคือสิ่งที่ช่วยให้เด็กพิเศษเหล่านี้สามารถควบคุมอามรณ์ และใช้ชีวิตประจำวันได้อย่างปกติ

      p อย่างไรก็ตามการใช้ CBD oil จำเป็นต้องใช้สารที่มีมาตรฐานตามตำรายา เพื่อให้ได้คุณภาพยาที่สม่ำเสมอ จะต้องอยู่ภายใต้คำแนะนำจากผู้เชี่ยวชาญเท่านั้น และใช้เฉพาะในกรณีที่การรักษาแผนปัจจุบันไม่ได้ผล เนื่องจากยังไม่มีข้อมูลเพียงพอที่ใช้ยาชนิดแรกในการรักษา

      p อ้างอิง: CBD Oil and Autism: What Parents Need to Know
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
