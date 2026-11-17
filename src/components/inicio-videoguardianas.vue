<template>
 <div class="video-inicio">
   <video autoplay muted loop playsinline>
     <source src="@/assets/videos/inicio.webm" type="video/webm" poster="@/assets/imgs/EQUIPO/Imagenoveja equipo.webp">
   </video>
   <div class="guardianas-logo">
    <img class="logo" src="@/assets/imgs/FOOTER/GUARDIANAS LOGO FOOTER.webp" alt="logo GUARDIANAS"/>
   </div>
 </div>
</template>
<style scoped>

.video-inicio{
 position: relative;
 height: 100vh;
 overflow: hidden;
}

.video-inicio video{
 position: absolute;
 inset: 0;               
 width: 100%;
 height: 100%;
 object-fit: cover;     
 z-index: -1;
}

.guardianas-logo {
 position: relative;
 z-index: 1;
 margin: 25vh;
}

.guardianas-logo * {
 display: block;
 margin: auto;
}

img.logo {
  width: 35vw;
}

img.nombre{
  margin-top: 2rem;
  max-width: 35vw;
}

@media (max-width: 1100px) {

  .guardianas-logo{
    margin: auto;
    margin-top: 25vh;
  }

  img.logo {
  width: 75vw;
  }


}



</style>
