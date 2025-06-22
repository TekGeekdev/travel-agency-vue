<template>
  <div
    class="max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-md space-y-6"
  >
    <div v-if="submitted" class="space-y-4 text-center">
      <p
        class="text-green-800 bg-green-100 border border-green-300 p-4 rounded shadow"
      >
        {{ message }}
      </p>
      <button
        @click="newPackage"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Ajouter un autre forfait
      </button>
    </div>

    <form v-else class="space-y-6">
      <div class="form-control">
        <label class="block text-gray-700 font-medium mb-1"
          >Nom du forfait</label
        >
        <input
          type="text"
          v-model="updPackage.name"
          placeholder="Écrire un nom de forfait"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="formErrors.name" class="text-red-600 text-sm mt-1">
          {{ formErrors.name }}
        </p>
      </div>

      <div class="form-control">
        <label class="block text-gray-700 font-medium mb-1">Description</label>
        <input
          type="text"
          v-model="updPackage.description"
          placeholder="Écrire une description"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="formErrors.description" class="text-red-600 text-sm mt-1">
          {{ formErrors.description }}
        </p>
      </div>

      <div class="form-control">
        <label class="block text-gray-700 font-medium mb-1">Prix</label>
        <input
          type="number"
          v-model="updPackage.price"
          placeholder="Écrire un prix"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="formErrors.price" class="text-red-600 text-sm mt-1">
          {{ formErrors.price }}
        </p>
      </div>

      <div class="form-control">
        <label class="block text-gray-700 font-medium mb-1">Catégorie</label>
        <input
          type="text"
          v-model="updPackage.category"
          placeholder="Écrire une catégorie"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="formErrors.category" class="text-red-600 text-sm mt-1">
          {{ formErrors.category }}
        </p>
      </div>
      <div class="form-control">
        <label class="block text-gray-700 font-medium mb-1"
          >URL de l’image</label
        >
        <input
          type="text"
          v-model="updPackage.url_img"
          placeholder="Entrer l’URL de l’image"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p v-if="formErrors.url_img" class="text-red-600 text-sm mt-1">
          {{ formErrors.url_img }}
        </p>
      </div>

      <button
        type="button"
        @click="updatePackage"
        class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Ajouter Forfait
      </button>
    </form>
  </div>
</template>

<script>
import PackagesDataService from '@/services/PackagesDataService';

export default {
  props: ['packages', 'updatePack'],
  data() {
    return {
      message: null,
      submitted: false,
      formErrors: {},
      id: parseInt(this.$route.params.id),
      updPackage: {},
    };
  },
  methods: {
    updatePackage() {
      PackagesDataService.update(this.id, this.updPackage)
        .then(() => {
          this.updatePack(this.packageIndex, this.updPackage);
          (this.submitted = true),
            (this.message = null),
            this.$router.push({
              name: 'showPackage',
              params: { id: this.id },
            });
        })
        .catch((error) => {
          if (error.response && error.response.data.errors) {
            this.formErrors = error.response.data.errors;
          } else {
            console.log(error.message);
            this.message = error.message;
          }
        });
    },
  },
  computed: {
    packageIndex() {
      const index = this.packages.findIndex((p) => {
        return Number(p.id) === this.id;
      });
      return index;
    },
  },
  mounted() {
    PackagesDataService.getOne(this.id).then((response) => {
      this.updPackage = response.data;
    });
  },
};
</script>
