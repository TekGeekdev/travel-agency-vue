<template>
  <footer class="bg-teal-600 text-white px-8 py-12 mt-12">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-2">Agence de voyage</h3>
        <p class="text-sm">
          Explorez le monde avec nos forfaits uniques. Séjours, aventures, et
          découvertes vous attendent.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Infolettre</h3>
        <p class="text-sm mb-2">Recevez nos offres spéciales par courriel.</p>
        <form class="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Votre courriel"
            class="p-2 rounded text-gray-900 w-full sm:w-auto flex-grow"
          />
          <button
            class="bg-white text-teal-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            S’abonner
          </button>
        </form>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Suivez-nous</h3>
        <div class="flex gap-4 mt-2">
          <i
            class="pi pi-facebook hover:text-blue-300 transition"
            style="font-size: 2rem"
          ></i>
          <i
            class="pi pi-instagram hover:text-purple-300 transition"
            style="font-size: 2rem"
          ></i>
          <i
            class="pi pi-youtube hover:text-red-300 transition"
            style="font-size: 2rem"
          ></i>
          <i
            class="pi pi-whatsapp hover:text-yellow-300 transition"
            style="font-size: 2rem"
          ></i>
        </div>
      </div>
    </div>

    <div
      class="text-center text-sm text-white mt-12 border-t border-white/20 pt-4"
    >
      ©Ledeur Mahtieu - Agence de voyage — Tous droits réservés
    </div>
  </footer>
</template>
