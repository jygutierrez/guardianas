<script setup lang="ts">
import footerGeneral from '@/components/footer-general.vue';
import auIntroduction from '@/components/au-introduction.vue';
import auTradicion from '@/components/au-tradicion.vue';
import auProductos from '@/components/au-productos.vue';
</script>

<template>
  <main>
    <auIntroduction/>
    <auTradicion/>
    <auProductos/>
    <footerGeneral/>
  </main>
</template>
