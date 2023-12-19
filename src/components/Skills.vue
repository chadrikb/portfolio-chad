<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <div class="wrapper-titre relative flex flex-col mb-8 w-fit m-auto">
          <h2 class="about inline-block title-font text-8xl Kalam w- z-10">
            Mes Compétences
          </h2>
          <span class="absolute w-full h-1/4 bg-orange-reg bottom-2 rounded-full z-0 opacity-75 skew-y-1"></span>
        </div>
        <p class="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto Titillium">
          Les technologies et outils que je maîtrise
        </p>
      </div>
      <div class="skills flex flex-wrap gap-2 justify-center">
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/png/html-5.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">HTML</h2>
            <p class="annee text-center Courgette">
              3 années d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/png/css-3.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">CSS</h2>
            <p class="annee text-center Courgette">
              3 années d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/svg/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">Tailwind CSS</h2>
            <p class="annee text-center Courgette">
              1 ans d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/png/java-script.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">JavaScript</h2>
            <p class="annee text-center Courgette">
              2 années d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/svg/vue.svg" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">Vue.Js</h2>
            <p class="annee text-center Courgette">
              2 années d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/png/react.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">React</h2>
            <p class="annee text-center Courgette">
              1 ans d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/png/illustrator.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">Illustrator</h2>
            <p class="annee text-center Courgette">
              2 années d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly">
          <img src="/img/png/photoshop.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold Kalam">Photoshop</h2>
            <p class="annee text-center Courgette">
              2 années d'expérience
            </p>
          </div>
        </div>
        <!-- fin  -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
};
</script>
