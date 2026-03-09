<script setup lang="ts">
import { useAuthStore } from '../../stores/auth'; // Adjust path if needed

const auth = useAuthStore();

const handleLogout = async () => {
  await auth.logout();
};
</script>

<template>
  <nav class="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold tracking-tight">
            <span class="text-blue-500">Sudo</span><span class="text-white">Code.</span>
          </router-link>
        </div>

        <div class="hidden md:block">
          <div class="flex items-baseline space-x-8">
            <router-link to="/problems" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Problems
            </router-link>

            <router-link v-if="auth.token" to="/dashboard" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Dashboard
            </router-link>

            <router-link v-if="auth.token && auth.user?.role === 'admin'" to="/admin/problems" class="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Admin
            </router-link>
          </div>
        </div>

        <div class="hidden md:block">
          <div class="flex items-center space-x-4">
            
            <template v-if="!auth.token">
              <router-link to="/login" class="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Log in
              </router-link>
              <router-link to="/register" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">
                Sign up
              </router-link>
            </template>

            <template v-else>
              <span v-if="auth.user" class="text-sm font-medium text-gray-400 mr-4">
                Hi, {{ auth.user.first_name }}
              </span>
              <button @click="handleLogout" class="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                Logout
              </button>
            </template>

          </div>
        </div>

      </div>
    </div>
  </nav>
</template>