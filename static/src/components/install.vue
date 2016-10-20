<template>
  <div class="container">
    <header>
      <h3>Fast-platform安装向导</h3>
      <blockquote><p>输入Mysql服务器信息完成安装</p></blockquote>
    </header>
    <article>
      <div class="site-box" style="margin-top:3em;margin-bottom:3em;">
        <form class="form" action="">
          <div class="flex-left units-gap">
            <label class="unit-0 text-right" for="mysql-host" style="width:85px;">地址: </label>
            <div class="unit"><input type="text" id="mysql-host" placeholder="localhost"/></div>
          </div>
          <div class="flex-left units-gap">
            <label class="unit-0 text-right" for="mysql-port" style="width:85px;">端口: </label>
            <div class="unit"><input type="text" id="mysql-port" placeholder="3306"/></div>
          </div>
          <div class="flex-left units-gap">
            <label class="unit-0 text-right" for="mysql-user" style="width:85px;">用户: </label>
            <div class="unit"><input type="text" id="mysql-user" placeholder="root"/></div>
          </div>
          <div class="flex-left units-gap">
            <label class="unit-0 text-right" for="mysql-pass" style="width:85px;">密码: </label>
            <div class="unit"><input type="password" id="mysql-pass" placeholder="root"/></div>
          </div>
          <div class="flex-left units-gap">
            <div style="width:85px;"></div>
            <div class="unit-1-4">
              <button type="" @click="tryInstall()" class="btn btn-primary">安装</button>
            </div>
            <div class="unit-1-4">
              <button type="reset" class="btn btn-danger">取消</button>
            </div>

          </div>
        </form>
      </div>
    </article>
    <hr/>
    <address>
      Powered by <a target="_blank" href="https://github.com/yfsoftcom/">@yfsoftcom</a>.
    </address>
  </div>

  <aside class="hide-on-mobile" style="padding:0 28px;">
    <p>微信扫一扫添加关注</p>
  </aside>
</template>

<script>
export default {
  methods: {
    tryInstall () {
      this.$http.get('/admin/install')
      .then((response) => {
        window.alert('ok')
      })
      .catch((response) => {
        window.alert('err')
      })
    }
  }
}
</script>
