<template>
  <!-- 创建应用 -->
  <article id="app-create">

    <p>创建应用</p>
    <hr/>

    <form class="form" action="#Complicated-forms">

      <div class="flex-left units-gap">
        <label class="unit-0 text-right" for="multiple-inputs-name" style="width:95px;">应用名称: </label>
        <div class="unit"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
      </div>

      <div class="flex-left units-gap">
        <label class="unit-0 text-right" style="width:95px;">应用类型: </label>
        <div class="unit">
          <select>
            <option disabled selected value> -- select -- </option>
            <option>WEB</option>
            <option>ANDROID</option>
            <option>IOS</option>
          </select>
        </div>
      </div>

      <div class="flex-left units-gap">
        <label class="unit-0 text-right" style="width:95px;">应用权限: </label>
        <div class="unit">
          <label class="flex-middle">
            <input type="checkbox" name="multiple-inputs-gender" value="Female"/>Female
          </label>
        </div>
        <div class="unit">
          <label class="flex-middle">
            <input type="checkbox" name="multiple-inputs-gender" value="Female"/>Female
          </label>
        </div>
        <div class="unit">
          <label class="flex-middle">
            <input type="checkbox" name="multiple-inputs-gender" value="Female"/>Female
          </label>
        </div>
        <div class="unit">
          <label class="flex-middle">
            <input type="checkbox" name="multiple-inputs-gender" value="Female"/>Female
          </label>
        </div>
      </div>

      <div class="flex-left units-gap">
        <label class="unit-0 text-right" for="multiple-inputs-bio" style="width:95px;">应用介绍: </label>
        <div class="unit">
          <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
        </div>
      </div>
      <div class="flex-left units-gap">
        <div style="width:95px;"></div>
        <div class="unit-1-4">
          <button type="reset" class="btn btn-primary">创建</button>
        </div>
      </div>
    </form>


  </article>

</template>
