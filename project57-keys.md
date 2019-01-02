## Vue-项目-重点

### day06-项目-重点

#### 01-项目-准备-项目功能演示

1. 登录
2. 首页
   1. 用户管理
      1. 用户列表
   2. 权限管理
      1. 角色列表
      2. 权限列表
   3. 商品管理
      1. 商品列表
      2. 分类参数
      3. 商品分类
   4. 订单管理
      1. 订单列表
   5. 数据统计
      1. 数据报表

> UI 部分->使用主流的第三方 UI 库 element-ui
>
> 重复组件不写(快速完成!)
>
> 接口数据
>
> vue+element-ui+vue-router+axios

#### 02-项目-准备-项目准备素材说明

> 06-02-其他资源-项目素材

1. itcast.sql -> 启动 MySQL->打开 navicat.exe->新建数据库->导入.sql

2. 项目后台(服务器)->api-server 压缩包->node 项目-

   1. 修改 config/default.json 文件/修改为自己的数据库配置信息

      ```json
      "db_config" : {
      		"protocol" : "mysql",
      		"host" : "127.0.0.1",
      		"database" : "itcast",
      		"user" : "root",
      		"password" : "root",
      		"port" : 3306
      	}
      ```

2)  npm i

3)  node app.js -> 启动项目的服务器

4)  接口文档->docs/index.html

### day07-项目-重点

#### 01-项目-准备-批处理

1. 来到指令执行的目录 比如 api-server
2. 新建 run.txt 在该文件中 输入 node app.js(不要加多余的空格和回车)
3. 修改 run.txt 的后缀 改为 run.bat 文件
4. 双击 run.bat->自动打开 cmd 自动执行指令

> 目的: 批处理-提高效率

#### 02-项目-准备-vue-cli-创建项目结构

> 使用 cli 生成 vue 项目目录

1. vue init webpack 项目名
2. vue 编译的方式->for most users
3. 是否安装 vue-router->Y
4. 是否使用 ESLint -> Y

> ESLint 自动监测代码规范

4. 提示用哪个代码规范 S

5. unit test/e2e 测试 -> n

6. cd 项目目录

7. npm run dev -> 启动开发模式(并不会自动打开浏览器)

   > package.json->scripts(自定义指令的)->修改 dev 的值 ->末尾--open->重启 npm run dev

#### 03-项目-准备-项目目录说明

> src 我们需要关心的文件

1. main.js 入口
2. App.vue 根组件 router-view
3. router/index.js 路由模块
4. components: 自己的组件
5. assets/静态资源
   > build:webpack 打包的结果
   > config:配置服务器信息
   > index.html

#### 04-项目-准备-代码规范-自定义指令-lintfix

> 编译时 eslint 自动检测代码 -> cmd 页面会报错

1. package.json > scripts {"lintfix":"eslint --ext .js,.vue src --fix"}
2. npm run lintfix
3. 自动修复代码 (未使用变量无法修复)

#### 05-项目-准备-element-ui-文档分析

> ui 使用饿了么开发团队->element-ui
> element-ui ->PC 端
> mint-ui ->移动端

1. 确定要用的组件
2. 具体使用的组件
3. 组件的属性列表
   > el-input

#### 06-项目-准备-element-ui-安装-引入

1. npm i element-ui
2. main.js 引入 element-ui 和.css 文件
3. main.js Vue.use(插件名)
   > 在任意组件 template 中就可以使用 element-ui 的组件

#### 07-项目-准备-项目模板简化-调整

> 简化模板
> 路由配置中 path 必须赋值的属性

#### 08-项目-准备-git-版本控制

1. git init
2. git status
3. git add .
4. git commit -m ""
5. 去代码托管平台 -> 新建仓库
6. git remote add origin https://github.com/自己的名字/shopmanager57.git
7. git push -u origin master
   > 第一次使用 git 的流程
   > 第二次使用时 2347(其中 7 在 master 不需要加-u 后面 只写 git push)

#### 09-项目-登录-新建分支-login 组件-配置路由

> master:管理其他分支/叠加新版本(添加版本号)/合并 master

1. 新建分支
   1.1. 查看分支 git branch
   1.2 新建分支并且切换到该分支 git checkout -b dev-login
   1.3 切换 master: git checkout master
   1.4 合并分支: git merge dev-login
   1.5 在 master 上, git push
   > 网速不好

#### 10-项目-登录-引入表单组件

> form->顶部对齐

1. 找组件
2. 提供该组件使用的数据或者方法

#### 11-项目-登录-样式调整

> web 开发插件(谷歌浏览器插件) FEHelper
> height:100%;

1. assets/index.css

```css
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
```

2. main.js 引入 index.css
3. App.vue style 100%
4. login.vue 100%
   > 注意: 只要你能实现布局样式 flex

#### 12-项目-登录-axios 插件

> 使用 axios 发送登录请求
> 注意: 看接口文档

