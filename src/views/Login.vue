<template>
  <div>
    <el-form>
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psd">
        <el-input type="password" v-model="form.psd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        account: '',
        psd: ''
      }
    }
  },
  methods: {
    handleLogin() {
      const {account, psd} = this.form
      this.$get('/json/login.json').then(() => {})
      if (account === 'admin' && psd === '123456') {
        sessionStorage.setItem('token', 111111)
        const path = sessionStorage.getItem('routerPath') // 获取登录前的页面
        this.$router.push({path: path ? path : '/home'})
      }
    }
  }
}
</script>

