<template>
    <h2>Sus saberes y oficios</h2>
    <div class="descripcion">
        <div class="item">
            <img src="@/assets/imgs/FICHA YANETH/icono administración.webp" alt="Administración">
            <p>Soy administradora agropecuaria de profesión</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/FICHA YANETH/icono apicultura.webp" alt="Apicultura">
            <p>Practico la apicultura y promuevo la educación del cuidado de los ecosistemas</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/FICHA YANETH/cultura culinaria.webp" alt="Cultura culinaria">
            <p>Mi especialidad es la producción artesanal de conservas con miel</p>
        </div>
    </div>
</template>

<style scoped>

h2 {
    color: var(--color-violeta-oscuro);
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    margin-top: 1rem;
}

.descripcion {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0rem;
}

.item {
    display: block;
    align-items: center;
    width: 18vw;
    gap: 1rem;
}


.item img {
    display: block;
    margin: 0 auto;
    width: 8vw;
    height: auto;
}


.item p{
    text-align: center;
    padding-top: 2.45rem;
    font-size: 1.23rem;
    font-weight: 500;
    margin: 0;
}

@media (max-width: 1100px) {

    h2{
        font-size: 1.8rem;
    }

    .descripcion {
        display: block;
        width: 90vw;
        margin: auto;
    }

    .item img{
        height: 5rem;
        width: 5rem;
    }


    .item {
        display: flex;
    }

    .item p{
        padding-top: 1rem;
        font-size: 1rem;
        min-width: 68vw;
    }
}


</style>