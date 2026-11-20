<template>
    <div class="cita">
        <p>“Las mujeres del páramo son memoria viva del agua y la montaña. Su fuerza, su sabiduría y su organización sostienen la vida en las alturas y en los valles”.</p>
    </div>
</template>

<style scoped>
.cita {
    background-color: var(--color-terracota);
    padding: 4rem 0;
    color: var(--color-crema-fondos);
}

.cita p {
    font-size: 2.4rem;
    line-height: 2.6rem;
    width: 60vw;
    text-align: center;
    font-weight: bold;
    margin: auto;
}

@media (max-width: 1100px) {
    .cita p{
        width: 90vw;
        font-size: .8rem;
        line-height: normal;
    }
}
</style>