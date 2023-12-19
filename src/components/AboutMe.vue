<template>
  <section class="text-gray-600 body-font h-full" id="AboutMe">
    <div class="container mx-auto flex flex-col lg:flex-row py-24 h-full gap-8">
      <img class="w-full lg:w-1/2 mb-10 object-cover object-center rounded" alt="moi" src="/img/jpg/portrait.jpg" />
      <div class="info flex flex-col items-center">
        <div class="wrapper-titre relative flex flex-col mb-8">
          <h2 class="about inline-block title-font text-4xl xl:text-6xl w-max z-10 Kalam">
            À propos de moi
          </h2>
          <span class="absolute w-full h-1/4 bg-orange-reg bottom-2 rounded-full z-0 opacity-75 skew-y-1"></span>
        </div>
        <p class="leading-relaxed font-sans text-xl h-2/5 xl:pl-12 p-1 text-justify text-right Titillium">
          Développeur front-end motivé par ma soif d'apprentissage, je me
          développe dans le domaine du web et dans la vie de tout les jours, de
          façon sans limite. J'aime fouiller un peu partout pour peaufiner mes
          connaissances. Cette avidité envers le développement, me permet une
          autonomie et une capacité d'adaptation rapide dans toutes les sphères
          de ma vie.
        </p>
        <div class="wrapper-CV relative flex flex-col mb-4">
          <h4 class="inline-block title-font text-3xl xl:text-6xl Kalam w-max z-10">
            Tu veux en savoir plus ?
          </h4>
          <span class="absolute w-full h-1/4 bg-orange-reg bottom-2 rounded-full z-0 opacity-75 skew-y-1"></span>
        </div>
        <div class="wrapper-lien-port flex flex-col justify-center items-center">
          <p class="leading-relaxed Titillium text-2xl h-1/4 text-justify mb-5">
            voici un lien vers mon CV!
          </p>
          <a href="/pdf/Chadrik_Bertrand_CV.pdf" target="_blank"
            class="text-6xl hover:text-orange-reg w-fit text-center Courgette">Clique ici!!!</a>
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
