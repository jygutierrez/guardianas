<template>
    <div class="container">
        <video width="1000" controls>
            <source src="@/assets/videos/yaneth.webm" type="video/webm">
            Su navegador no soporta videos.
        </video> 

        <div class="grd-buttons">
            <RouterLink to="/apiusme">Conoce más</RouterLink>
        </div>

    </div>

</template>

<style scoped>

.container {
    background-color: var(--color-terracota);
    height: 90vh;
    padding-top: 4rem;
}

.container video {
    display: flex;
    margin: auto;
}

.grd-buttons {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grd-buttons a{
    padding: 0.8rem 1.8rem;
    border-radius: 3rem;
    color: var(--color-violeta-claro);
    background-color: var(--color-amarillo);
    font-weight: bold;
    font-size: 1.8rem;
    transition: 0.8s;
}

.grd-buttons a:hover{
    background-color: var(--color-verde);
    color: var(--color-crema-fondos);
    transition: 0.8s;
}


@media (max-width: 1100px) {

    .container {
        height: auto;
    }

    .container video {
        max-width: 90vw;
    }

    .grd-buttons {
        margin-top: 6rem;
    }

}

</style>