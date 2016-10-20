<template>
  <!-- 应用列表 -->
  <article id="app-list">

    <a href="javascript:void(0);" v-link="'/apps/create'" class="inline btn">去创建</a>
    <hr/>

    <div class="list">
      <table class="table" >
        <thead>
          <tr>
            <th>ID</th>
            <th>名称</th>
            <th>类型</th>
            <th>权限</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Demo1</td>
            <td>Web</td>
            <td>*</td>
            <td>2016/09/20</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <ul class="pagination">
        <li class="disabled"><a href="#">&laquo;</a></li>
        <li class="active"><a href="#">1</a></li>
        <li class=""><a href="#">2</a></li>
        <li class=""><a href="#">3</a></li>
        <li class=""><a href="#">4</a></li>
        <li class="disabled"><a href="#">&raquo;</a></li>
      </ul>
    </div>
  </article>
</template>
