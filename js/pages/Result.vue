<template lang="pug">
  main
    nav-bar
    .container
      b-input.search-field(placeholder="ค้นหา")

      .filter-container
        .filter-button
          i.far.fa-filter
          span ตัวคัดกรอง

        div ค้นหาจาก: ทำอาหารและวาดรูป

      .result-card-rows
        .result-card-item(v-for="result in results" )
          result-card(v-bind="result")
</template>

<script>
import NavBar from '../components/NavBar'
import ResultCard from '../components/ResultCard'

export default {
  data: () => ({
    results: [
      {
        title: 'โรงเรียนปัญญาวุฒิกร',
        tags: ['ดนตรี', 'กีฬา', 'อาชีพ'],
        location: 'แขวงลาดยาว เขตจตุจักร',
        rating: 4.5,
        category: 'school',
        email: 'fmrth3@ksc.th.com',
        phone: '0-2589-5762',
        image: 'https://picsum.photos/500',
      },
      {
        title: 'นายเชาวลิต สาดสมัย',
        tags: ['ชีวิต', 'จิตใจ'],
        location: 'แขวงบางยี่ขาน เขตบางพลัต',
        rating: 4.8,
        category: 'teacher',
        phone: '081-239-0813',
        image: 'https://picsum.photos/500',
      },
      {
        title: 'โรงเรียนทีปังกรวิทยาพัฒน์',
        tags: ['ดนตรี', 'กีฬา', 'อาชีพ'],
        location: 'แขวงบางยี่ขาน เขตบางพลัต',
        rating: 4.8,
        category: 'teacher',
        website: 'https://www.tp-school.ac.th',
        phone: '0-2243-8565',
        image: 'https://picsum.photos/500',
      },
      {
        title: 'โรงเรียนประถมนนทรี',
        tags: ['เรียนร่วมกับเด็กปกติ'],
        location: 'แขวงบางยี่ขาน เขตบางพลัต',
        rating: 4.8,
        category: 'teacher',
        website: 'https://www.tp-school.ac.th',
        phone: '0-2243-8565',
        image: 'https://picsum.photos/500',
      },
    ],
  }),
  computed: {},
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
