<template lang="pug">
  .course-card(:class="classes")
    i.far.fa-check-circle.check-circle(v-if="selected")
    .course-card-container
      .card-brief
        .course-intro
          .title {{title}}
          .duration {{duration}}
        .course-cost
          span.price {{price}}
          span.thb บาท

      .card-detail
        p {{detail}}
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: ['title', 'duration', 'price', 'selected', 'detail'],
  computed: {
    classes() {
      return {selected: this.selected}
    },
  },
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .course-card
    display: flex
    align-items: center
    justify-content: space-between
    background: white
    border-radius: 16px
    min-height: 100px
    border: 3px solid #C4C4C4
    padding: 15px 45px
    position: relative
    max-width: 600px
    margin: 0 auto
    cursor: pointer
    font-family: $body-font
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1)

    &:hover
      border: 3px solid desaturate($accent, 50%)

  .selected
    border: 3px solid $accent

  .check-circle
    position: absolute
    bottom: 20px
    right: 20px
    font-size: 38px
    color: #11b3ac

  .title
    font-size: 20px
    font-weight: 600

  .card-brief
    display: flex

  .duration
    color: $accent

  .course-cost
    .price
      color: $accent
      font-size: 25px
      font-weight: bold
      margin-right: 8px

    .thb
      font-size: 17px

  .card-brief
    justify-content: space-between
    margin-bottom: 15px

  .course-card-container, .card-brief
    width: 100%

  .card-detail p
    font-size: 18px
    margin: 0
</style>
