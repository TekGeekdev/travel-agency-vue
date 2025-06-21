<template>
  <MainNav />
  <RouterView :packages="packages" />
  <MainFooter />
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import MainFooter from '@/components/MainFooter.vue';

import packagesData from '@/db.json';

export default {
  components: {
    MainNav,
    MainFooter,
  },
  data() {
    return {
      packages: packagesData.listPackage,
    };
  },
  methods: {},
};
</script>
