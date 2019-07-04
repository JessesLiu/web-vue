<template>
  <div class="edit">
    <Alert v-if="alert" :message="alert"></Alert> 
    <h1 class="page-header">编辑用户</h1>
    <form @submit="updateCustomer">
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
                <label>部门</label>
                <input type="text" class="form-control" placeholder="deptId" v-model="customer.deptId">
            </div>
            <div class="form-group">
                <label>性别</label>
                <input type="text" class="form-control" placeholder="gender" v-model="customer.gender">
            </div>
            <!-- <div class="form-group">
                <label>职业</label>
                <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
            </div>
            <div class="form-group">
                <label>个人简介</label>
                <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
            </div> -->
            <button type="submit" class="btn btn-primary">确认</button>  
        </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'edit',
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
      getCustomerInfo(id){
          this.$axios.get('/api/employee/get/'+id)
            .then((response) => {
                console.log(response);
                this.customer = response.data.res_data;
            })
      },
      updateCustomer(e){
          e.preventDefault();
          if(!this.customer.employeeName || !this.customer.phone || !this.customer.email){
            //console.log("请添加对应的信息！")
            this.alert = "请添加对应的信息！"
          }else{
            this.alert = "" 
            let updateCustomer = {};
            updateCustomer.deptId = this.customer.deptId;
            updateCustomer.employeeName = this.customer.employeeName;
            updateCustomer.email = this.customer.email;
            updateCustomer.phone = this.customer.phone;
            updateCustomer.gender = this.customer.gender;
              
            this.$axios.put('/api/employee/update/'+this.$route.params.id,updateCustomer)  
            .then((response) => {
                console.log(response);
                this.$router.push({path:'/',query:{alert:'用户信息更新成功！'}})
            })
          }
      }
  },
  created(){
      this.getCustomerInfo(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
