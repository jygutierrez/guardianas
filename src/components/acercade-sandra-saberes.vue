<template>
    <h2>Sus saberes y oficios</h2>
    <div class="descripcion">
        <div class="item">
            <img src="@/assets/imgs/FICHA SANDRA/icono herbología.webp" alt="Protegen la vida">
            <p>Con los conocimientos de mis padres, uso hierbas y plantas para preparaciones medicinales, baños energéticos y curativos.</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/FICHA SANDRA/apicultura.webp" alt="Labores productivas y de cuidado">
            <p>Practico la apicultura, soy líder en mi comunidad y fuí presidenta de la junta de acción comunal de la vereda Arrayanes.</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/FICHA SANDRA/fases de la luna.webp" alt="Practicas y saberes tradicionales">
            <p>Las fases de la luna son mi guía para procedimientos de agricultura y ganadería, y también para temas estéticos como el corte de pelo.</p>
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