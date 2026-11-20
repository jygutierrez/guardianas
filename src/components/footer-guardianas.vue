<template>
    <div class="bg">
        <img class="bg-imge" src="@/assets/imgs/FOOTER/FOOTER.webp" alt="FOOTER">
        <div class="logo-guardianas">
            <img src="@/assets/imgs/FOOTER/GUARDIANAS LOGO FOOTER.webp" alt="Guardianas"/>
            <p>Guardianas.bta@gmail.com</p>
            <p>MYA design Bogotá D.C.</p>
        </div>
        <div class="conoce">
            <p>Conoce más sobre Guardianas</p>
            <div class="icons">
                <a href="https://www.instagram.com/guardianas.bta/?hl=es" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/imgs/FOOTER/LogoIG.webp" alt="Instagram"/>
                </a>

                <a href="https://youtube.com/@guardianas-y4m" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/imgs/FOOTER/LogoYT.webp" alt="Youtube"/>
                </a>

                <a href="https://www.tiktok.com/@guardianas_bog" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/imgs/FOOTER/LogoTTK.webp" alt="Tiktok"/>    
                </a>

            </div>
        </div>
    </div>
</template>
<style scoped>


.bg{

    height: 58vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 3rem;
    
}

.bg * {
    z-index: 2;
}


.bg-imge {
    position: absolute;
    width: 100%;
    height: 58vh;
    z-index: 1;
}

.logo-guardianas {
    width: 20vw;
}

.logo-guardianas img {
    width: 20vw;
    margin: auto;
}

.logo-guardianas p{
    color: var(--color-crema-fondos);
    font-size: 1.8rem;
    text-align: center;
}

.conoce .icons {
    display: flex;
    justify-content: space-between;
    padding: 0rem 3rem;
}

.conoce p {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--color-crema-fondos);
    margin-bottom: 2rem;
    margin-top: 3rem;
}

.conoce img{
    max-width: 5rem;
}

@media (max-width: 1100px) {

    .bg {
        background-size: cover;
    }

    .logo-guardianas {
        width: 50vw;
    }

    .logo-guardianas img {
        display: flex;
        width: 30vw;
        margin: auto;
    }

    .conoce {
        width: 50vw;
    }

    .conoce p{
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: .5rem;
    }

    .conoce img {
        max-width: 2.5rem;
    }

    .logo-guardianas p{
        font-size: 1rem;
    }

}

</style>
