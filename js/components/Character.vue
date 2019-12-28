<template lang="pug">
  section
    .character-title แนะนำตัวละคร
    .character-container.d-flex
      .character-item
        img(src="../../img/character-1.svg", alt="alt")
        .character-detail-title LD
        .character-detail-content เด็กน้อยผู้น่ารักใสซื่อบริสุทธิ์เหมือนผ้าสีขาวที่พับไว้
      .character-item
        img(src="../../img/character-2.svg", alt="alt")
        .character-detail-title Hyperactive
        .character-detail-content ว่องไวและปราดเปรียวเหมือนแสงสว่าง
      .character-item
        img(src="../../img/character-3.svg", alt="alt")
        .character-detail-title Inattentive
        .character-detail-content การเก็บข้อมูลไม่ใช่เรื่องยากที่จะทำ
      .character-item
        img(src="../../img/character-4.svg", alt="alt")
        .character-detail-title Combined
        .character-detail-content ชอบเก็บรายละเอียดแบบรวดเร็วและวางแผนในอากาศ

</template>

<script>
export default {
  computed: {},

  components: {},
}
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *
  section 
    padding: 50px 0
  .character-title
    font-size: 32px
    margin: 0 5%
  .character-container
    justify-content: center
    padding-top: 5%
  .character-item
    width: 20%
    margin: 15px
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15)
    border-radius: 1rem
    text-align: center
    padding-bottom: 30px
  .character-item img 
    height: auto
    width: 50%
    margin-top: -20%
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15)
    border-radius: 100%
  .character-detail-title
    font-family: $heading-font
    font-size: 18px
    padding: 20px 10% 0 10%
  .character-detail-content
    font-family: $body-font
    font-size: 16px
    padding: 0 20% 0
  @media only screen and (max-width: 768px)
    .character-title
      text-align: center
    .character-container
      flex-direction: column
      padding-top: 0
    .character-item
      margin: 0 auto
      width: 85%
      margin-top: 20%
    .character-item img 
      width: 40%
      margin-top: -15%
</style>
