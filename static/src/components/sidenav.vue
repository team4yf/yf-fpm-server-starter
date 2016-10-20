<template>
  <nav>
    <ul>
      <li v-bind:class="{ 'active': isA }"><a @click="clickNav('isA')" v-link="'/protal'">系统状况</a></li>
      <li v-bind:class="{ 'active': isB }"><a @click="clickNav('isB')" v-link="'/apps/list'">应用管理</a></li>
      <li class="disable" v-bind:class="{ 'active': isC }"><a @click="clickNav('isC')">接口管理</a></li>
      <li class="disable" v-bind:class="{ 'active': isD }"><a @click="clickNav('isD')">用户管理</a></li>
    </ul>
    <copyright>
      <address>v2.0.0<a target="_blank" href="https://github.com/yfsoftcom/">@yfsoftcom</a></address>
    </copyright>
  </nav>
</template>
<script>
var navs = {
  isA: true,
  isB: false,
  isC: false,
  isD: false
}

export default {
  data: navs,
  methods: {
    clickNav (isWhat) {
      if (navs[isWhat]) {
        return false
      }
      navs.isA = navs.isB = navs.isC = navs.isD = false
      navs[isWhat] = true
    }
  }

}
</script>
