<template>
  <section class=" text-gray-600 body-font" id="Projects">
    <div class="wrapper-titre relative flex flex-col mb-8 w-fit m-auto">
      <h2 class="about inline-block title-font text-8xl Kalam w- z-10">
        Mes Projets
      </h2>
      <span class="absolute w-full h-1/4 bg-orange-reg bottom-4 rounded-full z-0 opacity-75 skew-y-1"></span>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">

        <!-- Répétez ce bloc pour chaque projet -->
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/img/jpg/img_agro.jpg" alt="project" />
            <div class="p-6 bg-bleu-pale">
              <h2 class="text-base font-medium text-indigo-500 mb-1 Kalam">
                Agrotourisme Laurentides - Maquette UX
              </h2>
              <h1 class="title-font text-lg font-bold text-gray-900 mb-3 Kalam">
                Premier projet d'équipe réaliser avec Vue.js
              </h1>
              <p class="leading-relaxed mb-3 Titillium">
                Petit site web développer à l'aide Vue.js dans le cadre du cours
                de Web 4. le but du projet était de collaboré entre les
                développeurs Front-end et Back-End. Ma tâche était l'intégration
                du visuel et de quelques fonctionnalités
              </p>
              <div class="flex items-center flex-wrap cursor-pointer ">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-orange-pale Courgette"
                  href="/pdf/Chadrik_maquette_UX.pdf" target="_blank">En savoir plus
                  <i class="las la-arrow-right ml-2"></i>
                  <!-- Icône Line Awesome -->
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin du bloc pour chaque projet -->
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden h-full">
            <img class="lg:h-48 md:h-36 w-full object-fit object-center " src="/img/svg/logo.svg" alt="project" />
            <div class="p-6 flex flex-col bg-bleu-pale">
              <h2 class="text-base font-medium text-indigo-500 mb-1 Kalam">
                Bucheron Boréal - Maquette UI
              </h2>
              <h1 class="title-font text-lg font-bold text-gray-900 mb-3 Kalam">
                Premier projet réalisé avec React
              </h1>
              <p class="leading-relaxed mb-3 Titillium">
                Petite application de commande en ligne. c'était ma première expérience de développement
                d'application web et de développement d'application mobile web. Attention! le site est destiné pour mobile
                seulement
                pour l'instant
              </p>
              <div class="flex items-center flex-wrap cursor-pointer">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-orange-pale Courgette"
                  href="/pdf/BERC2037079_UI.pdf" target="_blank">En savoir plus
                  <i class="las la-arrow-right ml-2"></i>
                  <!-- Icône Line Awesome -->
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin du bloc pour chaque projet -->
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/img/jpg/img_tune_up.jpg" alt="project" />
            <div class="p-6 bg-bleu-pale">
              <h2 class="text-base font-medium text-indigo-500 mb-1 Kalam">
                Tune-up - Site web
              </h2>
              <h1 class="title-font text-lg font-bold text-gray-900 mb-3 Kalam">
                Premier gros projet réalisé avec React et Tailwind
              </h1>
              <p class="leading-relaxed mb-3 Titillium">
                Premier projet réaliser avec React et Tailwind.css. Le but du
                projet était de créer un site web de musique, y intégrer du
                motion desgin et mettre le site en ligne. Ma tâche était de
                créer un visuel cohérant et interessant pour l'application
              </p>
              <div class="flex items-center flex-wrap cursor-pointer">
                <a href="https://tune-up-musique.netlify.app/" target="_blank"
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-orange-pale Courgette">En
                  savoir plus
                  <i class="las la-arrow-right ml-2"></i>
                  <!-- Icône Line Awesome -->
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin du bloc pour chaque projet -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>
