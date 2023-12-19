<template>
    <section id="Accueil" class="h-screen w-full">
        <div class="wrapper-text flex flex-col items-center justify-center h-5/6">
            <h2 class="Kalam text-md xl:text-2xl mb-1">Hi, Bonjour!</h2>
            <h2 class="Kalam text-2xl xl:text-7xl mb-10">Mon Nom est Chadrik</h2>
            <h3 class="Kalam text-center text-xl xl:text-6xl mb-9">Je suis un développeur Front-End basé à Montréal.</h3>
            <h4 class="Kalam text-xl xl:text-5xl mb-24">Bienvenue sur mon Portfolio!</h4>
            <div class="wrapper-btn relative flex flex-col mb-8">
                <button class="Courgette text-3xl z-10" @click="scrollToSection('AboutMe')">Commençons</button>
            </div>
            <img src="img/svg/arrow-down.svg" alt="" class="w-24 bounce" />
        </div>
    </section>
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

/* Bounce animation for the image */
.bounce {
    animation: bounceAnimation 2s infinite;
}

@keyframes bounceAnimation {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}
</style>
