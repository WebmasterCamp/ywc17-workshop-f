<template lang="pug">
  .box(@click="toggle", :class="classes") {{title}} {{selected ? 'T' : 'F'}}
</template>

<script>
  export default {
    props: ['name', 'title', 'image', 'selected'],
    computed: {
      classes() {
        return {selected: this.selected}
      }
    },
    methods: {
      toggle() {
        this.$store.commit('toggleInterest', this.name)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .box
    display: flex
    align-items: center
    justify-content: center
    background: #ddd
    border-radius: 16px
    min-height: 200px

  .selected
    background: $secondary
</style>
