<template>
    <div id="Accueil" class="h-screen w-full">
        <div class="wrapper-text flex flex-col items-center justify-center h-5/6">
            <h2 class="Kalam text-2xl mb-1">Hi, Bonjour!</h2>
            <h2 class="Kalam text-7xl mb-10">Mon Nom est Chadrik</h2>
            <h3 class="Kalam text-6xl mb-9">Je suis un développeur Front-End basé à Montréal.</h3>
            <h4 class="Kalam text-5xl mb-24">Bienvenue sur mon Portfolio!</h4>
            <div class="wrapper-btn relative flex flex-col mb-8">
                <button class="Courgette text-3xl z-10" @click="scrollToSection('AboutMe')">Commençons</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Accueil',
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
.wrapper-btn {
    overflow: hidden;
}

button::before {
    content: '';
    position: absolute;
    bottom: .5rem;
    left: 0;
    width: 0;
    height: 25%;
    border-radius: 50px;
    background-color: #F89333;
    transform: skewY(1deg);
    z-index: -1;
    transition: width 0.5s ease-in-out;
}

button:hover::before {
    width: 100%;
}
</style>
