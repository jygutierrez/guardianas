<template>
    <div class="bg">
        <div class="content">
            <div class="text">
                <p>Reconocerlas es valorar el patrimonio cultural campesino que existe en Bogotá.</p>
            </div>
            <RouterLink to="/guardianas">
                <div class="img-box"></div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

.bg {
 background-color: var(--color-terracota);
 padding: 3vh 10vw;
}

.text {
  color: var(--color-crema-fondos);
  font-size: 2.8rem;
  margin: auto;
}

.text p {
  text-align: center;
  font-weight: bold;
}

.content {
  display: flex;
  background-color: var(--color-violeta-oscuro);
  padding: 1rem 2rem;
  border-radius: 2rem;
}
.img-box {
  width: 23vw;
  height: 23vh;
  background-image: url('@/assets/imgs/INICIO/Icono1.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.8s;
}
.img-box:hover {
  background-image: url('@/assets/imgs/INICIO/icono1.1.webp');
  transition: 0.8s;
}

@media (max-width: 1100px) {

  .content {
    padding: 1rem;
  }

    .text {
      font-size: .9rem;
    }

    .img-box {
      max-width: 15vw;
      max-height: 18vw;
    }

}

</style>
