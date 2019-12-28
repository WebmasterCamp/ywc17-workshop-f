<template lang="pug">
  b-navbar(toggleable='lg' type='light' variant='light')
    b-navbar-brand(to='/')
      img(src="../../img/logo.svg")
    b-navbar-toggle(target='nav-collapse')
      i.far.fa-bars.nav-icon
    b-collapse#nav-collapse(is-nav='')
      b-navbar-nav
      b-navbar-nav.ml-auto
        b-nav-item(to='/' active) หน้าหลัก
        b-nav-item(href='#') บทความ
        b-nav-item(href='#') ติดต่อเรา
        b-button.search-btn(to='/list') ค้นหา
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
  @use '../../styles/variables' as *

  .bg-light
    background: white !important
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)

  a.nav-link.nav-link
    color: $grey
    font-family: $heading-font
    font-size: 18px
    padding-right: 30px

    &:hover
      color: #2d2d30

  a.nav-link.router-link-active
    color: $accent !important

  .search-btn
    min-width: 100px
    margin-left: 10px

    @media screen and (max-width: $md)
      margin-top: 15px

  .navbar-dark .navbar-toggler
    color: $secondary !important

  .navbar-light.navbar-light.navbar-light
    .navbar-toggler
      border-color: transparent

    &.navbar-expand-lg
      padding: 0.6em 2.5em

    .navbar-collapse
      @media screen and (max-width: $md)
        padding: 1.3em 0

  .nav-icon
    font-size: 29px
    color: $secondary
</style>
