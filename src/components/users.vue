<template>
  <!-- 外层的是面包屑和搜索框 -->
  <el-card class="box-card">
    <!-- 面包屑 导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 放大镜搜索和添加用户 -->
    <el-row>
      <el-col>
        <el-input
          placeholder="请输入内容"
          @clear="getAllUsers"
          clearable
          v-model="query"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search" @click.prevent="searchUser"></el-button>
        </el-input>
        <el-button type="success" @click="adddio" plain>添加用户</el-button>
      </el-col>
    </el-row>

    <!-- 表格区域 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column prop="username" label="用户名" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="180"></el-table-column>
      <el-table-column label="创建日期" width="180">
        <template slot-scope="list">{{list.row.create_time | fmtData}}</template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
            @change="changeUserState(scope.row)"
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-row>
            <el-button
              plain
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="showeditUser(scope.row)"
              circle
            ></el-button>
            <el-button plain type="success" size="mini" icon="el-icon-check" circle></el-button>
            <el-button
              plain
              @click="delUser(scope.row)"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              circle
            ></el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区域 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 4, 6,8]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 对话框区域 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑用户 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisibleEdit">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input disabled v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
  <!-- id:  id
        username:  用户名
        email:  邮箱
        mobile:  电话
        create_time: 创建日期
        mg_state: 状态
  role_name: 角色名称-->
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      query: "",
      pagenum: 1,
      pagesize: 2,
      total: -1,
      dialogTableVisible: false,
      dialogFormVisibleAdd: false,
      dialogFormVisibleEdit: false,
      form: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.getTabledata();
  },
  methods: {
    //功能：进入用户列表组件之后，马上发送请求，将服务器中的用户的信息渲染在页面之上
    async getTabledata() {
      //看文档得知，该管理系统出了登录功能之外，其他所有的请求都需要有令牌，也就是token值，这样做的目的是每个用户的权限都不相同。所以发送请求的时候应该带上请求头，这项工作完成需要依赖axios也就是要去看文档。。
      //拿到已经有的token值
      const AUTH_TOKEN = localStorage.getItem("token");
      //给请求头增加数据
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      );
      console.log(res);
      const {
        data: {
          data: { total, users },
          meta: { msg, status }
        }
      } = res;
      if (status === 200) {
        (this.tableData = users), (this.total = total);
      }
    },
    //页面多少发生改变的时候出发的函数
    handleSizeChange(val) {
      console.log(val);
      //这里能够拿到页面发生改变的时候每页要显示多少条数据
      this.pagesize = val;
      this.pagenum = 1;
      // this.pagenum = 1;
      this.getTabledata();
    },
    handleCurrentChange(val) {
      //当页码变化的时候请求相应页码的数据
      this.pagenum = val;
      this.getTabledata();
    },
    //搜索用户功能的完成
    // 效果阐述： 当在输入框中输入用户的名字之后，点击放大镜，相应的用户就会出现在下面的列表之中
    searchUser() {
      this.getTabledata();
      this.pagenum = 1;
    },
    // 点击清空按钮时
    getAllUsers() {
      this.getTabledata();
    },
    //点击添加按钮，出现对话框组件
    adddio() {
      this.dialogFormVisibleAdd = true;
      this.form = {};
    },
    // 将要添加的用户信息写在对话框的表单之中，提交
    async addUser() {
      //点击确定后都会发生哪些事情呢
      //对话框消失
      // 发送请求，将数据追加在数据库列表之中
      const res = await this.$http.post("users", this.form);
      console.log(res);
      // //如果添加成功，就
      const {
        meta: { msg, status }
      } = res.data;
      if (status === 201) {
        this.dialogFormVisibleAdd = false;
        this.$message.success(msg);
        // 重新刷新表格
        this.getTabledata();
      } else {
        this.$message.warning(msg);
      }
      // 重新渲染显示页面的数据
      // 弹出框，显示添加成功
    },
    //删除功能
    // 点击删除按钮，连接数据库，在数据库中清空该条数据，然后重新渲染显示该页面。
    delUser(user) {
      //需要拿到该条数据的id值  看文档怎么进行删除操作如果想用传值，一般情况下从两个位置找，第一个位置是当前所在页面的data区域，第二个位置是方法传值
      console.log(user);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          //发送请求，处理相应的业务逻辑
          const res = await this.$http.delete(`users/${user.id}`);
          console.log(res);
          const {
            meta: { msg, status }
          } = res.data;
          if (status === 200) {
            this.$message({
              type: "success",
              message: msg
            });
            this.pagenum = 1;
            this.getTabledata();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //编辑功能实现  分析
    // 点击编辑按钮，出现对话框，该条信息的文本信息出现在对话框的表单上，然后更改表单数据，点击确定后，发送请求到数据库，将对应的信息进行更改，更改完毕后点击确定回到原始的表格渲染页面，新的数据显示
    showeditUser(user) {
      this.dialogFormVisibleEdit = true;
      this.form = user;
    },
    async editUser() {
      //更改里面编辑数据的结果，连接服务器，修改数据后渲染在列表中
      const res = await this.$http.put(`users/${this.form.id}`, {
        email: this.form.email,
        mobile: this.form.mobile
      });
      console.log(res);
      const {
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        //关闭对话窗口
        this.dialogFormVisibleEdit = false;
        //刷新页面的用户列表
        this.getTabledata();
        this.$message.success("编辑成功");
      } else {
        this.$message.warning(msg);
      }
    },
    //点击开关修改用户状态 点击开关修改用户的状态  当点击开关的时候，相应的用户状态就会发生变化，然后更新到数据库中重新渲染页面的列表。
    // async changeUseState(user) {
    //   //将此事的数据传递到数据库进行更改
    //   const res = await this.$http.put(
    //     `users/${user.id}/state/${user.mg_state}`
    //   );
    //   console.log(res);
    // }
    async changeUserState(user) {
      // uid 用户id
      // type 用户状态
      const res = await this.$http.put(
        `users/${user.id}/state/${user.mg_state}`
      );
      console.log(res);
    }
  }
};
</script>

<style>
.box-card {
  width: 100%;
  height: 100%;
}
.input-with-select {
  width: 400px;
  margin-top: 15px;
}
.block {
  margin-top: 20px;
}
</style>
