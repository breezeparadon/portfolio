<script setup>
// Components
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";

</script>

<template>
  <div>
    <AppHeader />
    <div>
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped></style>