<template>
    <div class="bg">
        <div class="content">
            <div class="text">
                <h2>Una historia que merece ser contada.</h2>
                <p>La ruralidad ha sido históricamente excluida del relato cultural y patrimonial de Bogotá.</p>
            </div>
        </div>
        <img class="mortino" src="@/assets/imgs/GUARDIANAS/Mortiño web.webp" alt="Mortiño web" >
    </div>
</template>

<style scoped>

.bg {
 background-color: var(--color-violeta-oscuro);
 padding: 3vh 10vw;
}

.text {
  color: var(--color-crema-fondos);
}

.text h2 {
    margin: auto;
    color: var(--color-amarillo-pastel);
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.2rem;
    width: 34vw;
}

.text p {
  width: 30vw;
  font-size: 2.2rem;
}

.content {
  display: flex;
  width: 54vw;
  background-color: var(--color-verde);
  padding: 4rem 7rem;
  border-radius: 4rem;
  margin: auto;
  margin-bottom: 10rem;
}

.mortino{
  position: absolute;
  width:35vw;
  transform: translateX(125%) translateY(-112%);
}

@media (max-width: 1100px) {

  .content {
    margin-bottom: 0rem;
  }

  .bg {
    padding: 2vh 5vw;
  }

  .text h2 {
    font-size: 1.8rem;
    line-height: 2.5rem;
    max-width: 20rem;
  }

  .text p {
    font-size: 1.2rem;
  }

  .content {
    padding: .5rem 2rem;
    border-radius: 2.1rem;
  }

  .mortino {
    transform: translateX(14rem) translateY(-3rem);
    width: 40vw;
    display: none;
  }

}

</style>
