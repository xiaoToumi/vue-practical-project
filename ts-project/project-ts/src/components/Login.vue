<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { nameRule,passRule } from '../utils/vaildate.js'
import {setToken} from '../utils/setToken.js'
import { login } from '../api/api'
import { IUserData } from '../types'
import component from 'vue-class-component'
import Vue from 'vue'

  @component  //类装饰器
  export default class extends Vue {
    name = "Login";
    form: IUserData ={
      username: "",
      password: "",
    };
    rules = {
          username:[{validator:nameRule, trigger:'blur'}],
          password:[{validator:passRule, trigger:'blur'}],
        };
      login(form:any) {
        (this.$refs[form] as any).validate((valid:any) => {
          if (valid) {
            console.log(this.form);
            // this.service.post('/login',this.form).then((res) => {
            //   if(res.data.status === 200){
            //     setToken('username',res.data.username)
            //     setToken('token',res.data.token)
            //     this.$message({message:res.data.message, type:'success'})
            //     this.$router.push('/home')
            //   }
            //   console.log(res)
            // })
            login(this.form).then((res:any) => {
              if(res.data.status === 200){
                setToken('username',res.data.username)
                setToken('token',res.data.token)
                this.$message({message:res.data.message, type:'success'})
                this.$router.push('/home')
              }
            })
          }else{
            console.error(this.form)
          }
        });
      }
    };
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/login_bg.jpg") center no-repeat;
  .el-card {
    background: #65768557;
  }
  .box-card {
    width: 450px;
    margin: 200px auto;
    color: #fff;
    .el-form .el-form-item__label {
      color: #fff;
    }
    .el-card__header {
      font-size: 34px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>