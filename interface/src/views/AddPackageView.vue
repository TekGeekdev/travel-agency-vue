<template>
  <form
    class="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-16"
  >
    <div class="form-control">
      <label class="block text-gray-700 font-medium mb-1">Nom du forfait</label>
      <input
        type="text"
        placeholder="Écrire un nom de forfait"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div class="form-control">
      <label class="block text-gray-700 font-medium mb-1">Description</label>
      <input
        type="text"
        placeholder="Écrire une description"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div class="form-control">
      <label class="block text-gray-700 font-medium mb-1">Prix</label>
      <input
        type="number"
        placeholder="Écrire un prix"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div class="form-control">
      <label class="block text-gray-700 font-medium mb-1">Categorie</label>
      <input
        type="text"
        placeholder="Écrire une categorie"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <input
      type="submit"
      class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      value="Ajouter Forfait"
    />
  </form>
</template>
