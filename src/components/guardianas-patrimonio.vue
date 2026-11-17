<template>
    <div class="container">
        <div class="informacion">
            <p>Un patrimonio que mantienen vivo.</p>
            <h2>¿Qué es?</h2>
            <p>Los <b>saberes y las tradiciones</b> que una comunidad construye, practica y transmite de generación en
                generación, como las recetas, los oficios y los remedios tradicionales, <b>hacen parte de su identidad
                    cultural y constituyen su patrimonio vivo.</b></p>
        </div>

        <div class="imagen">
            <img src="@/assets/imgs/GUARDIANAS/señora sandra uniforme.webp" alt="Señora Sandra en uniforme">
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    padding-top: 4rem;
    padding-bottom: 3.6rem;
    margin-top: 2rem;
}

.informacion {
    width: 40vw;
    margin-left: 10rem;
}

.informacion p:nth-child(1) {
    color: var(--color-verde);
    font-size: 3.8rem;
    text-align: left;
    line-height: 3rem;
}

.informacion h2 {
    color: var(--color-violeta-oscuro);
    font-size: 2.1rem;
    text-align: left;
    font-weight: bold;
    margin-top: 2rem;
}

.informacion :last-child {
    color: var(--color-violeta-oscuro);
    font-size: 1.4rem;
}

b {
    font-weight: bolder;
}

.imagen {
    position: absolute;
    z-index: 1;
    transform: translateX(60rem) translateY(-10rem);
}

@media (max-width: 1100px) {
    .container {
        padding: 1rem 1rem;
    }
    .informacion {
        width: 100vw;
        margin: 0rem;
    }
    .informacion p:nth-child(1) {
        color: var(--color-verde);
        font-size: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
    }

    .informacion h2 {
        color: var(--color-violeta-oscuro);
        font-size: 1.4rem;
        text-align: center;
        font-weight: bold;
        margin-top: 2rem;
    }

    .informacion :last-child {
        color: var(--color-violeta-oscuro);
        font-size: 0.8rem;
        text-align: center;
    }

    .imagen {
        display: none;
        transform: translateX(-1rem) translateY(8rem);
    }

}


</style>