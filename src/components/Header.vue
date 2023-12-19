<template>
  <header>
    <div class="Titilliu font-bold">
      <div class="flex flex-row items-center justify-between mt-5">
        <div class="">
          <a href="#" class="px-5 py-3 flex items-center text-5xl Courgette">Mon Portfolio</a>
        </div>
        <div class="flex items-center">
          <nav class="md:flex items-center justify-end md:flex-1 ">
            <a href="#"
              class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:text-orange-reg">Accueil</a>
            <a href="#"
              class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:opacity-75 hover:text-orange-reg">À
              Propos</a>
            <a href="#"
              class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:opacity-75 hover:text-orange-reg">Projets</a>
            <a href="#"
              class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:opacity-75 hover:text-orange-reg">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script>
export default {
  name: 'Header',
  data() {
    return {
      open: false,
    };
  },
};
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Kalam:wght@300;400;700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
</style>
  