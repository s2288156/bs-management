<template>
  <div class="login-container">
    <el-row>
      <el-col :span="9">
        <div class="grid-content bg-transparent"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-transparent">

          <el-form
            ref="ruleForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>

        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-transparent"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { login } from '@/api/auth/Authorication'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 1) {
        callback(new Error('密码长度不能低于1位'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: 'laowang',
        password: '123123'
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then((response) => {
            const returnMsg = response.returnMsg
            this.$message({
              message: returnMsg,
              type: 'success',
              duration: 3 * 1000
            })
            this.$router.push('foo')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .bg-transparent {
    background: Transparent;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}

</style>
