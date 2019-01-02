<template>
  <div class="login-wrap">
    <el-form :label-position="labelPosition" class="form" label-width="80px" :model="formdata">
      <h3>用户登录</h3>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click.prevent="handleLogin()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formdata: {
        username: "",
        password: "",
        type: ""
      }
    };
  },
  methods: {
    async handleLogin() {
      //点击按钮之后，拿到表单中的数据，发送给后台，拿去相应结果
      //拿到后台是数据
      const res = await this.$http.post("login", this.formdata);
      console.log(res);
      //拿到数据后，如果成功，则直接前往用户列表页，如果失败，则提示失败信息
      const {
        data: {
          data,
          meta: { msg, status }
        }
      } = res;
      if (status === 200) {
        //登录成功后存储token值
        localStorage.setItem("token", data.token);
        //页面跳转，更改路由配置
        this.$router.push({
          name: "home"
        });
      } else {
        this.$message.warning(msg);
      }
    }
  }
};
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .form {
  width: 400px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .form .btn {
  width: 100%;
}
</style>
