<template>
  <div class="detail">
    <router-link  class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">
        {{customer.employeeName}}
        <span class="pull-right">
            <router-link class="btn btn-primary" :to="'/edit/'+customer.employeeId">编辑</router-link> 
            <button class="btn btn-danger" @click="deleteCustomer(customer.employeeId)">删除</button>  
        </span>          
    </h1>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"> {{customer.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-plus"> {{customer.email}}</span></li>
        <li class="list-group-item">
          <span v-if="customer.deptId == 1" class="glyphicon glyphicon-asterisk"> 研发部</span>
          <span v-if="customer.deptId == 2" class="glyphicon glyphicon-asterisk"> UI部</span>
          <span v-if="customer.deptId == 3" class="glyphicon glyphicon-asterisk"> 营销部</span>
        </li>
        <li class="list-group-item">
          <span v-if="customer.gender == 0" class="glyphicon glyphicon-plus"> 男</span>
          <span v-if="customer.gender == 1" class="glyphicon glyphicon-plus"> 女</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
    getCustomerInfo(id){
      this.$axios.get('/api/auth/employee/get/'+id)
      .then((response) => {
        console.log(response);
        this.customer = response.data.res_data;
      })
      .catch(function (error) {
        console.log(error)
      })

    },
    deleteCustomer(id){
      console.log(id)
      this.$axios.delete('/api/auth/employee/delete/'+id)
      .then((response) => {
          this.$router.push({path: '/',query:{alert:"用户删除成功！"}});
      })
    }
  },
  created(){
      this.getCustomerInfo(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
