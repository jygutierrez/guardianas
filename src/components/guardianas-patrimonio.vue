<template>
    <div class="container">
        <div class="center">
            <div class="informacion">
                <p>Un patrimonio que mantienen vivo.</p>
                <h2>¿Qué es?</h2>
                <p>Los <b>saberes y las tradiciones</b> que una comunidad construye, practica y transmite de generación
                    en
                    generación, como las recetas, los oficios y los remedios tradicionales, <b>hacen parte de su
                        identidad
                        cultural y constituyen su patrimonio vivo.</b></p>
            </div>
            <div class="imagen">
                <img src="@/assets/imgs/GUARDIANAS/señora sandra uniforme.webp" alt="Señora Sandra en uniforme">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    max-height: 50vh;
    pointer-events: none;
}

.center {
    display: flex;
    align-items: center;
}

.informacion {
    width: 30vw;
}

.informacion p:nth-child(1) {
    color: var(--color-verde);
    font-size: 3.8rem;
    font-weight: 700;
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
    z-index: 1;
}

.imagen img {
    height: 60vw;
    transform: translateX(-1%) translateY(22%);
}

@media (max-width: 1100px) {
    .container {
        padding: 1vh 1vw;
        max-height: 20vh;
        margin: 0px;
        margin-top: 0;
    }

    .center {
        align-items: end;
    }

    .informacion {
        width: 50vw;
        margin: 0rem;
        transform: translateY(-95%);
    }

    .informacion p:nth-child(1) {
        color: var(--color-verde);
        font-size: 1rem;
        text-align: center;
        line-height: 1.5rem;
    }

    .informacion h2 {
        color: var(--color-violeta-oscuro);
        font-size: .8rem;
        text-align: center;
        font-weight: bold;
    }

    .informacion :last-child {
        color: var(--color-violeta-oscuro);
        font-size: 0.4rem;
        text-align: center;
    }

    .imagen img{
        height: 50vh;
        transform: translateX(-1%) translateY(22%);
    }

}
</style>