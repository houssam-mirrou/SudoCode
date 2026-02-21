<script setup lang="ts">
import { ref } from 'vue';

// Reactive variables to store the registration input
const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

// This function will trigger the API call to Laravel
const handleRegister = () => {
  // Basic frontend validation check
  if (password.value !== passwordConfirm.value) {
    alert("Passwords don't match!");
    return;
  }
  
  console.log('Attempting to register:', name.value, email.value);
  // TODO: Implement Laravel Sanctum or JWT registration here
};
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-md w-full bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl">
      
      <div class="text-center mb-8">
        <h2 class="text-3xl font-extrabold text-white tracking-tight">
          Create an account
        </h2>
        <p class="mt-2 text-sm text-gray-400">
          Join <span class="text-blue-500 font-semibold">Sudo</span>Code and start solving.
        </p>
      </div>

      <form class="space-y-5" @submit.prevent="handleRegister">
        
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input 
            id="name" 
            v-model="name" 
            type="text" 
            required 
            placeholder="John Doe"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-1">
            Email address
          </label>
          <input 
            id="email" 
            v-model="email" 
            type="email" 
            required 
            placeholder="you@example.com"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input 
            id="password" 
            v-model="password" 
            type="password" 
            required 
            placeholder="••••••••"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          >
        </div>

        <div>
          <label for="passwordConfirm" class="block text-sm font-medium text-gray-300 mb-1">
            Confirm Password
          </label>
          <input 
            id="passwordConfirm" 
            v-model="passwordConfirm" 
            type="password" 
            required 
            placeholder="••••••••"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          >
        </div>

        <div class="pt-2">
          <button 
            type="submit" 
            class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
          >
            Sign up
          </button>
        </div>
      </form>

      <div class="mt-6 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
        Already have an account? 
        <router-link to="/login" class="font-medium text-blue-500 hover:text-blue-400 transition-colors">
          Log in here
        </router-link>
      </div>

    </div>
  </div>
</template>