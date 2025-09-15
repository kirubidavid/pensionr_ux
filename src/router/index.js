import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: () => import('@/components/authenticate/SignIn.vue'),
    },
    {
      path: '/organization/select',
      name: 'organizationSelect',
      component: () => import('@/components/organization/OrganizationSelect.vue')
    },
    {
      path: '/organization/create',
      name: 'organizationCreate',
      component:() => import('@/components/organization/CreateOrganization.vue')
    },
    {
      path: '/dashboard/:organizationId',
      name: 'user-dashboard',
      component:() => import('@/components/dashboard/UserDashboard.vue')
    }
  ]
});

export default router
