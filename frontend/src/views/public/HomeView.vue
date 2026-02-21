<script setup lang="ts">
// Pure UI component for the landing page
</script>

<template>
  <div class="bg-gray-950 text-gray-200 font-sans">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
        Code Execution, <span class="text-blue-500">Unleashed.</span>
      </h1>
      <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
        SudoCode is a high-performance online algorithm testing platform. Write, test, and optimize your logic in a secure, isolated environment.
      </p>
      
      <div class="flex justify-center gap-4">
        <router-link to="/problems" class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-blue-500/30">
          Start Coding
        </router-link>
        <router-link to="/about" class="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all">
          How it Works
        </router-link>
      </div>
    </main>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/50">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-800/50 transition-colors">
          <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Lightning Fast</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Powered by a dedicated Go execution engine and Redis queues to evaluate your submissions in milliseconds.
          </p>
        </div>

        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-800/50 transition-colors">
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 border border-green-500/20">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Secure Isolation</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Every submission runs in strictly locked-down, ephemeral Docker containers with zero network access.
          </p>
        </div>

        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-800/50 transition-colors">
          <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Real-time Analytics</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Track your progress, view detailed memory and time execution metrics, and compare your score on the dashboard.
          </p>
        </div>

      </div>
    </section>
  </div>
</template>