<template>
  <header>
    <div class="Titillium font-bold w-full">
      <div class="flex flex-col lg:flex-row items-center justify-between mt-5">
        <div class="lg:w-1/2 mb-4 lg:mb-0">
          <a href="#" class="px-5 py-3 flex items-center text-2xl xl:text-5xl Courgette ">Mon Portfolio</a>

        </div>
        <div
          class="bg-bleu-pale lg:bg-bleu-pale/[.00] w-full p-1 fixed bottom-0 lg:relative lg:w-1/2 lg:flex lg:items-center lg:justify-end z-50">
          <nav class="flex flex-row items-center justify-around lg:justify-end md:flex-1 ">
            <a @click="scrollToSection('Accueil')"
              class="cursor-pointer lg:px-5 py-3 flex items-center lg:text-lg uppercase font-medium leading-snug text-gray-800 hover:text-orange-reg hover:font-bold">Accueil</a>
            <a @click="scrollToSection('AboutMe')"
              class="cursor-pointer lg:px-5 py-3 flex items-center lg:text-lg uppercase font-medium leading-snug text-gray-800 hover:font-bold hover:text-orange-reg">À
              Propos</a>
            <a @click="scrollToSection('Skills')"
              class="cursor-pointer lg:px-5 py-3 flex items-center lg:text-lg uppercase font-medium leading-snug text-gray-800 hover:font-bold hover:text-orange-reg">Compétences</a>
            <a @click="scrollToSection('Projects')"
              class="cursor-pointer lg:px-5 py-3 flex items-center lg:text-lg uppercase font-medium leading-snug text-gray-800 hover:font-bold hover:text-orange-reg">Projets</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Kalam:wght@300;400;700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
</style>
