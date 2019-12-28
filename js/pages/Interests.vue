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
  import InterestCard from '../components/InterestCard.vue'

  export default {
    computed: {
      interests() {
        return [{title: 'A'}, {title: 'B'}, {title: 'C'}, {title: 'D'}]
      }
    },

    components: {InterestCard}
  }
</script>

<style lang="sass" scoped>
  section.page
    padding: 70px 0

  .row
    margin-top: 50px
</style>
