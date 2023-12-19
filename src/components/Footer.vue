<script></script>
<template>
  <div class="footer py-9 bg-gris">
    <div class="flex flex-row w-full justify-around items-center py-9 bg-gris">
      <div class="flex flex-col text-center gap-4">
        <h2 class="text-6xl Courgette">Chadrik Bertrand</h2>
        <h4 class="text-2xl Courgette">Développeur Front-end</h4>
        <a href="/pdf/Chadrik_Bertrand_CV.pdf" class="hover:text-orange-reg text-4xl Kalam">
          <p>Mon CV</p>
        </a>
      </div>
      <div class="flex flex-col gap-4  text-center">
        <h4 class="text-5xl Kalam">Contactez moi!</h4>
        <h4 class="text-2xl Titillium"><span class="font-bold Kalam">Téléphone:</span> 450-694-1314</h4>
        <h4 class="text-2xl Titillium"><span class="font-bold Kalam">Courriel: </span> Chadrikb@gmail.com</h4>
        <a href="https://www.linkedin.com/in/chadrik-bertrand/" class="cursor-pointer hover:text-orange-reg"
          target="_blank">
          <h4 class="text-2xl font-bold Kalam">LinkedIn</h4>
        </a>
        <a href="https://www.pinterest.ca/chadrikb/" class="cursor-pointer hover:text-orange-reg" target="_blank">
          <h4 class="text-2xl font-bold Kalam">Pinterest</h4>
        </a>
      </div>
    </div>
    <div class="nav flex items-center">
      <nav class="md:flex items-center justify-center md:flex-1 ">
        <a @click="scrollToSection('accueil')"
          class="cursor-pointer px-5 py-3 flex items-center text-lg uppercase font-medium leading-snug text-gray-800 hover:text-orange-reg hover:font-bold">Accueil</a>
        <a @click="scrollToSection('AboutMe')"
          class="cursor-pointer px-5 py-3 flex items-center text-lg uppercase font-medium leading-snug text-gray-800 hover:font-bold hover:text-orange-reg">À
          Propos</a>
        <a @click="scrollToSection('Skills')"
          class="cursor-pointer px-5 py-3 flex items-center text-lg uppercase font-medium leading-snug text-gray-800 hover:font-bold hover:text-orange-reg">Compétences</a>
        <a @click="scrollToSection('Projects')"
          class="cursor-pointer px-5 py-3 flex items-center text-lg uppercase font-medium leading-snug text-gray-800 hover:font-bold hover:text-orange-reg">Projets</a>
      </nav>
    </div>
  </div>
</template>
