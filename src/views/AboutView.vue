<template>
  <div class="w-full">
    <div
      class="w-full h-[50vh] bg-cover bg-center relative"
      style="background-image: url('/assets/img/about-hero.webp')"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h1
          class="text-4xl md:text-5xl text-white font-bold text-center drop-shadow-lg"
        >
          À propos de notre agence
        </h1>
      </div>
    </div>
    <section
      class="py-16 px-6 md:px-12 bg-white flex flex-col md:flex-row gap-12 items-start"
    >
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-teal-600 mb-4">
          Voyage Cigale - Saint-Tropez
        </h2>
        <p class="text-gray-700 text-lg mb-4">
          Bienvenue dans notre agence de voyage située au cœur de la magnifique
          ville de Saint-Tropez. Notre équipe est à votre service pour planifier
          des escapades inoubliables à travers le monde.
        </p>
        <ul class="text-gray-700 text-base space-y-2">
          <li>
            <strong>Adresse :</strong> 15 Rue du Port, 83990 Saint-Tropez,
            France
          </li>
          <li><strong>Téléphone :</strong> +33 4 94 00 00 00</li>
          <li><strong>Email :</strong> contact@voyage-cigale.fr</li>
          <li><strong>Horaires :</strong> Lundi à Vendredi, 9h - 18h</li>
        </ul>
      </div>
      <div class="flex-1 w-full h-96 md:h-[400px]">
        <iframe
          title="Carte de l'agence"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.712231739888!2d6.634904115497125!3d43.27064277913645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdf4b6879d6c47%3A0x40819a5fd979ec0!2sSaint-Tropez%2C%20France!5e0!3m2!1sfr!2sca!4v1716924580000!5m2!1sfr!2sca"
          width="100%"
          height="100%"
          style="border: 0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>
