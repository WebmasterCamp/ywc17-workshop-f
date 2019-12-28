<template lang="pug">
  .interest(@click="toggle", :class="classes")
    i.far.fa-check-circle.check-circle(v-if="selected")
    .interest-text {{title}}
</template>

<script>
export default {
  props: ['title', 'image', 'selected'],
  computed: {
    classes() {
      return {selected: this.selected}
    },
  },
  methods: {
    toggle() {
      this.$store.commit('toggleInterest', this.title)
    },
  },
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .interest
    display: flex
    align-items: flex-end
    justify-content: center
    background: white
    border-radius: 16px
    min-height: 200px
    border: 3px solid #C4C4C4
    position: relative
    max-width: 300px
    margin: 0 auto

    .interest-text
      font-size: 20px
      margin-bottom: 20px

  .selected
    border: 3px solid $accent

  .check-circle
    position: absolute
    top: 20px
    right: 20px
    font-size: 38px
    color: #11b3ac
</style>
