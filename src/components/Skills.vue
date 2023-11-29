<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Mes Compétences
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Les technologies et outils que je maîtrise
        </p>
      </div>
      <div class="skills flex flex-row gap-5">
        <!-- Div à répéter -->
        <div class="wrapper-skills bg-bleu-pale w-1/5 p-4 rounded">
          <div class="wrapper-name flex flex-row items-center">
            <img src="png/html-5.png" alt="" class="w-16 h-16" />
            <h2 class="text-4xl font-bold">HTML</h2>
          </div>
          <div class="annee pl-3">
            <p>3 ans d'expérience</p>
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
