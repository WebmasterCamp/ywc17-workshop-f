<template lang="pug">
  main
    nav-bar

    section.payment.container
      h1.heading สมัครเรียน

      h2.subheading เลือกคอร์สที่คุณสนใจ

      .course-list
        .row-item(v-for="course in courses")
          div(@click="setCourse($event, course.title)")
            course-card(v-bind="courses" :selected="course.title == currentCourse")

      hr

      h2.subheading เลือกเวลา

      .timeslot-list
        .row-item(v-for="slot in slots")
          div(@click="setSlot($event, slot.day)")
            slot-card(v-bind="slot" :selected="slot.day == currentSlot")

      .action-panel
        b-button.payment-button(to='/') ชำระเงิน
</template>

<script>
import NavBar from '../components/NavBar'
import CourseCard from '../components/CourseCard'
import SlotCard from '../components/SlotCard'

export default {
  components: {NavBar, CourseCard, SlotCard},
  methods: {
    setSlot(event, day) {
      console.log(day)
      this.currentSlot = day
    },
    setCourse(event, title) {
      console.log(title)
      this.currentCourse = title
    },
  },
  data: () => ({
    currentCourse: null,
    currentSlot: null,
    courses: [
      {
        title: 'คอร์สเรียนเปียโน',
        duration: '36 ชั่วโมง / 3 เดือน',
        price: '12,000',
        detail: 'เรียนการเล่นเปียโน การอ่านโน้ตดนตรี และทฤษฎีดนตรีเบื้องต้น',
      },
      {
        title: 'คอร์สเรียนร้องเพลง',
        duration: '36 ชั่วโมง / 3 เดือน',
        price: '8,500',
        detail:
          'ฝึกการหายใจ เรียนการเล่นร้องเพลง การอ่านโน้ตดนตรี และทฤษฎีดนตรีเบื้องต้น',
      },
    ],
    slots: [
      {
        day: 'จันทร์',
        time: '14:00 - 17:00',
      },
      {
        day: 'พุธ',
        time: '14:00 - 17:00',
      },
      {
        day: 'ศุกร์',
        time: '14:00 - 17:00',
      },
      {
        day: 'เสาร์',
        time: '14:00 - 17:00',
      },
      {
        day: 'อาทิตย์',
        time: '14:00 - 17:00',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .course-list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr))
    margin: 50px 0

    @media screen and (max-width: $md)
      grid-template-columns: repeat(auto-fit, minmax(400px, 2fr))

  .timeslot-list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(200px, 4fr))
    margin: 50px 0

    @media screen and (max-width: $md)
      grid-template-columns: repeat(auto-fit, minmax(200px, 4fr))

  .row-item
    margin-bottom: 30px
    min-width: 200px
    padding: 0 20px

  section.payment
    margin-top: 50px
    margin-bottom: 50px

  h1.heading
    font-size: 32px
    font-weight: bold
    margin-bottom: 18px

  h2.subheading
    font-size: 22px
    font-weight: bold

  .payment-button
    font-size: 23px
    font-weight: 500
    min-width: 170px

  .action-panel
    width: 100%
    display: flex
    align-items: center
    justify-content: center
</style>

