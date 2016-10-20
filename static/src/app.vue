<template>
  <router-view></router-view>
</template>

<script>
import Login from './components/login'
import Headnav from './components/headnav'
export default {
  components: {
    login: Login,
    headnav: Headnav
  }
}
</script>
