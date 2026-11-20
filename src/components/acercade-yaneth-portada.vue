<script  setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter()
</script>


<template>
    <div class="back">
        <button @click="router.back()">Regresar</button>
    </div>
    <div class="container">
        <div class="info">
            <h1>Yaneth Bermúdez</h1>
            <p class="localidad">Loc. Usme / Vereda El Destino</p>
            <p class="acercade">Tengo mi propio semillero y quiero llegar a tener mis propios vegetales, para consumir mi propia comida, es más saludable, ojalá tuviéramos más esa cultura.</p>
        </div>
        <div class="imagen">
            <img src="@/assets/imgs/FICHA YANETH/Señora Yaneth ficha.webp" alt="Sra. Sandra ficha">
        </div>
    </div>

</template>

<style scoped>

.back button {
    color: var(--color-crema-fondos);
    background-color: var(--color-verde);
    border-radius: 2rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    transition: 0.8s;
    margin-top: 2rem;
    margin-left: 3rem;
    position: absolute;
    font-weight: bold;
}

.back button:hover {
    background-color: var(--color-violeta-oscuro);
    transition: 0.8s;
}


.container {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background-image: url("@/assets/imgs/FICHA SANDRA/Fondo portada fichas.webp");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
}


.container .info {
    width: 35vw;
    margin-bottom: 20rem;
}

.container .imagen img {

    height: 111vh;

}


.container h1{
    color: var(--color-terracota);
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 0.5rem solid var(--color-terracota);
}

.container .localidad{
    color: var(--color-violeta-claro);
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
}

.container .acercade{
    color: var(--color-violeta-oscuro);
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;

}

@media (max-width: 1100px) {


    .back button {
        font-size: .8rem;
        padding: .5rem 1rem;
    }


    .container {
        height: 50vh;
        background-position: 40% 100%;
        background-size: contain;
    }



    .container .info {
        margin-bottom: 0rem;
        margin-left: 1rem;
    }

    .container h1 {
        font-size: 1.5rem;
    }

    .container .localidad{
        font-size: 0.8rem;
    }

    .container .acercade{
        font-size: 0.5rem;
    }

    .container .imagen img {
        height: 15rem;
        transform: translateX(2rem) translateY(5rem);
    }
}


</style>