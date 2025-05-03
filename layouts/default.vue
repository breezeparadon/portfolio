<script setup>
// Components
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";

</script>

<template>
  <div class="layout-container">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout-container {
  overflow-x: hidden;
}
</style>