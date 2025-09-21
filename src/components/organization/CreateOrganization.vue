<template>
  <PageLayout>
    <bread-crumbs></bread-crumbs>
    <div class="actions">
      <div>
        <button @click.prevent="createOrganization" >Add Organization</button>
      </div>
    </div>

    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Tax Pin" />
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
  methods: {

    createOrganization() {

      var createOrganizationData = {
        txtOrganizationName : 'New Organization',
        txtTaxPin : 'A000000X',
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
