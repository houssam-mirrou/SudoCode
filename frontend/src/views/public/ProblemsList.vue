<script setup lang="ts">
import { ref } from 'vue';

// Mock data to simulate the algorithms fetched from your Laravel API
const problems = ref([
  { id: 1, title: 'Two Sum', difficulty: 'Easy', status: 'Solved' },
  { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', status: 'Attempted' },
  { id: 3, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', status: 'Todo' },
  { id: 4, title: 'Longest Valid Parentheses', difficulty: 'Hard', status: 'Todo' },
]);

// A simple helper function to color-code the difficulty badges
const getDifficultyClass = (difficulty: string) => {
  if (difficulty === 'Easy') return 'text-green-400 bg-green-400/10 border border-green-400/20';
  if (difficulty === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20';
  return 'text-red-400 bg-red-400/10 border border-red-400/20';
};
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
    <div class="mb-12 text-center sm:text-left">
      <h1 class="text-4xl font-extrabold text-white tracking-tight mb-3">
        Welcome to <span class="text-blue-500">CodeJudge</span>
      </h1>
      <p class="text-lg text-gray-400 max-w-2xl">
        Select an algorithm below to open the code workspace. Test your logic against strict time and memory limits using the isolated Go execution engine.
      </p>
    </div>

    <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
      <table class="w-full text-left border-collapse">
        
        <thead>
          <tr class="bg-gray-800/60 border-b border-gray-800 text-gray-400 text-sm tracking-wider uppercase">
            <th class="p-5 font-semibold w-32">Status</th>
            <th class="p-5 font-semibold">Problem Title</th>
            <th class="p-5 font-semibold w-40">Difficulty</th>
          </tr>
        </thead>
        
        <tbody class="divide-y divide-gray-800/50">
          <tr 
            v-for="problem in problems" 
            :key="problem.id" 
            class="hover:bg-gray-800/40 transition-colors duration-200 cursor-pointer group"
          >
            <td class="p-5 text-sm font-medium">
              <span v-if="problem.status === 'Solved'" class="text-green-500 flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                Solved
              </span>
              <span v-else-if="problem.status === 'Attempted'" class="text-yellow-500 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Attempted
              </span>
              <span v-else class="text-gray-600 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-gray-600 ml-1.5"></span>
                Todo
              </span>
            </td>

            <td class="p-5">
              <router-link :to="`/problem/${problem.id}`" class="text-gray-300 group-hover:text-blue-400 font-medium text-base transition-colors block">
                {{ problem.id }}. {{ problem.title }}
              </router-link>
            </td>

            <td class="p-5">
              <span :class="['px-3 py-1 rounded-md text-xs font-bold tracking-wide', getDifficultyClass(problem.difficulty)]">
                {{ problem.difficulty }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </main>
</template>