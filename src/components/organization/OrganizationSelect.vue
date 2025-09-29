<template>
  <div>Select Organization</div>
  <router-link to="/organization/create">Create Organization</router-link>

  <div v-for= "vOrg in activeOrganizations" :key="vOrg.id">
    <router-link :to="{name: 'userDashboard' , params: {orgId : vOrg.id }}">{{ vOrg.orName}}</router-link>
  </div>


</template>

<script>
  export default {

    data(){
      return {
        activeOrganizations:[]
      }
    },
    mounted() {
      this.$axios.get('/organization/user-organizations').then((response) => {

        if(response.data.data.length > 0) {
          this.activeOrganizations = response.data.data;
        }

      }).catch((error) => {
        console.log(error.response.data);
      })
    }

  }

</script>

<style scoped>

</style>