> 把 axios 独立库 变成 Vue 插件->Vue.use(自己的插件)

1. 新建 http.js 模块
2. 导入 axios
3. 看文档 开发插件
4. 导出 http 模块
5. main.js 导入插件
6. Vue.use(插件)
   > this.\$http 不用改

#### 13-项目-登录-引入提示框组件

> 登录提示
> Message 组件
> this.\$message.success/error(提示文本消息 msg)

#### 14-项目-登录-登录成功-进入-home-组件

> 登录成功->进入 home.vue

1. 编程式导航
2. 新建 home.vue 组件
3. router.js 配置路由

#### 15-项目-登录-简化登录请求代码-async 和 await

> 不想在{}内部获取异步操作的结果 ->ES7async+await

1. 在异步操作方法的前面加 await
2. 在距离异步操作方法最近的外层函数前面加 async
   > async+await: 只是为了让异步代码看起来像同步!

#### 16-项目-登录-保存 token 值

> 登录成功时 用户数据中有一个加密字符串 token
> localStorage.setItem('token',data.token)
> 将来使用时 localStorage.getItem('token)
> 注意: 现在不需要关心 token 是什么!

#### 17-项目-首页-布局容器-使用-样式调整

1. home 组件使用了布局容器
2. 引入组件
3. 调整样式

#### 19-项目-首页-头部-样式调整

> el-row>el-col (栅格)
> 头部(图片+标题+a)

#### 20-项目-首页-侧边栏-导航组件-文档

> el-menu
> 删除了目前没有使用的属性或者方法

#### 21-项目-首页-侧边栏-引入导航组件-调整

```html
<el-menu default-active="2" :unique-opened="true">
  <!-- 1 -->
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-d-arrow-right"></i> <span>用户管理</span>
    </template>

    <el-menu-item index="1-1">
      <i class="el-icon-location"></i> 用户列表
    </el-menu-item>
  </el-submenu>
</el-menu>
```

> index 值不要重复
> :unique-opened="true" 注意类型是否正确

### day08-项目-重点

#### 01-项目-首页-头部-退出功能

> 点击退出按钮

1. 清除 token
2. 回到登录组件
3. 提示

#### 02-项目-首页-进入首页的权限验证

> 必须保证先登录才能让其看见 home

```js
beforeCreate() {
    if (!localStorage.getItem("token")) {
      // 回到登录
      this.$router.push({
        name: "login"
      });
      // 提示
      this.$message.warning("请先登录");
    }

```

#### 03-项目-首页-合并分支-新建用户分支

> 在 dev-login 分支上

1. git status
2. git add .
3. git commit -m ""
4. git branch
5. git checkout master
6. git status
7. git add .
8. git commit -m "调整笔记"
9. git merge dev-login
10. git checkout -b dev-users

> git push

#### 04-项目-用户管理-用户列表-新建组件-路由配置

1. el-menu 路由模式 router
2. 在 home.vue 的 el-main 中 router-view
3. 新建 users.vue 组件
4. 配置路由(在 home 路由配置基础上 children)

#### 05-项目-用户管理-用户列表-面包屑和搜索框

1. el-card 卡片(小容器)
2. 面包屑
3. el-row>el-col >搜索框+添加按钮
   > 提示: 只要能实现效果 怎样写都行

#### 06-项目-用户管理-用户列表-引入表格组件

> el-table 表格组件
> 提供数据源

1. label 表头文字
2. prop
3. width 每列宽度

#### 07-项目-用户管理-用户列表-表头处理

> 调整表头个数

#### 08-项目-用户管理-用户列表-请求数据

> 除了登录之外的所有请求 都需要授权->请求头

1. created(){获取数据}
1. methods:{getTableData(){1. 设置请求头 2. 发起请求 3. 给表格数据赋值+提示框}}
   > 注意: 头部设置的是服务端要求

```js
const AUTH_TOKEN = localStorage.getItem('token')
this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
```

> 登录成功->服务端返回响应(针对正确的用户返回了一个 token 标识)->发起需要授权的请求时->设置请求头->token 值->发起请求

#### 09-项目-用户管理-用户列表-渲染数据-一般数据

> 表格单元格的数据分为两类

1. 一般数据(文本数据)

```html
<el-table-column prop="id" label="#" width="80"></el-table-column>
<el-table-column prop="username" label="姓名" width="120"></el-table-column>
<el-table-column prop="email" label="邮箱" width="160"></el-table-column>
<el-table-column prop="mobile" label="电话" width="140"></el-table-column>

<el-table-column prop="create_time" label="创建日期" width="120">
</el-table-column>

<!-- 过滤器的使用 {{}}和v-bind后面 -->
```

2. 组件(非文本数据)

#### 10-项目-用户管理-用户列表-渲染数据-日期格式处理

1. 全局过滤器 fmtDate
2. 分析过程
   2.1 发现 prop 后面不能直接用过滤器 X

```html
<el-table-column
  prop="create_time | fmtDate"
  label="创建日期"
  width="80"
></el-table-column>
```

2.2 单元格里面不是 prop 的值 X

```html
<el-table-column prop="create_time" label="创建日期" width="80">
  {{create_time | fmtDate}}
</el-table-column>
```

2.3 单元里里面如果不是 prop 需要加容器 template

```html
<el-table-column prop="create_time" label="创建日期" width="80">
  <template>
    {{create_time | fmtDate}}
  </template>
</el-table-column>
```

2.4 slot-scope="scope"

1. slot-scope 传递数据的作用
2. "scope"的值会自动锁定为 tableData(tableData 是数组)
3. scope.row 会自动取出数组中每个元素(对象)
   > slot-scope 和 element-ui 没关系 是 vue 提供的写法

```html
<el-table :data="tableData">
  <el-table-column label="创建日期" width="80">
    <template slot-scope="scope">
      {{scope.row.create_time | fmtDate}}
    </template>
  </el-table-column>
</el-table>
```

#### 11-项目-用户管理-用户列表-渲染数据-用户状态开关

1. 单元格的内容不是 prop 的值->所以需要包裹 template
2. el-switch 需要使用数据 mg_state slot-scope 去传递

```html
<el-table-column label="用户状态" width="80">
  <!-- 该单元格中的数据不是prop的值  true -->
  <template slot-scope="scope">
    <el-switch
      v-model="scope.row.mg_state"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
  </template>
</el-table-column>
```

#### 12-项目-用户管理-用户列表-渲染数据-操作

1. template slot-scope="scope"
2. 三个圆形按钮 朴素 mini

#### 13-项目-用户管理-用户列表-分页组件-文档-引入

> 完整的分页功能

```html
<!-- 分页
      @size-change 每页显示条数改变时
@current-change 当前页码改变
current-page当前页码
page-sizes 控制每页显示条数所在的数组[2,4,6,8]
layout 分页组件的小功能
total 数组总个数
    -->
<el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage4"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="total, sizes, prev, pager, next, jumper"
  :total="400"
></el-pagination>
```

#### 14-项目-用户管理-用户列表-分页组件-配置数据

1. @size-change="handleSizeChange"
2. @current-change="handleCurrentChange"
3. :current-page="pagenum"
4. :total="total"
   > total 在发起请求时已经获取

#### 15-项目-用户管理-用户列表-分页组件-分页请求

1. 当前页码改变时 按照新页码 pagenum 重新发请求
2. 当每页条数改变时 按照新 pagesize 重新发请求

```js
 // 分页相关的方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.pagenum = 1;
      this.getTableData();
    },

    handleCurrentChange(val) {

      this.pagenum = val;
      console.log(`当前页: ${val}`);
      this.getTableData();
    },

```

#### 16-项目-用户管理-用户列表-搜索用户

1. el-input v-model="query"
2. 点击搜索按钮->按照新参数 query 发送请求 this.pagenum=1
3. 一键清空 clearable
4. @clear="获取所有数据"

#### 17-项目-用户管理-用户列表-添加用户-显示对话框

> 点击添加用户按钮-打开对话框

1. 引入对话框组件
2. 配置数据
3. 给添加按钮绑定事件
   > dialogFormVisibleAdd:false

#### 18-项目-用户管理-用户列表-添加用户-发送请求

1. 点击对话框的确定->发送请求
2. 发送请求
3. 关闭对话框
4. 刷新表格
   > 打开对话框时 清空 this.form={}

#### 19-项目-用户管理-用户列表-添加用户-处理响应

1. 如果 201 添加成功
2. else 提示框

#### 20-项目-用户管理-用户列表-删除用户-打开确认框

> 点击操作中的删除按钮->打开确认框 this.\$confim

```js
this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  type: 'warning'
})
  .then(() => {
    this.$message.success('AAA')
  })
  .catch(() => {
    this.$message.warning('BBB')
  })
```

> 点击取消->cath 确定->.then

#### 21-项目-用户管理-用户列表-删除用户-处理响应

> 点击确定

1. 发送请求
2. 重置 pagenum=1
3. 刷新表格
4. 提示

```js
 .then(async () => {
          // 发送删除的请求  id是用户id
          const res = await this.$http.delete(`users/${user.id}`);
          // console.log(res);
          const {
            meta: { msg, status }
          } = res.data;
          if (status === 200) {
            this.$message.success(msg);
            this.pagenum = 1;
            this.getTableData();
          }
        })

```

#### 22-项目-用户管理-用户列表-编辑用户-显示对话框

> 点击操作中的编辑->打开对话框
> 把添加用户的对话框复制->修改
> 用户名输入框 禁用!

#### 23-项目-用户管理-用户列表-编辑用户-显示编辑数据

#### 24-项目-用户管理-用户列表-编辑用户-发送请求

#### 25-项目-用户管理-用户列表-修改用户状态
