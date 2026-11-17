<script  setup lang="ts">
import { ref, reactive } from 'vue'

const isFlippedMiel1 = ref(false)
const isFlippedMiel2 = ref(false)
const isFlippedMiel3 = ref(false)
const isFlippedMiel4 = ref(false)
const isFlippedMiel5 = ref(false)
const isFlippedMiel6 = ref(false)

import miel1 from '@/assets/imgs/APIUSME/Miel cristalizada.webp'
import miel2 from '@/assets/imgs/APIUSME/Miel3.webp'
import miel3 from '@/assets/imgs/APIUSME/Polen.webp'
import miel4 from '@/assets/imgs/APIUSME/Miel2.webp'
import miel5 from '@/assets/imgs/APIUSME/chocolates.webp'
import miel6 from '@/assets/imgs/APIUSME/Cera.webp'

const mielecita = reactive ( [
    {
        src : miel1,
        title : "Miel cristalizada",
        dptn : "Es señal de que es PURA, pura, cruda y no ha sido sometida a un proceso de pasteurización industrial agresivo.",
        flp : isFlippedMiel1,
    },
    {
        src : miel2,
        title : "Miel de abejas",
        dptn : "Funciona como un supresor natural de la tos y suaviza las vías respiratorias, favorece la curación de heridas superficiales o quemaduras leves.",
        flp : isFlippedMiel2,
    },
    {
        src : miel3,
        title : "Polen",
        dptn : "Incrementa la energía física y mental, fortalece las defensas inmunológicas y mejora la salud digestiva.",
        flp : isFlippedMiel3,
    },
    {
        src : miel4,
        title : "Propóleo",
        dptn : "Contiene propiedades antibacterianas, antivirales, antiinflamatorias y antioxidantes.",
        flp : isFlippedMiel4,
    },
    {
        src : miel5,
        title : "Chocolates",
        dptn : "Chocolatinas artesanales rellenas de miel y polen.",
        flp : isFlippedMiel5,
    },
    {
        src : miel6,
        title : "Cera de abeja",
        dptn : "Ideal para cosmética artesanal y velas.",
        flp : isFlippedMiel6,
    },
] )


</script>


<template>

    <div class="img-bienv">
        <img src="@/assets/imgs/APIUSME/abeja ilustración.webp" alt="abeja">
        <img src="@/assets/imgs/APIUSME/LETRERO APIUSME.webp" alt="Letrero ApiUsme">
        <img src="@/assets/imgs/APIUSME/abeja ilustración.webp" alt="abeja">
    </div>

    <div class="bienvenido">
        <h2 id="productos" >Productos</h2>
    </div>

    <div class="productos">

        <div class="flip-card"
        
        v-for="(miel, key) in mielecita"
        :key="key"
        >

            <div class="flip-card-inner" :class="{ 'is-flipped': miel.flp }">
                <div class="flip-card-front">
                    <v-card class="fill-height" color="#ae2e05" rounded="4rem" @click="miel.flp = true">
                        <v-img color="#FFFBEC" height="400" :src="miel.src" cover></v-img>
                    </v-card>
                </div>


                <div class="flip-card-back">
                    <v-card color="#ae2e05" rounded="4rem" @click="miel.flp = false" class="fill-height">
                        <v-card-text class="prods-title">{{ miel.title }}</v-card-text>
                        <v-card-text class="prods-dptn">{{ miel.dptn }}</v-card-text>
                    </v-card>
                </div>

            </div>
        </div>

    </div>

    <div class="grd-buttons">
            <a href="https://linktr.ee/apiusme" target="_blank" >Conoce sus productos</a>
    </div>

</template>

<style scoped>

@keyframes zoom-pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05) }   /* zoom in */
  100% { transform: scale(1); }     /* back to normal */
}

.img-bienv, .bienvenido, .productos {
    background-color: var(--color-crema-fondos);
}

.img-bienv {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.img-bienv img:nth-child(2) {
    width: 50vw;
}

.img-bienv img:nth-child(1), .img-bienv img:nth-child(3){
    width: 12vw;
    height: 20vh;
}

.img-bienv img:nth-child(3) {
    transform: scaleX(-1);
}

.bienvenido h2{
    text-align: center;
    color: var(--color-violeta-oscura);
    padding: 3rem 0rem;
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 4rem;
}

.productos {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-left: 18vw;
}

.prods-title {
    padding-top: 1rem;
    font-size: 3rem;
    color: var(--color-amarillo-pastel);
    font-weight: bold;
    text-align: center;
    line-height: 2.8rem;
}

.prods-dptn {
    font-size: 1.6rem;
    color: var(--color-crema-fondos);
    font-weight: bold;
    text-align: center;
    line-height: 2rem;
}

.flip-card {
  /*flex: 0 0 calc((100% - 2rem) / 2);*/
  flex: 0 0 calc((75% - 2rem) / 3);
  perspective: 1000px;
  height: 45vh;
}

.flip-card-front {
  animation: zoom-pulse 2s ease-in-out infinite;
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
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.grd-buttons{
    width: 20vw;
    margin: auto;
    margin-top: 3rem;
    text-align: center;
}

.grd-buttons a{
    padding: 0.8rem 2.2rem;
    border-radius: 3rem;
    color: var(--color-violeta-claro);
    background-color: var(--color-amarillo);
    font-size: 1.4rem;
    transition: 0.8s;
    font-weight: bold;
}

.grd-buttons a:hover{
    background-color: var(--color-verde);
    color: var(--color-crema-fondos);
    transition: 0.8s;
}

@media (max-width: 1100px) {

    .bienvenido h2{
        margin-bottom: 0;
    }

    .productos {
        display: block;
        margin: 0;
    }

    .flip-card {
        margin: 10rem 0rem;
    }

    .flip-card:nth-child(1) {
        margin: 10rem 1rem;
        margin-top: 0rem;
    }

    .flip-card:last-child {
        margin: 10rem 1rem;
        margin-bottom: 0rem;
    }

    .img-bienv img:nth-child(1), .img-bienv img:nth-child(3){
        width: 16vw;
        height: 8vh;
    }

    .grd-buttons {
        display: flex;
        width: 80vw;
    }

    .grd-buttons a{
        padding: 0.8rem 2.2rem;
        border-radius: 3rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .prods-title {
        line-height: normal;
        font-size: 2rem;
    }

    .prods-dptn {
        line-height: normal;
        font-size: 1.2rem;
    }

}


</style>