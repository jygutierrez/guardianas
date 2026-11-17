<template>
    <div class="base">
        <img class="logoSinNombre" src="@/assets/imgs/EQUIPO/Logoguardianasnombre.webp"
            alt="Logo guardianas sin nombre">
        <div class="recorrido">
            <p>Un recorrido por las mujeres campesinas que conservan las prácticas de nuestro territorio, contado por
                ellas mismas</p>
        </div>
        <div class="iniciativa">
            <div class="img">
            </div>
            <div class="text">
                <h2>Una iniciativa que busca acercar la ciudad al campo</h2>
                <p>Bogotá vive de espaldas a su territorio rural: conocemos poco de las comunidades que lo habitan y de
                    los saberes que mantienen vivas sus tradiciones. Este proyecto nace de esa distancia y de una
                    pregunta: ¿Cómo acercar el campo a la ciudad de la mano de las mujeres campesinas?</p>
            </div>
        </div>
        <div class="hack2">
            <div class="content">
                <img class="ft-horizontal" src="@/assets/imgs/EQUIPO/fOTO HORIZONTAL.webp" alt="Foto horizontal">
                <p>Con este proyecto queremos mostrar que Bogotá es mucho más que edificios, también es un territorio lleno de naturaleza, historias y patrimonio vivo campesino. Por eso, ponemos en el centro a las mujeres campesinas y apicultoras de ApiUsme como nuestras aliadas, reconociendo su papel como <b>guardianas</b> de conocimientos, memorias y patrimonio cultural vivo.</p>
            </div>
            <div class="content">
                <img class="ft-oveja" src="@/assets/imgs/EQUIPO/Imagenoveja equipo.webp" alt="Foto oveja">
                <p>A través del codiseño, construimos junto a las mujeres campesinas una narrativa que integra sus
                    experiencias, saberes y aportes con nuestro proceso de investigación y diseño.</p>
            </div>
        </div>
    </div>

</template>

<style scoped>

b {
    font-weight: bold;
}

.base {
    background-color: var(--color-terracota);
}

.logoSinNombre {
    display: flex;
    margin: auto;
    width: 40vw;
    padding: 4rem 0rem;
}

.recorrido {
    background-color: var(--color-amarillo);
    padding: 4rem 0;
    color: var(--color-crema-fondos);
}

.recorrido p {
    font-size: 2.4rem;
    line-height: 2.2rem;
    width: 50vw;
    text-align: center;
    font-weight: bold;
    margin: auto;
}

.iniciativa {
    display: flex;
    width: 70vw;
    margin: auto;
    padding: 4rem 0rem;
    gap: 3rem;
    color: var(--color-crema-fondos);
}

.iniciativa .img{

    height: 25rem;
    width: 125rem;
    background-image: url("@/assets/imgs/EQUIPO/Nosotras.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 3rem;
    margin-bottom: 24rem;
    
}

.iniciativa .text h2 {
    font-weight: bold;
    font-size: 3.33rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
}

.iniciativa .text p {
    font-size: 1.4rem;
}

.hack2 {
    background-color: var(--color-crema-fondos);
}

.ft-horizontal{
    display: flex;
    width: 80vw;
    margin: auto;
    border-radius: 4rem;
    transform: translateY(-15vw);
}

.ft-oveja {
    display: flex;
    width: 80vw;
    margin: auto;
    border-radius: 4rem;
    transform: translateY(-15vw);
}

.hack2 p {
    color: var(--color-violeta-oscuro);
    font-size: 2rem;
    text-align: center;
    width: 75vw;
    padding-top: 4rem;
    padding-bottom: 3rem;
    margin: auto;
    transform: translateY(-15vw);
}

.hack2 .content:nth-child(2) p {
    width: 60vw;
}

@media (max-width: 1100px) {
    .logoSinNombre {
        width: 70vw;
        padding: 2rem 0rem;
    }

    .recorrido {
        padding: 2rem 0;
    }

    .recorrido p {
        width: 70vw;
        font-size: 1.2rem;
        line-height: 1.2rem;
    }

    .iniciativa {
        gap: 0.3rem;
        padding: 1rem 0rem;
        width: 90vw;
    }

    .iniciativa .img {
        height: 15rem;
        border-radius: 1rem;
        margin-bottom: 12rem;
    }

    .iniciativa .text h2 {
        font-size: 1.2rem;
        line-height: normal;
    }

    .iniciativa .text p {
        font-size: .8rem;
        line-height: normal;
    }

    .ft-horizontal, .ft-oveja {
        border-radius: 1rem;
    }

    .hack2 p{
        font-size: 1rem;
        text-align: justify;
        width: 80vw;
    }
}

</style>