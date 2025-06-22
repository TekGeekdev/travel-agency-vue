<template>
  <MainNav />
  <RouterView
    :packages="packages"
    :addPack="newPackage"
    :updatePack="updatePackage"
  />
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
    updatePackage(index, data) {
      this.packages[index].name = data.name;
      this.packages[index].description = data.description;
      this.packages[index].price = data.price;
      this.packages[index].category = data.category;
      this.packages[index].url_img = data.url_img;
    },
  },
};
</script>
