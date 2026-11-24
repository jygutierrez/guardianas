<script setup lang="ts">

import carusel1 from '@/assets/imgs/INICIO/carrusel1.webp'
import carusel2 from '@/assets/imgs/INICIO/carrusel2.webp'
import carusel3 from '@/assets/imgs/INICIO/carrusel3.webp'
import carusel4 from '@/assets/imgs/INICIO/carrusel4.webp'
import carusel5 from '@/assets/imgs/INICIO/carrusel5.webp'
import carusel6 from '@/assets/imgs/INICIO/carrusel6.webp'

const slides = [
    carusel1, carusel2, carusel3,
    carusel4, carusel5, carusel6
] 
</script>

<template>
    <div class="container">
        <div class="center">
            <div class="info">
                <h2>¿Quiénes crearon este proyecto?</h2>
                <p>Somos tres <b>diseñadoras digitales y multimediales</b> que buscamos crear un espacio para
                    visibilizar a las mujeres campesinas bogotanas y reconocer el valor de sus saberes.</p>
                <div class="grd-buttons">
                    <RouterLink to="/Equipo">
                        Conoce más
                    </RouterLink>
                </div>
            </div>
            <div class="carr">
                <v-container>
                    <v-carousel show-arrows="hover" cycle interval="4000" hide-delimiter-background>
                        <v-carousel-item v-for="(src, i) in slides" :key="i" :src="src" cover></v-carousel-item>
                    </v-carousel>
                </v-container>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    margin-top: 5rem;
    margin-bottom: 10rem;
    gap: 2rem;
}

.center {
    display: flex;
    align-items: center;
}

.info {
    width: 20vw;
    flex: 0 0 20vw;
    margin: auto;
}

.info b {
    font-weight: bold;
}

.info h2 {
    font-size: 2.8rem;
    line-height: 3rem;
    font-weight: bold;
}

.info p {
    font-size: 1.8rem;
    line-height: 2rem;
}

.info p:nth-child(2) {
    margin-top: 1rem;
}

.info a p:hover {
    background-color: var(--color-violeta-oscuro);
    color: var(--color-crema-fondos);
}

div.carr {
    flex-shrink: 0;
    height: 50vh;
    width: 40vw;
    margin: auto;
    padding-bottom: 2rem;
}

.grd-buttons {
    display: flex;
    margin: auto;
}

.grd-buttons a {
    margin-top: 2rem;
    padding: 0.8rem 2.2rem;
    border-radius: 3rem;
    color: var(--color-violeta-claro);
    background-color: var(--color-amarillo);
    font-size: 1.4rem;
    font-weight: bold;
    transition: 0.8s;
}

.grd-buttons a:hover {
    background-color: var(--color-verde);
    color: var(--color-crema-fondos);
    transition: 0.8s;
}


@media (max-width: 1100px) {
    .container {
        margin-bottom: 60%;
    }

    .container .center {
        display: block;
    }

    .container .info {
        width: 90vw;
        margin: auto;
    }

    div.carr {
        width: 100vw;
    }

}
</style>
