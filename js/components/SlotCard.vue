<template lang="pug">
  .slot-card(:class="classes")
    i.far.fa-check-circle.check-circle(v-if="selected")
    .slot-card-container
      .title วัน{{day}}
      .time {{time}}
</template>

<script>
export default {
  props: ['day', 'time', 'selected'],
  computed: {
    classes() {
      return {selected: this.selected}
    },
  },
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .slot-card
    display: flex
    align-items: center
    justify-content: center
    background: white
    border-radius: 16px
    min-height: 150px
    border: 3px solid #C4C4C4
    position: relative
    max-width: 150px
    margin: 0 auto
    cursor: pointer
    font-family: $body-font

  .selected
    border: 3px solid $accent

  .check-circle
    position: absolute
    top: 10px
    right: 10px
    font-size: 28px
    color: #11b3ac

  .title
    font-size: 24px
    text-align: center

  .day
    font-size: 17px
    text-align: center
</style>
