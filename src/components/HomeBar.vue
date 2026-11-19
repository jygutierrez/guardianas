<template>
    <div class="navBar">
        <header class="items-list">
            <div class="items-home">
             
             <RouterLink to="/">
                <div class="imagen-home"></div>
                Inicio
            </RouterLink>

            </div>
            <nav class="items-list">
                <RouterLink to="/guardianas">
                    Guardianas
                </RouterLink>
                <RouterLink to="/apiusme">
                    ApiUsme
                </RouterLink>
                <RouterLink to="/equipo#guardianas-portada">
                    Equipo
                </RouterLink>
            </nav>
        </header>
    </div>
</template>

<style scoped>

 .navBar{
  display: block;
  font-size: 2rem;
  background-color: var(--color-violeta-claro);
  padding: 3vh 0vh 3vh 0vh;
 } 

 a {
   color: var(--color-amarillo-claro);
   font-weight: bold;
 }

 a:hover {
   color: var(--color-verde);
 }

 .items-list *{
  display: inline-block;
 }

 .items-list a {
    padding: 0 3rem 0 3rem;
 }

 .items-home *{
  display: inline-block;
 }



 .items-home p{
    padding-left: 0.5rem;
    font-weight: bold;
 }

 .items-home a{
    padding-left: 0.6rem;
    color: var(--color-amarillo-claro)
 }

 .items-home a:hover{
    padding-left: 0.6rem;
    color: var(--color-amarillo)
 }

 .items-home {
   padding: 0vw 20vw 0 10vw;
 }

 .logo-guardianas {
     max-width: 2rem;
 }


 .imagen-home {
    width: 3rem;
    height: 2rem;
    background-image: url("@/assets/imgs/ENCABEZADO/LOGOENCABEZADO2.png");
    background-size: contain;
    background-position: center;
 }

 .items-home:hover .imagen-home{
    background-image: url("@/assets/imgs/ENCABEZADO/LOGO ENCABEZADO INICIO.png");
 }

 .router-link-active {
  color: var(--color-amarillo);
  font-weight: bold;
}

.router-link-exact-active {
    color: var(--color-amarillo);
}


@media (max-width: 1100px) {
    .navBar {
        font-size: 3.5vw;
        padding: 2vw 0vw;
        display: flex;
        justify-content: center;
    }

    .items-home{
        padding: 0vw;
    }

    .items-list a{
        padding: 0rem 0.4rem;
        font-weight: bold;
    }
}


</style>
