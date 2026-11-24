<template>
<div class="base">
    <div class="container-info">
        <h2>Una tradición que aún no se reconoce como patrimonio vivo.</h2>
        <div class="container-img mobile">
            <img src="@/assets/imgs/APIUSME/Grupo ApiUsme.webp" alt="Grupo ApiUsme">
         </div>
        <p>En Colombia la apicultura se protege desde lo productivo y lo ambiental, pero no como manifestación de patrimonio vivo.</p>
        <div class="grd-buttons">
            <a href="https://patrimonio.mincultura.gov.co/patrimonio/Paginas/default.aspx" target="_blank">¿Qué es patrimonio vivo?</a>
        </div>
    </div>
    <div class="container-img">
        <img src="@/assets/imgs/APIUSME/Grupo ApiUsme.webp" alt="Grupo ApiUsme">
    </div>
</div>
</template>
<style scoped>

.base {
    display: flex;
    background-color: var(--color-verde);
    color: var(--color-crema-fondos);
    align-items: center;
    justify-content: center;
    height: 50vh;
    gap: 3rem;
}

.container-info {
    width: 40vw;
    text-align: center;
}

.container-info h2 {
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 3.5rem;
}

.container-info p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.grd-buttons a{
    padding: 0.8rem 2.2rem;
    border-radius: 3rem;
    color: var(--color-violeta-claro);
    background-color: var(--color-amarillo);
    font-size: 1.4rem;
    transition: 0.8s;
    font-weight: bold;
}

.grd-buttons a:hover{
    background-color: var(--color-violeta-oscuro);
    color: var(--color-crema-fondos);
    transition: 0.8s;
}

.container-img img{
    width: 25vw;
    border-radius: 3rem;
}

.mobile {
    display: none;
}

@media (max-width: 1100px) {

    .base {
        height: auto;
        display: block;
    }

    .container-info{
        width: 80vw;
        margin: auto;
    }

    .container-info h2 {
        font-size: 1rem;
        padding: 1.2vh 0vw;
        line-height: 1.3rem;
    }

    .container-info p {
        font-size: .8rem;
    }

    .container-img {
        display: none;
    }

    .mobile {
        display: block;
    }

    .mobile img {
        width: 80vw;
        border-radius: 3rem;
    }

    .grd-buttons a{
        padding: 0.4rem 1.1rem;
        border-radius: 3rem;
        font-size: .85rem;
        font-weight: bold;
    }

    .grd-buttons {
        padding-bottom: 4vh;
    }


}

</style>