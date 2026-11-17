<template>
    <div class="container">
        <div class="item">
            <img src="@/assets/imgs/GUARDIANAS/icono1guardianas.webp" alt="Protegen la vida">
            <p>Protegen la vida, el agua y los ecosistemas</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/GUARDIANAS/icono2guardianas.webp" alt="Labores productivas y de cuidado">
            <p>Sostienen labores productivas y de cuidado</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/GUARDIANAS/icono3guardianas.webp" alt="Practicas y saberes tradicionales">
            <p>Transmiten prácticas y saberes tradicionales</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/GUARDIANAS/icono4guardianas.webp" alt="Procesos organizativos">
            <p>Impulsan y sostienen procesos organizativos</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 5rem 0rem;
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
    font-size: 1.5rem;
    margin: 0;
}

@media (max-width: 1100px) {
    .container {
        padding: 2rem 0rem;
        display: grid;
        grid-template-columns: 2fr 2fr;
        gap: 1rem;
    }

    .item {
        display: flex;
        margin-left: 1.5rem;
    }

    .item img {
        width: 12vw;
    }

    .item p {
        font-size: .8rem;
        font-weight: bold;
    }
}

</style>