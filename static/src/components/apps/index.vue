<template>
<div class="container main">
  <headnav></headnav>
  <sidenav></sidenav>

  <router-view></router-view>
</div>
</template>

<script>
import Headnav from '../headnav'
import Sidenav from '../sidenav'
export default {
  components: {
    headnav: Headnav,
    sidenav: Sidenav
  }
}
</script>
