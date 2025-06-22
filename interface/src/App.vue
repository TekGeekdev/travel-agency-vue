<template>
  <MainNav />
  <RouterView :packages="packages" :addPack="newPackage" />
  <MainFooter />
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import MainFooter from '@/components/MainFooter.vue';

// import packagesData from '@/db.json';
import PackagesDataService from './services/PackagesDataService';

export default {
  components: {
    MainNav,
    MainFooter,
  },
  mounted() {
    PackagesDataService.getAll()
      .then((response) => {
        this.packages = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Impossible de reçevoir la donnée:', error);
      });
  },
  data() {
    return {
      packages: [],
    };
  },
  methods: {
    newPackage(addPackage) {
      this.packages.push(addPackage);
    },
  },
};
</script>
