<template lang="pug">
  .hero
    .hero-head กิจกรรมสุดพิเศษ สำหรับลูกคนพิเศษ
    .hero-detail Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
    b-button.action-button(variant='primary') ค้นหากิจกรรม
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
    text-align: left
    padding: 5%
    font-family: Kanit

  .hero-head
    font-size: 32px

  .hero-detail
    font-size: 20px

  .action-button
    border-radius: 5em
    margin-top: 5%
    padding: 0.5em 2em

  b-button
    background-color: red
</style>
