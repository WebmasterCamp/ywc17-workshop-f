<template lang="pug">
  main
    nav-bar
    section.cover-section(:style="image")
      .backdrop-gradient
        .brief-info
          img.profile-photo(:src="data.image")
          .name {{data.title}}
    section.container
</template>

<script>
import NavBar from '../components/NavBar'

import {results} from '../result'

export default {
  components: {NavBar},

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
    margin: 50px 50px

  .name
    color: white
    font-size: 32px

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
    justify-content: center
    padding-bottom: 17px

  .brief-info
    display: flex

  .profile-photo
    width: 150px
    height: 150px
</style>
