<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const validationErrors = ref({});

const first_name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const auth = useAuthStore();

const handleRegister = async () => {
  validationErrors.value = {};
  if (password.value !== passwordConfirm.value) {
    validationErrors.value = { passwordConfirm: "Passwords don't match!" };
    return;
  }

  const credentials: object = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    password: password.value,
  };
  try {
    await auth.register(credentials);
  } catch (error : any) {
    if (error.response && error.response.status === 422) {
      validationErrors.value = error.response.data.errors;
    } else {
      console.error('An unexpected error occurred:', error);
      alert('Something went wrong. Please try again.');
    }
  }
};
</script>

<template>
  <div
    class="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl font-extrabold text-white tracking-tight">
          Create an account
        </h2>
        <p class="mt-2 text-sm text-gray-400">
          Join <span class="text-blue-500 font-semibold">Sudo</span>Code and
          start solving.
        </p>
      </div>

      <form class="space-y-5" @submit.prevent="handleRegister">
        <div>
          <label
            for="first_name"
            class="block text-sm font-medium text-gray-300 mb-1"
          >
            First Name
          </label>
          <input
            id="first_name"
            v-model="first_name"
            type="text"
            required
            placeholder="John"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          />
          <p v-if="validationErrors.first_name" class="text-red-500 text-xs mt-1">
            {{ validationErrors.first_name[0] }}
          </p>
        </div>
        <div>
          <label
            for="last_name"
            class="block text-sm font-medium text-gray-300 mb-1"
          >
            Last Name
          </label>
          <input
            id="last_name"
            v-model="last_name"
            type="text"
            required
            placeholder="Doe"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          />
          <p v-if="validationErrors.last_name" class="text-red-500 text-xs mt-1">
            {{ validationErrors.last_name[0] }}
          </p>
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-300 mb-1"
          >
            Email address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          />
          <p v-if="validationErrors.email" class="text-red-500 text-xs mt-1">
            {{ validationErrors.email[0] }}
          </p>
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          />
          <p v-if="validationErrors.password" class="text-red-500 text-xs mt-1">
            {{ validationErrors.password[0] }}
          </p>
        </div>

        <div>
          <label
            for="passwordConfirm"
            class="block text-sm font-medium text-gray-300 mb-1"
          >
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            v-model="passwordConfirm"
            type="password"
            required
            placeholder="••••••••"
            class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
          />
          <p v-if="validationErrors.passwordConfirm" class="text-red-500 text-xs mt-1">
            {{ validationErrors.passwordConfirm}}
          </p>
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

      <div
        class="mt-6 text-center text-sm text-gray-400 border-t border-gray-800 pt-6"
      >
        Already have an account?
        <router-link
          to="/login"
          class="font-medium text-blue-500 hover:text-blue-400 transition-colors"
        >
          Log in here
        </router-link>
      </div>
    </div>
  </div>
</template>
