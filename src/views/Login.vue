<template>
  <div>

    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row>
          <el-col :span="9">
            <div class="grid-content bg-transparent"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-transparent">

              <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="99px"
                       class="demo-loginForm">
                <el-form-item label="用户名" prop="username">
                  <el-input type="text" v-model="loginForm.username" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                  <el-input v-model.number="loginForm.age"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                  <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
              </el-form>

            </div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-transparent"></div>
          </el-col>
        </el-row>

      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    let checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.checkPass !== '') {
          this.$refs.loginForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.loginForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
        age: [
          {validator: checkAge, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;

&
:last-child {
  margin-bottom: 0;
}

}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-transparent {
  background: Transparent;
}

.bg-purple-light {
  background: #D9ECFF;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
