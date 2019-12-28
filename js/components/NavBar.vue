<template lang="pug">
  b-navbar(toggleable='lg' type='light' variant='light')
    b-navbar-brand
      img(src="../../img/logo.svg")
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav='')
      b-navbar-nav
      b-navbar-nav.ml-auto
        b-nav-item(to='/' active) หน้าหลัก
        b-nav-item(to='') บทความ
        b-nav-item(to='') ติดต่อเรา
        b-button.search-btn(variant='primary') ค้นหา

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
    padding-right: 25px

    &:hover
      color: #2d2d30

  a.nav-link.router-link-active
    color: $accent !important

  .search-btn
    min-width: 100px

  .navbar-dark .navbar-toggler
    color: $secondary !important
</style>
