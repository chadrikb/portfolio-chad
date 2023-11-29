<template>
    <header class="">
      <div class="">
        <div class="">
          <div class="">
            <a href="#" class="px-5 py-3 flex items-center text-2xl">Mon Portfolio</a>
          </div>
          <div class="flex items-center">
            <nav :class="{ 'flex': open, 'hidden': !open }" class="md:flex items-center justify-end md:flex-1 ">
              <a href="#" class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:text-orange-reg">Accueil</a>
              <a href="#" class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:opacity-75">À Propos</a>
              <a href="#" class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:opacity-75">Projets</a>
              <a href="#" class="px-5 py-3 flex items-center text-sm uppercase font-medium leading-snug text-gray-800 hover:opacity-75">Contact</a>
            </nav>
            <button @click="open = !open" class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path x-show="!open" fill-rule="evenodd" clip-rule="evenodd" d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414L11.414 11l4.293 4.293a1 1 0 01-1.414 1.414L10 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 11 4.293 6.707a1 1 0 010-1.414z"/>
                <path x-show="open" d="M4 5h12v2H4V5zm0 4h12v2H4V9zm0 4h12v2H4v-2z"/>
              </svg>
            </button>
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

  </style>
  