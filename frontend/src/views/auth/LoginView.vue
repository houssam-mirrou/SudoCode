<script setup lang="ts">
import { ref } from 'vue';

// Reactive variables to store the user's input
const email = ref('');
const password = ref('');

// This function will eventually trigger the API call to Laravel
const handleLogin = () => {
  console.log('Attempting login for:', email.value);
  // TODO: Implement Laravel Sanctum or JWT login here
};
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-md w-full bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl">
      
      <div class="text-center mb-8">
        <h2 class="text-3xl font-extrabold text-white tracking-tight">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-gray-400">
          Sign in to your <span class="text-blue-500 font-semibold">sudo</span>code account.
        </p>
      </div>

      <form class="space-y-6" @submit.prevent="handleLogin">
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
            Email address
          </label>
          <input 
            id="email" 
            v-model="email" 
            name="email" 
            type="email" 
            required 
            placeholder="you@example.com"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input 
            id="password" 
            v-model="password" 
            name="password" 
            type="password" 
            required 
            placeholder="••••••••"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          >
        </div>

        <div>
          <button 
            type="submit" 
            class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
          >
            Sign in
          </button>
        </div>
      </form>

      <div class="mt-6 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
        Don't have an account? 
        <router-link to="/register" class="font-medium text-blue-500 hover:text-blue-400 transition-colors">
          Sign up here
        </router-link>
      </div>

    </div>
  </div>
</template>