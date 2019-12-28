<template lang="pug">
  section.page
    .container
      h1 เลือกความสนใจของลูกของคุณ
      h2 (เลือกได้มากกว่า 1 อย่าง)

      .row
        .col-md-3.col-sm-6(v-for="interest in interests")
          interest-card(v-bind="interest")
</template>

<script>
  import {mapState} from 'vuex'

  import InterestCard from '../components/InterestCard.vue'

  export default {
    components: {InterestCard},

    computed: mapState({
      interests(state, props) {
        const interests = [{title: 'A', name: 'A'}, {title: 'B', name: 'B'}, {title: 'C', name: 'C'}, {title: 'D', name: 'D'}]
        return interests.map(d => ({...d, selected: state.interests[d.name]}))
      }
    }),
  }
</script>

<style lang="sass" scoped>
  section.page
    padding: 70px 0

  .row
    margin-top: 50px
</style>
