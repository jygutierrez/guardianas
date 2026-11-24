<template>
    <div class="bg" id="guardianas-portada">

        <img class="flor-1" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/FLOR SILVESTRE.webp" alt="FLOR SILVESTRE" />
        <img class="flor-2" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/FLOR SILVESTRE.webp" alt="FLOR SILVESTRE" />
        <img class="flor-3" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/FLOR SILVESTRE.webp" alt="FLOR SILVESTRE" />

        <img class="yaneth" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/SEÑORA YANETH.webp" alt="SRA. YANETH" />
        <img class="senora3" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/SEÑORA 3.webp" alt="SEÑORA" />
        <img class="sandra" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/SEÑORA SANDRA.webp" alt="SRA. SANDRA" />



        <img class="frailejon" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/FRAILEJÓN.webp" alt="FRAILEJÓN" />
        <img class="orquidea" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/Orquidea.webp" alt="FLOR SILVESTRE" />


        <img class="titulo" src="@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/título Guardianas.webp"
            alt="FLOR SILVESTRE" />
    </div>
</template>

<style scoped>
.bg {
    position: relative;
    background-image: url("@/assets/imgs/GUARDIANAS/ELEMENTOS PORTADA/FONDO.webp");
    background-size: cover;
    height: 100vh;
    overflow: hidden;
}

.titulo {
    width: 56vw;
    transform: translateX(78%) translateY(-20%);
}

.bg>img {
    position: absolute;
}

.flor-1,
.flor-2,
.flor-3 {
    width: 30vh;
}

.flor-1 {
    transform: translateX(40rem) translateY(3rem);
}

.flor-2 {
    transform: translateX(17rem) translateY(-3rem);
}

.flor-3 {
    transform: translateX(-5rem) translateY(1rem);
}

.yaneth {
    height: 80vh;
    transform: translateX(-2rem) translateY(3rem);
}

.sandra {
    height: 90vh;
    transform: translateX(10rem) translateY(10rem);
}

.senora3 {
    height: 80vh;
    transform: translateX(25rem) translateY(13rem);
}

.orquidea {
    width: 30vw;
    transform: translateX(80%) translateY(160%);
}

.frailejon {
    width: 50vw;
    transform: translateX(-30%) translateY(40%);
}

@media (max-width: 1100px) {

    .flor-1,
    .flor-2,
    .flor-3 {
        width: 20%;
    }

    .flor-1 {
        transform: translateX(40%) translateY(-10%);
    }


    .flor-2 {
        transform: translateX(150%) translateY(30%);
    }

    .flor-3 {
        transform: translateX(-33%) translateY(25%);
    }

    .yaneth {
        height: 95%;
        transform: translateX(-2%) translateY(20%);
    }

    .sandra {
        height: 90%;
        transform: translateX(50%) translateY(33%);
    }

    .senora3 {
        height: 80%;
        transform: translateX(80%) translateY(45%);
    }

    .orquidea {
        width: 30vw;
        transform: translateX(110%) translateY(190%);
    }


    .bg {
        background-size: covers;
        height: 26vh;
    }

}
</style>