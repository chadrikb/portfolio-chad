<template>
  <section class="about-me text-gray-600 body-font h-full">
    <div class="container mx-auto flex flex-row py-24 h-full gap-8">
      <img class="w-1/2 mb-10 object-cover object-center rounded" alt="moi" src="/img/jpg/portrait.jpg" />
      <div class="info flex flex-col items-center">
        <div class="title flex flex-col mb-24">
          <h2 class="text-7xl text-center uppercase">Développeur</h2>
          <span class="text-6xl text-center">Front-end</span>
        </div>

        <div class="wrapper-titre relative flex flex-col mb-8">
          <h2 class="about inline-block title-font text-6xl font-Kalam w-max z-10">
            À propos de moi
          </h2>
          <span class="absolute w-full h-1/4 bg-orange-reg bottom-2 rounded-full z-0 opacity-75 skew-y-1"></span>
        </div>
        <p class="leading-relaxed font-sans text-xl h-1/4 pl-12 text-justify text-right">
          Développeur front-end motivé par ma soif d'apprentissage, je me
          développe dans le domaine du web et dans la vie de tout les jours, de
          façon sans limite. J'aime fouiller un peu partout pour peaufiner mes
          connaissances. Cette avidité envers le développement, me permet une
          autonomie et une capacité d'adaptation rapide dans toutes les sphères
          de ma vie.
        </p>
        <div class="wrapper-CV relative flex flex-col mb-4">
          <h4 class="inline-block title-font text-6xl font-Kalam w-max z-10">
            Tu veux en savoir plus ?
          </h4>
          <span class="absolute w-full h-1/4 bg-orange-reg bottom-2 rounded-full z-0 opacity-75 skew-y-1"></span>
        </div>
        <div class="wrapper-lien-port flex flex-col justify-center items-center">
          <p class="leading-relaxed font-sans text-xl h-1/4 text-justify mb-2">
            voici un lien vers mon porfolio!
          </p>
          <a href="/pdf/Chadrik_Bertrand_CV.pdf" target="_blank"
            class="text-6xl hover:text-orange-reg w-fit text-center">Clique ici!!!</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped></style>
