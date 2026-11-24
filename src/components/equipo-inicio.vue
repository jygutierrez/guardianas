<template>
        <img class="titulo" src="@/assets/imgs/EQUIPO/TITULO EQUIPO.webp" alt="TITULO EQUIPO">
        <div class="bg">
            <img class="equipo" src="@/assets/imgs/EQUIPO/foto portada Equipo.webp" alt="EQUIPO MYA">
            <img class="frailejon1" src="@/assets/imgs/EQUIPO/Frailejón poster.webp" alt="Frailejon">
            <img class="frailejon2" src="@/assets/imgs/EQUIPO/Frailejón poster.webp" alt="Frailejon">
        </div>
</template>

<style scoped>
.bg{
    margin-top: 10rem;
    height: 42vw;
    position: relative;
    overflow: hidden;
}

.titulo, .frailejon1, .frailejon2, .equipo{
    position: absolute;
}

.equipo {
    height: 100vh;
    transform: translateX(8%) translateY(5%);
}

.titulo {
    width: 75vw;
    transform: translateX(20%) translateY(-52%);
    z-index: -1;
}

.frailejon1 {
    height: 150vh;
    transform: translateX(-20%);
}

.frailejon2 {
    height: 150vh;
    transform: translateX(140%);
}

@media (max-width: 1100px) {

    .bg {
        height: 20vh;
        margin-top: 6vh;
    }

    .titulo {
        width: 60vw;
        transform: translateX(40%) translateY(-60%);
    }

    .equipo {
        height: 100%;
        transform: translateX(33%) translateY(0%);
    }
    .frailejon1 {
        height: 55vh;
        transform: translateX(14rem) translateY(0rem);
    }

    .frailejon2 {
        height: 55vh;
        transform: translateX(-4rem);
    }

}
</style>