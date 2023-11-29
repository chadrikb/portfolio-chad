<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <div class="wrapper-titre relative flex flex-col mb-8 w-fit m-auto">
          <h2 class="about inline-block title-font text-6xl font-Kalam w- z-10">
            Mes Compétences
          </h2>
          <span
            class="absolute w-full h-1/4 bg-orange-reg bottom-2 rounded-full z-0 opacity-75 skew-y-1"
          ></span>
        </div>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Les technologies et outils que je maîtrise
        </p>
      </div>
      <div class="skills flex flex-wrap gap-2 justify-center">
        <!-- Div à répéter -->
        <div
          class="wrapper-skills bg-gris w-1/5 p-3 rounded flex flex-row place-content-evenly"
        >
          <img src="png/html-5.png" alt="" class="w-16 h-16" />
          <div class="wrapper-name flex flex-col items-center">
            <h2 class="text-3xl font-bold font-courgette">HTML</h2>
            <p class="annee text-center font-Courgette">
              3 années d'expérience
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
