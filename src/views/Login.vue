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

              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
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
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 1) {
        callback(new Error('密码长度不能低于1位'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {validator: validateUsername, trigger: 'blur'}
        ],
        password: [
          {validator: validatePassword, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const api = 'auth/login';
          // let data = JSON.stringify(this.ruleForm);
          let param = new URLSearchParams();
          param.append('username', this.ruleForm.username);
          param.append('password', this.ruleForm.password);
          console.log(param);
          this.axios.post(api, param).then((response) => {
            alert(response.data.returnMsg);
            console.log(response);
          });
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
