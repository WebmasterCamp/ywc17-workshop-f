<template lang="pug">
  router-link.result-card-container(:to='"/detail/" + id')
    .result-card-header
      .left
        img.image(:src="image")
      .right
        .title {{title}}
        tags-list(:tags="tags")
        .place-container
          i.fal.fa-map-marker-alt
          span.place-name {{location}}
    .result-card-footer
      .rating-container
        .stars
          .star(v-for="s in [true, true, true, true, false]")
            i.fas.fa-star
        .rating-text {{rating}}
      .booking-container
        .details-button ดูรายละเอียด &gt;
</template>

<script>
import TagsList from '../components/TagsList'

export default {
  props: ['id', 'image', 'title', 'tags', 'location', 'rating'],
  computed: {},
  components: {TagsList},
}
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *

  .result-card-container
    display: flex
    flex-direction: column
    background: white
    padding: 10px
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15)
    border-radius: 10px
    cursor: pointer
    color: $secondary
    text-decoration: none !important
    transition: all 0.5s cubic-bezier(0, 1.06, 0.58, 1)
    border: 2px solid transparent

    &:hover
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3)
      border: 2px solid $accent

  .result-card-header
    display: flex

  .result-card-footer
    display: flex
    margin-top: 0.8em

  .image
    width: 100px
    height: 100px
    border-radius: 7px
    background-color: white

  .left
    margin-right: 15px

  .title
    font-size: 1.8em

  .place-container
    margin-top: 8px

  .rating-container
    display: flex

  .stars
    display: flex
    margin-right: 0.6em

    .star
      display: flex
      align-items: center
      justify-content: center
      color: #FF9B05
      font-size: 22px
      margin-right: 0.2em

  .place-name
    margin-left: 10px
    font-family: $body-font

  .rating-text
    font-size: 22px
    font-weight: bold

  .details-button
    color: #828282

  .rating-container
    flex: 2

  .booking-container
    flex: 1
    display: flex
    align-items: center
    justify-content: flex-end
    padding-right: 12px
</style>
