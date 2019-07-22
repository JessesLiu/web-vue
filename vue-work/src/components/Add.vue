<template>
  <div class="add">
    <Alert v-if="alert" :message="alert"></Alert> 
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
        <div class="well">
            <h4>用户信息</h4>
            <div class="form-group">
                <label>姓名</label>
                <input type="text" class="form-control" placeholder="employeeName" v-model="customer.employeeName">
            </div>
            <div class="form-group">
                <label>电话</label>
                <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
            </div>
            <div class="form-group">
                <label>邮箱</label>
                <input type="text" class="form-control" placeholder="email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">部门</label>
                  <select class="form-control" v-model="customer.deptId" id="exampleFormControlSelect1">
                    <option value="1" selected>研发部</option>
                    <option value="2">UI部</option>
                    <option value="3">营销部</option>
                  </select>
            </div>
            <div class="form-group">
                <label>性别</label>
                 <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="customer.gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0">
                    <label class="form-check-label" for="inlineRadio1">男</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="customer.gender" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1">
                    <label class="form-check-label" for="inlineRadio2">女</label>
                  </div>
            </div>
            <button type="submit" class="btn btn-primary">添加</button>  
        </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      customer:{},
      alert:''
    }
  },
  components:{
      Alert
  },
  methods:{
      addCustomer(e){
          e.preventDefault();
          if(!this.customer.employeeName || !this.customer.phone || !this.customer.email){
            //console.log("请添加对应的信息！")
            this.alert = "请添加对应的信息！"
          }else{
            this.alert = "" 
            let newCustomer = this.customer
              
            this.$axios.post('/api/auth/employee/add',newCustomer)
            .then((response) => {
                console.log(response);
                this.$router.push({path:'/',query:{alert:'用户信息添加成功！'}})
            })
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
