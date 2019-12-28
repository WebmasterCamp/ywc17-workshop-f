<template lang="pug">
  .interest(@click="toggle", :class="classes")
    i.far.fa-check-circle.check-circle(v-if="selected")
    .x-container
      img(:src="image" class="icon-image")
      .interest-text {{title}}
</template>

<script>
export default {
  props: ['title', 'icon', 'selected'],
  computed: {
    classes() {
      return {selected: this.selected}
    },
    image() {
      return `/icons/${this.icon}.svg`
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
    align-items: center
    justify-content: center
    background: white
    border-radius: 16px
    min-height: 200px
    border: 3px solid #C4C4C4
    position: relative
    max-width: 300px
    margin: 0 auto
    cursor: pointer

    .interest-text
      font-size: 26px

  .selected
    border: 3px solid $accent

  .check-circle
    position: absolute
    top: 20px
    right: 20px
    font-size: 38px
    color: #11b3ac

  .x-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

  .icon-image
    width: 60px
    height: 60px
    margin-bottom: 10px
</style>
