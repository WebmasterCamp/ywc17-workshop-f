<template lang="pug">
  .hero
    .hero-head กิจกรรมพิเศษสำหรับลูกคนพิเศษ
    .hero-detail กิจกรรมพิเศษสำหรับลูกคนพิเศษ
    .hero-button
        b-button(variant='outline-primary') Primary
</template>

<script>
  export default {
    computed: {

    },

    components: {}
  }
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *
  
  .hero
    background-color: #C4C4C4
    text-align: center
    padding: 5%
    font-family: Kanit
  .hero-head
    font-size: 32px
  .hero-detail
    font-size: 16px
  .hero-button
    background-color: $secondary
    border-radius: 30%
    margin-top: 5%
    padding: 1%
  b-button
    background-color: red
</style>