<template lang="pug">
  .tags-list(v-if="tags")
    .tag(v-for="tag in tags") {{tag}}
</template>

<script>
export default {
  props: ['tags'],
}
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *

  .tags-list
    display: flex
    margin: 0.2em 0

    .tag
      font-family: $body-font
      font-size: 14px
      padding: 0 10px
      margin-right: 10px
      border: 1px solid #1B2333
      border-radius: 16px

</style>
