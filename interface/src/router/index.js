import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PackagesView from '@/views/PackagesView.vue';
import PackageView from '@/views/PackageView.vue';
import AddPackageView from '@/views/AddPackageView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/packages',
    name: 'packages',
    component: PackagesView,
  },
  {
    path: '/package/:id',
    name: 'showPackage',
    component: PackageView,
  },
  {
    path: '/add-package',
    name: 'addPackage',
    component: AddPackageView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
