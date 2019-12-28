<template lang="pug">
  section.review-section
    .heading
      .title ความคิดเห็น ({{reviews.length}})
      //- .view-all ดูทั้งหมด

    .list-view
      .review-container(v-for="review in reviews")
        .photo-section
          img.review-photo(:src="review.photo")

        .review-section
          .review-user
            span.username {{review.username}}
            .rating-container
              .stars
                .star(v-for="s in [true, true, true, true, false]")
                  i.fas.fa-star
              .rating-text {{review.rating}}.0
          .review-detail
            p {{review.detail}}
</template>

<script>
import reviews from '../reviews'

export default {
  data: () => ({
    reviews,
  }),
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  section.review-section
    max-width: 800px
    margin: 0

  .stars
    display: flex
    margin-right: 0.6em

    .star
      display: flex
      align-items: center
      justify-content: center
      color: #FF9B05
      font-size: 14px
      margin-right: 0.2em

  .heading
    display: flex
    width: 100%
    align-items: center
    justify-content: space-between
    margin-bottom: 20px

  .heading .title
    font-size: 24px
    font-weight: bold

  .heading .view-all
    color: $accent
    font-weight: bold
    font-size: 20px

  .list-view
    display: flex
    flex-direction: column

  .review-container
    display: flex
    font-family: $body-font
    margin-bottom: 25px

  .rating-container
    display: flex

  .photo-section
    display: flex

  .review-section
    display: flex
    flex-direction: column

  .review-user
    display: flex

  .username
    width: 150px
    font-size: 20px

  .review-detail p
    font-size: 16px

  img.review-photo
    width: 60px
    height: 60px
    border-radius: 50%
    margin-right: 20px
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2)

  .rating-text
    font-weight: bold
    font-size: 16px
</style>

