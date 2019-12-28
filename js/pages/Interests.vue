<template lang="pug">
  main
    nav-bar
    section.page
      .container
        .title
          h1 เลือกความสนใจของลูกของคุณ
          h2 สามารถเลือกได้มากกว่า 1 อย่าง

        .interest-picker
          .row-item(v-for="interest in interests")
            interest-card(v-bind="interest")

        .action-pane
          router-link.skip-button(to='/list') ข้าม &gt;
          b-button.continue-button(to='/list') ต่อไป
</template>

<script>
import {mapState} from 'vuex'

import NavBar from '../components/NavBar'
import InterestCard from '../components/InterestCard.vue'

export default {
  components: {InterestCard, NavBar},

  computed: mapState({
    interests(state, props) {
      const interests = [
        {title: 'ดนตรี', icon: 'treble'},
        {title: 'ทำอาหาร', icon: 'chef'},
        {title: 'วาดรูป', icon: 'artist'},
        {title: 'กีฬา', icon: 'basketball'},
        {title: 'คอมพิวเตอร์', icon: 'computer'},
        {title: 'ภาษาอังกฤษ', icon: 'english'},
      ]

      return interests.map(d => ({...d, selected: state.interests[d.title]}))
    },
  }),
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  h1
    font-weight: bold

  section.page
    padding: 70px 0

  .interest-picker
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr))
    margin: 50px 0

    @media screen and (max-width: $md)
      grid-template-columns: repeat(auto-fit, minmax(200px, 3fr))

  .row-item
    margin-bottom: 30px
    min-width: 200px
    padding: 0 20px

  .title
    padding-left: 10px

  .skip-button
    font-size: 1.2em
    color: #828282
    margin-bottom: 1.5em

  .continue-button
    font-size: 1.3em
    padding: 12px 60px

  .action-pane
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
</style>
