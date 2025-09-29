<template>
  <PageLayout>
    <bread-crumbs></bread-crumbs>
    <div class="actions">
      <div>
        <button @click.prevent="createOrganization" >Add Organization</button>
      </div>
    </div>

    <div>
      <input type="text" placeholder="Name" v-model="txtOrganizationName" />
      <input type="text" placeholder="Email" v-model="txtEmail"  />
      <input type="text" placeholder="Phone" v-model="txtPhone" />
      <input type="text" placeholder="Tax Pin" v-model="txtTaxPin" />
    </div>

  </PageLayout>

</template>

<script>
import PageLayout from '@/components/layouts/PageLayout.vue';
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue';

export default {
  name: 'CreateOrganization',
  components: {
    PageLayout,
    BreadCrumbs,
  },
  data() {
    return {
      txtOrganizationName: null,
      txtEmail: null,
      txtPhone: null,
      txtTaxPin: null
    }
  },
  methods: {

    createOrganization() {

      var createOrganizationData = {
        txtOrganizationName : this.txtOrganizationName,
        txtTaxPin : this.txtTaxPin
      };

      this.$axios.post('/organization/create-organization', createOrganizationData).then(response => {

        if(response.data.data === 'ORGANIZATION_EXISTS'){
          console.log(response.data.data);
        }

        console.log(response);
      });
    }
  }

}

</script>

<style scoped>



</style>
