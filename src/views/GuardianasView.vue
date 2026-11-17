<script setup lang="ts">
    import guardianasPortada from '@/components/guardianas-portada.vue';
    import guardianasSostienen from '@/components/guardianas-sostienen.vue';
    import guardianasAcerca from '@/components/guardianas-acerca.vue';
    import guardianasHistoria from '@/components/guardianas-historia.vue';
    import guardianasConocelas from '@/components/guardianas-conocelas.vue';
    import guardianaPatrimonio from '@/components/guardianas-patrimonio.vue';
    import footerGuardianas from '@/components/footer-guardianas.vue';
</script>

<template>
  <main>
    <guardianasPortada/>
    <guardianasSostienen/>
    <guardianasAcerca/>
    <guardianasHistoria/>
    <guardianasConocelas/>
    <guardianaPatrimonio/>
    <footerGuardianas/>
  </main>
</template>
