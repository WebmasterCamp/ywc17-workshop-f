<template lang="pug">
  main
    nav-bar
    section.cover-section(:style="image")
      .backdrop-gradient
        .brief-info
          img.profile-photo(:src="data.image")
          .info
            .name {{data.title}}

            .tags-container
              tags-list(:tags="data.tags")

    section.container
      .place-container(v-if="data.location")
        i.icon.fal.fa-map-marker-alt
        span.place-name {{data.location}}

      .phone-container(v-if="data.phone")
        i.icon.fal.fa-phone
        span.place-name {{data.phone}}

      hr

      story-section

      review-section

      .action-panel
        b-button.contact-btn(href="https://th-th.facebook.com/M.C.H.Moochopo" target="_blank") ติดต่อสอบถาม
        b-button.payment-btn(to='/payment') สมัครเรียน
</template>

<script>
import NavBar from '../components/NavBar'
import TagsList from '../components/TagsList'
import StorySection from '../components/StorySection'
import ReviewSection from '../components/ReviewSection'

import {results} from '../result'

export default {
  components: {NavBar, TagsList, StorySection, 'review-section': ReviewSection},

  computed: {
    data() {
      const id = this.$route.params.id
      const data = results.find(x => x.id === id)
      if (!data) return results[0]

      return data
    },
    image() {
      return {
        'background-image': `url(${this.data.coverImage})`,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .container
    margin-top: 120px

  .cover-section
    position: relative
    width: 100%
    height: 250px
    background-color: $primary
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    background-size: cover
    background-attachment: scroll
    background-position: top center

  .backdrop-gradient
    position: absolute
    width: 100%
    height: 100%
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 7%, transparent 46%)

    display: flex
    align-items: flex-end
    justify-content: flex-start
    padding-bottom: 10px
    padding-left: 200px

  .tags-container
    margin-top: 25px

  .brief-info
    display: flex
    position: absolute
    margin-top: 55px

  .profile-photo
    width: 100px
    height: 100px
    position: absolute
    left: -43%
    top: -30%
    border-radius: 10px
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)

  .name
    display: flex
    align-items: flex-end
    position: relative
    color: white
    font-size: 32px

    @media screen and (max-width: $sm)
      font-size: 28px

  .place-name
    margin-left: 10px
    font-family: $body-font
    font-size: 18px
    line-height: 30px

  .icon
    width: 1.2em

  hr
    margin: 2em

  .action-panel
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 50px

  .payment-btn
    background: $accent
    margin-left: 40px
</style>
