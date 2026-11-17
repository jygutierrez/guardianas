<script  setup lang="ts">
import { ref } from 'vue'
const isFlipped = ref(false)
const isFlippedY = ref(false)

import img_Sandra from '@/assets/imgs/GUARDIANAS/Señora Sandra Guardianas.webp'
import img_Yaneth from '@/assets/imgs/GUARDIANAS/Señora Yaneth Guardianas.webp'

const imgSandra = img_Sandra
const imgYaneth = img_Yaneth

</script>


<template>
    <div class="bg">
        <h2 class="title">Conoce a las Guardianas</h2>
        <div class="grd-about">
            <div class="flip-card">
                <div class="flip-card-inner" :class="{ 'is-flipped': isFlipped }">


                    <div class="flip-card-front">
                        <v-card class="fill-height" color="#ae2e05" rounded="4rem" @click="isFlipped = true">
                            <v-img color="#FFFBEC" height="400" :src="imgSandra" cover></v-img>
                            <v-card-title class="guardianaTitulo">Sandra Peñalosa</v-card-title>
                            <v-card-text class="guardianaDonde">Loc. Usme / Vereda Arrayanes</v-card-text>
                        </v-card>
                    </div>


                    <div class="flip-card-back">
                        <v-card color="#ae2e05" rounded="4rem" @click="isFlipped = false" class="fill-height">
                            <v-card-text class="guardianaCitaA">"Las mujeres de páramo son memoria viva de agua y
                                montaña".</v-card-text>
                            <v-card-text class="guardianaCitaB">Heredé de mis padres la sabidura de las
                                plantas.</v-card-text>
                        </v-card>
                    </div>

                </div>
            </div>
            <div class="grd-buttons mobile-button">
                <RouterLink to="/acerca-sandra">
                    Conoce más de Sandra
                </RouterLink>
            </div>


            <div class="flip-card">
                <div class="flip-card-inner" :class="{ 'is-flipped': isFlippedY }">


                    <div class="flip-card-front">
                        <v-card class="fill-height" color="#ae2e05" rounded="4rem" @click="isFlippedY = true">
                            <v-img color="#FFFBEC" height="400" :src="imgYaneth" cover></v-img>
                            <v-card-title class="guardianaTitulo">Yaneth Bermúdez</v-card-title>
                            <v-card-text class="guardianaDonde">Loc. Usme / Vereda El Destino</v-card-text>
                        </v-card>
                    </div>


                    <div class="flip-card-back">
                        <v-card color="#ae2e05" rounded="4rem" @click="isFlippedY = false" class="fill-height">
                            <v-card-text class="guardianaCitaA">"De la colmena para ti".</v-card-text>
                            <v-card-text class="guardianaCitaB">Soy administradora agropecuaria, vivo en la localidad de
                                Engativá y mi apiario está en Usme, vereda El Destino.</v-card-text>
                        </v-card>
                    </div>

                </div>
            </div>
            <div class="grd-buttons mobile-button">
                <RouterLink to="/acerca-yaneth">
                    Conoce más de Yaneth
                </RouterLink>
            </div>
        </div>

        <div class="grd-buttons">
            <RouterLink to="/acerca-sandra">
                Conoce más de Sandra
            </RouterLink>
            <RouterLink to="/acerca-yaneth">
                Conoce más de Yaneth
            </RouterLink>
        </div>
    </div>



</template>
<style scoped>
@keyframes zoom-pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05)
    }

    /* zoom in */
    100% {
        transform: scale(1);
    }

    /* back to normal */
}

.bg {
    background-color: var(--color-violeta-oscuro);
    height: 90vh;
}

.bg h2 {
    color: var(--color-crema-fondos);
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
}

.grd-about {
    display: flex;
    justify-content: space-evenly;
}

.grd-buttons {
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
}


.mobile-button {
    display: none;
}


.grd-buttons a:nth-child(2) {
    margin-left: 4rem;
}

.grd-buttons a {
    padding: 0.8rem 2.2rem;
    border-radius: 3rem;
    color: var(--color-violeta-claro);
    background-color: var(--color-amarillo);
    font-size: 1.4rem;
    transition: 0.8s;
}

.grd-buttons a:hover {
    background-color: var(--color-verde);
    color: var(--color-crema-fondos);
    transition: 0.8s;
}

.flip-card {
    perspective: 1000px;
    width: 25vw;
    height: 60vh;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card-inner.is-flipped {
    transform: rotateY(180deg);
}


.flip-card-front {
    animation: zoom-pulse 2s ease-in-out infinite;
}


.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}



.flip-card-back {
    transform: rotateY(180deg);
}


.guardianaTitulo,
.guardianaDonde {
    text-align: center;
}

.guardianaTitulo {
    color: var(--color-violeta-oscuro);
    font-size: 2rem;
    font-weight: bold;
}

.guardianaDonde {
    color: var(--color-amarillo);
    font-size: 1.5rem;
    font-weight: bold;
}

.guardianaCitaA {
    color: var(--color-amarillo-pastel);
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
    margin-top: 4rem;
}

.guardianaCitaB {
    color: var(--color-crema-fondos);
    font-size: 2rem;
    text-align: center;
}

@media (max-width: 1100px) {

    .bg {
        padding-top: 3rem;
        height: auto;
    }

    .title {
        display: none;
    }

    .grd-about {
        display: grid;
        gap: 4rem;
        justify-content: center;
    }

    .guardianaTitulo {
        font-size: 1.5rem;
    }

    .guardianaDonde {
        font-size: 1.2rem;
    }

    .guardianaCitaA {
        font-size: 2rem;
        line-height: 2rem;
    }

    .guardianaCitaB {
        font-size: 1.5rem;
    }


    .flip-card {
        width: 75vw;
        height: 34rem;
    }
    .grd-buttons {
        display: none;
    }

    .mobile-button {
        display: block;
    }

}
</style>