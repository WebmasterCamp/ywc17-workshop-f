<template lang="pug">
  .hero
    img.hero-bg(src="../../img/hero-bg.svg", alt="alt")
    img.hero-bg-mb(src="../../img/hero-bg-mb.svg", alt="alt")

    .hero-content
      .hero-head กิจกรรมสุดพิเศษ สำหรับลูกคนพิเศษ
      .hero-detail พื้นที่ที่จะเชื่อมโยงคุณและลูกคนพิเศษของคุณเข้ากับสถาบันต่าง ๆ
      b-button.action-button(to='/interests') ค้นหากิจกรรม
</template>

<script>
export default {
  computed: {},

  components: {},
}
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *

  .hero
    text-align: left
    font-family: Kanit
    position: relative

  .hero-bg
    width: 100%
    min-height: 400px
  .hero-bg-mb
    width: 100%
    display: none
    min-height: 400px
  .hero-content
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    padding: 10% 5%

  .hero-head
    font-size: 3.8vw
    font-weight: 1000
    color: #11B3AC

  .hero-detail
    font-size: 1.5vw

  .action-button
    margin-top: 5%
    padding: 1vw 2em
    background-color: #11B3AC
    width:18vw
    font-size: 1.8vw
  .action-button:hover
    background-color: $secondary
    box-shadow: 0 0 0 rgba(0, 0, 0, 0)

  @media only screen and (max-width: 768px)
    .hero
      text-align: center
    .hero-bg
      display: none
    .hero-bg-mb
      display: inline
    .hero-head
      font-size: 7vw
      padding: 0 10vw
      line-height: 1.2
    .hero-detail
      font-size: 3vw
      padding: 3vw 20vw 0 20vw
    .action-button
      margin-top: 5%
      padding: 10px 10px
      background-color: #11B3AC
      width: 40vw
      font-size: 4.1vw
      position: absolute
      bottom: 8vw
      left: 27.5vw
</style>
