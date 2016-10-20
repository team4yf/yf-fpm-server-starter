<template>
<div class="container main">
  <headnav></headnav>
  <sidenav></sidenav>
  <!-- 系统状况 -->
  <article id="system-protal">

    <p>您当前的系统密钥是:3453fdfg7ds8af7d8a</p>
    <hr/>
    <p>系统硬件消耗情况如下:</p>

    <div class="flex-left top-gap">
      <div class="unit site-box">
        <canvas id="cpu-status" style="height:300px; margin:1em;" height="300px" width="600px">
        </canvas>
        <small class="block text-center">CPU消耗</small>
      </div>

      <div class="unit site-box">
        <canvas id="memery-status" style="height:300px;margin:1em;" height="300px" width="600px">
        </canvas>
        <small class="block text-center">内存消耗</small>
      </div>
    </div>
    <hr/>

    <p>接口请求次数</p>
    <div class="flex-left top-gap">
      <div class="unit site-box">
        <div class="scroll-view" style="margin:1em;">
          <table class="table" >
            <tbody>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="unit site-box">
        <div class="scroll-view" style="margin:1em;">
          <table class="table" >
            <tbody>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
              <tr>
                <td>api.find</td>
                <td>10k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </article>
</div>
</template>

<script>
import Headnav from './headnav'
import Sidenav from './sidenav'
export default {
  components: {
    headnav: Headnav,
    sidenav: Sidenav
  }
}
</script>
