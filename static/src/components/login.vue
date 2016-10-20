<template>
  <div class="container">
    <header>
      <h3>登录 Fast-platform</h3>
    </header>
    <article>
      <div class="site-box" style="margin-top:3em;margin-bottom:3em;">
        <form class="form" action="">
          <div class="flex-left units-gap">
            <label class="unit-0 text-right" for="login-user" style="width:85px;">帐户: </label>
            <div class="unit"><input type="text" id="login-user" placeholder="admin"/></div>
          </div>
          <div class="flex-left units-gap">
            <label class="unit-0 text-right" for="login-pass" style="width:85px;">密码: </label>
            <div class="unit"><input type="password" id="login-pass" placeholder=""/></div>
          </div>
          <div class="flex-left units-gap">
            <div style="width:85px;"></div>
            <div class="unit-1-4">
              <button type="submit" class="btn btn-primary">登录</button>
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
