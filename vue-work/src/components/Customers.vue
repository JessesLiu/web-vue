<template>
  <div class="customers">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer,index) in customers" :key="index">
          <td>{{customer.employeeName}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link :to="'/detail/'+customer.employeeId" class="btn btn-default">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:''
    }
  },
  components:{
    Alert
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
	  this.getList();
  },
  methods:{
    getList(){
      this.$axios.post('/api/employee/list',{
        pageNum:1,
        pageSize:10
      })
      .then((response) => {
        console.log(response);
        this.customers = response.data.res_data.list;
      })
      .catch(function (error) {
        console.log(error)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
