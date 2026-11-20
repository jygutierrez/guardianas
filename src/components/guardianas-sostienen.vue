<template>
    <div class="bg">
       <div class="content">
            <div class="text-titulo">
                <h2>Ellas sostienen el campo de Bogotá.</h2>
            </div>
            <div class="text-explicacion">
                <p>Ser mujer rural y campesina va más allá del lugar donde se vive: es una relación con las actividades productivas del campo.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.bg {
 background-color: var(--color-violeta-oscuro);
 padding: 10vh 10vw;
}

.content {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.text-titulo {
    color: var(--color-amarillo-pastel);
    font-size: 1.8rem;
    width: 25vw;
}

.text-titulo h2 {
   font-weight: 800;
}

.text-explicacion {
    color: var(--color-crema-fondos);
    font-size: 2rem;
    width: 38vw;
    padding-left: 3rem;
    border-left: 0.5rem solid var(--color-amarillo-pastel);
}

@media (max-width: 1100px) {

    .bg {
        padding: 2vh 2vw;
    }

    .content {
        gap: 1rem;
        justify-content: space-between;
    }

    .text-titulo {
        font-size: .6rem;
        width: 40vw;
        text-align: center;
    }

    .text-explicacion {
        font-size: .8rem;
        padding-left: 1rem;
        width: 60vw;
        border-left: 0.2rem solid var(--color-amarillo-claro);
    }
}

</style>
