<template>
  <div
    v-if="onePackage"
    class="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-8"
  >
    <!-- Image -->
    <div class="md:w-1/2">
      <img
        :src="onePackage.image"
        alt="Image du forfait"
        class="w-full h-auto rounded-xl shadow"
      />
    </div>

    <!-- Infos du forfait -->
    <div class="md:w-1/2 flex flex-col justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          {{ onePackage.namePackage }}
        </h1>
        <p class="text-gray-600 mb-4">{{ onePackage.description }}</p>
        <p class="text-xl font-semibold text-blue-600 mb-6">
          {{ onePackage.price.toFixed(2) }} $
        </p>
        <span
          class="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
        >
          Catégorie : {{ onePackage.category }}
        </span>
      </div>

      <!-- Boutons -->
      <div class="mt-8 flex gap-4">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Modifier
        </button>
        <button
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
        >
          Supprimer
        </button>
      </div>
    </div>
  </div>

  <div v-else class="text-center mt-10 text-gray-500">Forfait introuvable.</div>
</template>

<script>
export default {
  props: ['packages'],
  computed: {
    onePackage() {
      const onePackage = this.packages.find((p) => {
        return Number(p.id) === Number(this.$route.params.id);
      });
      console.log(onePackage);
      return onePackage;
    },
    packageIndex() {
      const index = this.packages.findIndex((p) => {
        return Number(p.id) === Number(this.$route.params.id);
      });
      return index;
    },
  },
};
</script>
