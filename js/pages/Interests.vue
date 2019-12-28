<template lang="pug">
  main
    nav-bar
    section.page
      .container
        .title
          h1 เลือกความสนใจของลูกของคุณ
          h2 สามารถเลือกได้มากกว่า 1 อย่าง

        .row
          .col-md-3.col-sm-6.row-item(v-for="interest in interests")
            interest-card(v-bind="interest")
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
        {title: 'ดนตรี'},
        {title: 'ทำอาหาร'},
        {title: 'วาดรูป'},
        {title: 'กีฬา'},
        {title: 'คอมพิวเตอร์'},
        {title: 'ภาษาอังกฤษ'},
      ]

      return interests.map(d => ({...d, selected: state.interests[d.title]}))
    },
  }),
}
</script>

<style lang="sass" scoped>
  h1
    font-weight: bold

  section.page
    padding: 70px 0

  .row
    margin-top: 50px

  .row-item
    margin-bottom: 30px

  .title
    padding-left: 10px
</style>
