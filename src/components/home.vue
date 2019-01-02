<template>
  <el-container class="wrap">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt>
        </el-col>
        <el-col :span="19">
          <h2 class="middle">电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <a href class="loginout" @click.prevent="handleSignout()">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu default-active="2" :unique-opened="true" router>
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>用户管理</span>
            </template>

            <el-menu-item index="users">
              <i class="el-icon-location"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>权限管理</span>
            </template>

            <el-menu-item index="2-1">
              <i class="el-icon-location"></i>
              角色列表
            </el-menu-item>

            <el-menu-item index="2-2">
              <i class="el-icon-location"></i>
              权限列表
            </el-menu-item>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>商品管理</span>
            </template>

            <el-menu-item index="3-1">
              <i class="el-icon-location"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-location"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-location"></i>
              商品分类
            </el-menu-item>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>订单管理</span>
            </template>

            <el-menu-item index="4-1">
              <i class="el-icon-location"></i>
              订单列表
            </el-menu-item>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>数据统计</span>
            </template>

            <el-menu-item index="5-1">
              <i class="el-icon-location"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  //完成退出功能，也就是点击 退出之后，清楚在浏览器端存储的token值，然后返回登录页面
  data() {
    return {};
  },
  methods: {
    handleSignout() {
      //点击之后清楚存储的值
      localStorage.clear();
      //路由编程导航
      this.$router.push({
        name: "login"
      });
      //提示退出成功
      this.$message.success("退出成功");
    }
  },
  //进入首页的权限验证，必须先登录，才可以进入到首页
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      //   如果找不到里面存的token值，那么就直接跳转到登录页，提示，请先登录
      this.$router.push({
        name: "login"
      });
      this.$message.warning("请先登录");
    }
  }
  //建立新的路由配置：功能目标：点击相应的导航，就在右侧main渲染出应该出现的页面
  //   1）提供标签  显示标签
  //   2）写新的组件
  //   3）配置路由
  //   4）实例化路由
  //   5.挂载路由
};
</script>

<style>
.wrap {
  height: 100%;
}
.wrap .aside {
  background-color: #ffffff;
  padding-top: 30px;
}
.wrap .header {
  background-color: #b3c0d1;
  line-height: 50px;
}
.wrap .main {
  background-color: blueviolet;
}
.header .middle {
  text-align: center;
  color: white;
}
</style>
