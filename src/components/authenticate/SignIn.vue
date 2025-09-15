<template>
  <div>
    <h1>Sign In</h1>
    <form v-on:submit.prevent="signIn"  method="post">
      <input type="email" name="txtEmail" placeholder="Email" />
      <input type="password" name="txtPassword" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>

import router from '@/router'

export default {

  methods: {
    signIn() {
      router.push({ name: 'organizationSelect'});
    }
  }
};

</script>


<style scoped>

</style>
