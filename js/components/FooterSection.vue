<template lang="pug">
    .content 
      img(src="../../img/footer.svg")
</template>

<script>
export default {
  computed: {},

  components: {},
}
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *
  .content 
    background-color: $secondary
    padding: 25px 0
  .content img
    display: block
    margin: 0 auto
    height: 125px
</style>
