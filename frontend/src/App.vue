<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "./components/layouts/Navbar.vue";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();

onMounted(async () => {
  if (auth.token) {
    await auth.fetchUser();
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 font-sans">
    <Navbar />

    <router-view />
  </div>
</template>
