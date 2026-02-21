<script setup lang="ts">
import Navbar from './components/layouts/Navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 font-sans">
    <Navbar />

    <router-view />
  </div>
</template>