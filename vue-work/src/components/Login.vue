<template>
  <div class="Login">
    <div class="main">
      <div class="cus_logo">
        <div style="width: 80px; height: 80px; margin: 0 auto;">
          <img src="../assets/img/logo.png">
        </div>
      </div>

      <div class="log_form">
        <input class="inpt" id="username" name="username" v-model="userName" placeholder="用户名"/>
        <input class="inpt" id="password" type="password" v-model="password" placeholder="密码"/>
        <button class="inpt btn" @click="userLogin()"> 登 录 </button>
      </div>

      <div style="text-align: center;">
        <a href="javascript:;">忘记密码</a> | <a href="javascript:;">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        userName: '',
        password: ''
      }
    },
    methods:{
      userLogin(){
        this.$axios.post('/api/signIn',{
          userName: this.userName,
          password: this.password
        })
        .then((response) => {
            console.log(response.data);
            let resData = response.data;
            if(resData.code == 0){
                localStorage.setItem("auth-token", resData.res_data.token);
                this.$router.push({path:'/'})
            }else{
                console.log(resData.msg)
            }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, div, ul, ol, dl, dt, dd, p, li{
    margin:0;
    padding:0;
    font-style:normal;
    font:14px/22px "microsoft yahei",Arial, Helvetica, sans-serif;
  }
  ol, ul ,li{list-style: none;}
  img {border: 0; vertical-align:middle;}
  a{text-decoration:none; color: #576cda}
  .cus_logo{
    width: 100%;
    height: 80px;
    margin-top: 100px;
  }
  .cus_logo img{
    width: 100%;
    height: 100%;
    border-radius: 80px;
  }
  .log_form{
    position: relative;
    width: 80%;
    margin-top: 100px;
    margin:  0 auto;
  }
  .inpt{
    width: 100%;
    height: 30px;
    border: solid 1px #ccc;
    border-radius: 5px;
    margin: 20px auto;
  }
  .btn{
    border-radius: 10px;
    height: 40px;
    background: #6aca7f;
    color: white;
  }
</style>
