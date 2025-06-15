<template>
  <nav class="flex justify-between items-center bg-teal-500 p-8">
    <RouterLink to="/" class="text-white font-semibold text-lg"
      >Voyage Cigale</RouterLink
    >
    <ul class="flex gap-x-3">
      <li>
        <RouterLink :to="{ name: 'home' }" class="text-white hover:underline"
          >Accueil</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'packages' }"
          class="text-white hover:underline"
          >Forfaits</RouterLink
        >
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }" class="text-white hover:underline"
          >À propos de l’agence</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
