<template>
  <div class="p-6">
    <header class="flex justify-end mb-6">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition"
      >
        Ajouter un forfait
      </button>
    </header>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="(onePackage, i) in packages"
        :key="i"
        class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
      >
        <h2 class="text-xl font-semibold mb-2 text-gray-800">
          {{ onePackage.namePackage }}
        </h2>
        <p class="text-gray-600 mb-4">{{ onePackage.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-lg font-bold text-blue-600">
            ${{ onePackage.price.toFixed(2) }}
          </span>
          <span class="text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
            {{ onePackage.category }}
          </span>
        </div>
        <div class="flex justify-end gap-2 mt-4">
          <button
            class="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg transition"
          >
            Mis à jour
          </button>
          <button
            class="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition"
          >
            Supprimer
          </button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: ['packages'],
};
</script>
