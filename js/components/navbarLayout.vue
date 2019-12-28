<template lang="pug">
 nav.navbar.navbar-expand-lg.navbar-light.bg-light
  a.navbar-brand(href='#') Navbar
  button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation')
    span.navbar-toggler-icon
  #navbarTogglerDemo02.collapse.navbar-collapse
    ul.navbar-nav.mr-auto.mt-2.mt-lg-0
      li.nav-item.active
        a.nav-link(href='#')
          | Home 
          span.sr-only (current)
      li.nav-item
        a.nav-link(href='#') Link
      li.nav-item
        a.nav-link.disabled(href='#' tabindex='-1' aria-disabled='true') Disabled
    form.form-inline.my-2.my-lg-0
      input.form-control.mr-sm-2(type='search' placeholder='Search')
      button.btn.btn-outline-success.my-2.my-sm-0(type='submit') Search

</template>

<script>
  export default {
    computed: {

    },

    components: {}
  }
</script>

<style lang="sass" scoped>
  @use "../../styles/variables" as *
  .logo
    width: 5%
    height: 90%
  .secondary
    background-color: $secondary
  .accent
    background-color: $accent
</style>