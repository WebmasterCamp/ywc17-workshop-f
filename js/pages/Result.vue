<template lang="pug">
  main
    nav-bar
    .container
      b-input.search-field(placeholder="ค้นหา" v-model='search')

      .filter-container
        .filter-button
          i.far.fa-filter
          span ตัวคัดกรอง

        div ค้นหาจาก: ทำอาหารและวาดรูป

      .result-card-rows
        .result-card-item(v-for="result in results" :key="result.id")
          result-card(v-bind="result")
</template>

<script>
import NavBar from '../components/NavBar'
import ResultCard from '../components/ResultCard'

import {results} from '../result'

export default {
  data: () => ({
    search: '',
  }),
  computed: {
    results() {
      if (!this.search) return results

      return results.filter(x => x.title && x.title.includes(this.search))
    },
  },
  components: {ResultCard, NavBar},
}
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *

  .container
    padding: 50px 20px

  .result-card-item
    margin-bottom: 20px

  .result-card-rows
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr))
    grid-gap: 10px 30px

  .search-field
    border-radius: 5em
    margin-bottom: 1em

  .filter-button
    cursor: pointer
    color: $accent
    margin-bottom: 10px

    span
      margin-left: 10px
      font-size: 18px

  .filter-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    margin: 30px 0
</style>
