<template>
    <img class="titulo" src="@/assets/imgs/EQUIPO/TITULO EQUIPO.webp" alt="TITULO EQUIPO">
    <div class="bg">
        <img class="frailejon1" src="@/assets/imgs/EQUIPO/Frailejón poster.webp" alt="TITULO EQUIPO">
        <img class="frailejon2" src="@/assets/imgs/EQUIPO/Frailejón poster.webp" alt="TITULO EQUIPO">
    </div>
</template>

<style scoped>
.bg{
    margin-top: 10rem;
    background-image: url("@/assets/imgs/EQUIPO/foto portada Equipo.webp");
    background-size: cover;
    height: 42vw;
    position: relative;
    overflow: hidden;
}

.titulo, .frailejon1, .frailejon2{
    position: absolute;
}

.titulo {
    width: 75vw;
    transform: translateX(15vw) translateY(-45vh);
    z-index: -1;
}

.frailejon1 {
    height: 150vh;
    transform: translateX(-10rem);
}

.frailejon2 {
    height: 150vh;
    transform: translateX(90rem);
}

@media (max-width: 1100px) {

    .titulo {
        width: 80vw;
        transform: translateX(15vw) translateY(-25vh);

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