<template>
 <div class="bg">
   <div class="info">
       <img class="bgt-campo" src="@/assets/imgs/INICIO/Título Bogotá también es campo.webp"/>
       <div class="bgt-information">
           <div class="bgt-rural">
               <p>Bogotá es</p>
               <p>75%</p>
               <p>RURAL</p>
               <div class="img-guide">
                    <img src="@/assets/imgs/INICIO/circulo verde rural.webp" class="info-img" alt="Verde: "/>
                    <p class="guide">Territorio rural</p>
               </div>
               <div class="img-guide">
                    <img src="@/assets/imgs/INICIO/circulo violeta urbano.webp" class="info-img" alt="Verde: "/>
                    <p class="guide">Territorio urbano</p>
               </div>
           </div>
           <div class="bgt-mujeres">
               <p>49%</p>
               <p>de la población rural son</p>
               <p>MUJERES</p>
           </div>
       </div>
   </div>
 </div>
</template>
<style scoped>

.bg{
 position: relative;
 overflow: hidden;
 margin-top: 2rem;
}

.bgt-campo {
 max-width: 58vw;
 transform: translateY(-8rem) translateX(52rem);
}

.info {
 background-image: url("@/assets/imgs/INICIO/MAPA.webp");
 background-size: contain;
 background-position: center center;
 background-repeat: no-repeat;
 background-attachment: scroll;
 width: 100%;
 height: 100vh;
}

.info-img {
    max-width: 2rem;
}

.bgt-rural {
  padding-left: 8rem;
  transform: translateY(-6rem);
}

.bgt-rural p, .bgt-mujeres p {
    font-weight: bold;
}

.bgt-rural > :nth-child(1) {
  color: var(--color-verde);
  font-size: 3rem;
  max-height: 2.7rem;
}

.bgt-rural > :nth-child(2) {
  color: var(--color-violeta-claro);
  font-size: 6rem;
  max-height: 5.5rem;
}

.bgt-rural > :nth-child(3) {
  color: var(--color-verde);
  font-size: 4rem;
  margin-bottom: 1rem;
}

.img-guide {
  display: flex;
  margin-bottom: 1rem;
}

.bgt-rural .guide{
  color: var(--color-violeta-claro);
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
}

.bgt-information {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}

.bgt-mujeres {
  display: flex;
  flex-wrap: wrap;
  gap: 0rem;
  max-width: 29rem;
  font-weight: 500;
  transform: translateY(-2rem);
  margin-right: 8rem;
}

.bgt-mujeres > :nth-child(1){
  color: var(--color-verde);
  flex: 1;
  font-size: 6rem;
  text-align: center;
}

.bgt-mujeres > :nth-child(2){
  color: var(--color-verde);
  flex: 1;
  font-size: 2.5rem;
  line-height: 2rem;
  transform: translateY(1rem);
}

.bgt-mujeres > :nth-child(3){
  flex: 0 0 100%;
  font-size: 4rem;
  color: var(--color-violeta-claro);
  text-align: center;
  transform: translateY(-3rem);
}

@media (max-width: 1100px) {

.bgt-campo {
 max-width: 75vw;
 transform: translateY(-1rem) translateX(5rem);
}

.info {
  height: 50vh;
}

.img-guide {
  display: flex;
  margin-bottom: 0rem;
}

.info-img {
    max-width: 1rem;
    height: 1.5rem;
}

.bgt-rural {
  padding-left: 2rem;
  transform: translateY(3.6rem);
}


.bgt-rural .guide{
  font-size: 0.6rem;
  padding-top: 0rem;
  padding-left: 0.2rem;
}


.bgt-rural > :nth-child(1) {
  font-size: .9rem;
  padding-bottom: 1rem;
}

.bgt-rural > :nth-child(2) {
  font-size: 2rem;
  line-height: 0rem;
  padding-bottom: .8rem;
}

.bgt-rural > :nth-child(3) {
  font-size: 1.55rem;
}


 .bgt-mujeres {
  max-width: 10rem;
  transform: translateY(6rem);
  margin-right: 0rem;
}

.bgt-mujeres > :nth-child(1){
  font-size: 2.5rem;
}

.bgt-mujeres > :nth-child(2){
  font-size: 1.1rem;
  line-height: 1rem;
  transform: translateY(1rem);
}

.bgt-mujeres > :nth-child(3){
  flex: 0 0 100%;
  font-size: 2rem;
  transform: translateY(-0.5rem);
}

}

</style>
