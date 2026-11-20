<template>
    <div class="comunidad">
        <div class="comd-info">
            <p>Cuidar de las abejas es cuidar del ecosistema</p>
            <p>ApiUsme es una <b>organización apícola</b> rural de la localidad de Usme, conformada por 11 personas, en
                su mayoría <b>mujeres</b>.</p>
        </div>
        <div class="img-abeja">
            <img src="@/assets/imgs/APIUSME/TITULO APIUSME.webp" alt="TITULO">
            <img src="@/assets/imgs/APIUSME/abeja ilustración.webp" alt="abeja">
            <img src="@/assets/imgs/APIUSME/Mano ilustración.webp" alt="mano">
        </div>
        <div class="grd-buttons">
            <a href="#productos">Conoce sus productos</a>
        </div>
    </div>

    <img class="flor-flr florA" src="@/assets/imgs/APIUSME/Flor Frailejóon.webp" alt="Flor Frailejón">
    <img class="flor-flr florB" src="@/assets/imgs/APIUSME/Flor Frailejóon.webp" alt="Flor Frailejón">
    <img class="flor-flr florC" src="@/assets/imgs/APIUSME/Flor Frailejóon.webp" alt="Flor Frailejón">
    <img class="flor-flr florD" src="@/assets/imgs/APIUSME/Flor Frailejóon.webp" alt="Flor Frailejón">

    <div class="nota">
        <p>“Somos pequeños individualmente, pero juntos, somos grandes”.</p>
        <p>- Sandra Peñalosa, miembro y representante legal de ApiUsme.</p>
    </div>

    <div class="descripcion">
        <div class="item">
            <img src="@/assets/imgs/APIUSME/ICONO API1.webp" alt="Protegen la vida">
            <p>Restauración con polinización</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/APIUSME/ICONO API2.webp" alt="Labores productivas y de cuidado">
            <p>Ubicados en nueve granjas apícolas en zonas de reserva ambiental</p>
        </div>
        <div class="item">
            <img src="@/assets/imgs/APIUSME/ICONO API3.webp" alt="Practicas y saberes tradicionales">
            <p>Prácticas conscientes y libres de agrotóxicos</p>
        </div>
    </div>
</template>
<style scoped>
.img-abeja img:nth-child(1) {
    transform: translateX(5rem) translateY(-55rem);
    z-index: -1;
}

.img-abeja img:nth-child(2) {
    position: fixed;
    bottom: 20rem;
    right: 40rem;
    z-index: -1;
}

.img-abeja img:nth-child(3) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
}

.comunidad {
    margin-bottom: 4rem;
    height: 50vh;
}

.comunidad:nth-child(3){
    justify-content: left;
}

.comd-info {
    color: var(--color-violeta-oscuro);
    width: 35vw;
    margin-top: 18rem;
    margin-left: 10rem;
}

.comd-info p:nth-child(1) {
    font-size: 2.5rem;
    font-weight: bold;
}

.comd-info p:nth-child(2) {
    margin-top: 2rem;
    font-size: 1.8rem;
}

.comd-info b {
    font-weight: bold;
}

.img-abeja img {
    position: absolute;
}

.flor-flr {
    position: absolute;
}

.florA {
    transform: translateX(-5%) translateY(-20%) rotate(20deg);
    width: 30rem;
}

.florB {
    transform: translateX(65%) translateY(80%) rotate(-44deg);
    width: 24rem;
}

.florC {
    transform: translateX(560%) translateY(-30%) rotate(35deg);
    width: 20rem;
}

.florD {
    transform: translateX(400%) translateY(70%) rotate(35deg);
    width: 24rem;
}

.nota {
    margin-top: 4rem;
    background-color: var(--color-amarillo);
    color: var(--color-crema-fondos);
    text-align: center;
    padding: 4rem 25vw;
}

.nota p:nth-child(1) {
    font-size: 3rem;
    font-weight: bold;
}

.nota p:nth-child(2) {
    font-size: 1.5rem;
    font-style: italic;
    padding: 0rem 12vw;
}

.descripcion {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-top: 5rem;
    padding: 5rem 0rem;
    background-color: var(--color-crema-fondos);
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


.item p {
    text-align: center;
    font-size: 1.5rem;
    padding-top: 2vh;
    margin: 0;
}

.grd-buttons {
    margin-left: 7vw;
    margin-top: 3rem;
}

.grd-buttons a {
    padding: 0.8rem 2.2rem;
    border-radius: 3rem;
    color: var(--color-violeta-claro);
    background-color: var(--color-amarillo);
    font-size: 1.4rem;
    transition: 0.8s;
    font-weight: bold;
}

.grd-buttons a:hover {
    background-color: var(--color-verde);
    color: var(--color-crema-fondos);
    transition: 0.8s;
}


@media (max-width: 1100px) {

    .grd-buttons{
        width: 20rem;
        margin: auto;
        margin-top: 2rem;
    }

    .img-abeja img:nth-child(1) {
        width: 18rem;
        position: absolute;
        transform: translateX(0rem) translateY(-32rem);
    }

    .img-abeja img:nth-child(2) {
        display: none;
        z-index: -1;
    }

    .img-abeja img:nth-child(3) {
        display: none;
    }

    .comd-info {
        width: 100vw;
        margin-top: 10rem;
        margin-left: 0;
        text-align: center;
    }

    .comd-info p:nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
    }

    .comd-info p:nth-child(2) {
        margin-top: 2rem;
        font-size: 1.6rem;
    }

    .flor-flr {
        display: none;
    }


    .nota {
        padding: 2rem;
    }

    .nota p:nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
    }   

    .nota p:nth-child(2) {
        font-size: 1rem;
        font-style: italic;
        padding: 0rem 12vw;
    }

    .descripcion{
        justify-content: space-around;
        gap: 0.2rem;
    }

    .item img {
        width: 18vw;
    }

    .item p {
        font-size: 1rem;
    }
}
</style>