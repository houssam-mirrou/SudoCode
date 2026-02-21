<script setup lang="ts">
import { ref } from 'vue';

// Mock user statistics
const userStats = ref({
  username: 'Houssam',
  rank: 128,
  score: 1450,
  solvedCount: 34,
  totalSubmissions: 89
});

// Mock submission history
const submissions = ref([
  { id: 1042, date: '2 mins ago', problem: 'Two Sum', language: 'Go', verdict: 'Accepted', time: '4ms', memory: '3.2MB' },
  { id: 1041, date: '15 mins ago', problem: 'Two Sum', language: 'Go', verdict: 'Wrong Answer', time: '3ms', memory: '3.1MB' },
  { id: 1039, date: '1 day ago', problem: 'Median of Two Sorted Arrays', language: 'C', verdict: 'Time Limit Exceeded', time: '2000ms', memory: '1.4MB' },
  { id: 1035, date: '3 days ago', problem: 'Add Two Numbers', language: 'Rust', verdict: 'Accepted', time: '1ms', memory: '2.1MB' },
  { id: 1028, date: '1 week ago', problem: 'Valid Parentheses', language: 'PHP', verdict: 'Runtime Error', time: '-', memory: '-' },
]);

// Helper to style the verdict badges
const getVerdictClass = (verdict: string) => {
  if (verdict === 'Accepted') return 'text-green-400 bg-green-400/10 border border-green-400/20';
  if (verdict === 'Wrong Answer' || verdict === 'Runtime Error') return 'text-red-400 bg-red-400/10 border border-red-400/20';
  if (verdict === 'Time Limit Exceeded') return 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20';
  return 'text-gray-400 bg-gray-400/10 border border-gray-400/20';
};
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
    
    <div class="mb-10">
      <h2 class="text-3xl font-extrabold text-white mb-6 tracking-tight">
        Welcome back, <span class="text-blue-500">{{ userStats.username }}</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Global Rank</p>
          <p class="text-3xl font-bold text-white">#{{ userStats.rank }}</p>
        </div>
        
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Total Score</p>
          <p class="text-3xl font-bold text-blue-400">{{ userStats.score }}</p>
        </div>
        
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Problems Solved</p>
          <p class="text-3xl font-bold text-green-400">{{ userStats.solvedCount }}</p>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Accuracy</p>
          <p class="text-3xl font-bold text-purple-400">
            {{ Math.round((userStats.solvedCount / userStats.totalSubmissions) * 100) }}%
          </p>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold text-white mb-4">Recent Submissions</h3>
      
      <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
        <table class="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr class="bg-gray-800/60 border-b border-gray-800 text-gray-400 text-sm tracking-wider uppercase">
              <th class="p-4 font-semibold w-32">Time</th>
              <th class="p-4 font-semibold">Problem</th>
              <th class="p-4 font-semibold w-24">Language</th>
              <th class="p-4 font-semibold w-48">Verdict</th>
              <th class="p-4 font-semibold w-24">Exec Time</th>
              <th class="p-4 font-semibold w-24">Memory</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-800/50">
            <tr 
              v-for="sub in submissions" 
              :key="sub.id" 
              class="hover:bg-gray-800/40 transition-colors duration-200 group"
            >
              <td class="p-4 text-sm text-gray-500">{{ sub.date }}</td>
              <td class="p-4">
                <router-link to="/problem/1" class="font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                  {{ sub.problem }}
                </router-link>
              </td>
              <td class="p-4 text-sm text-gray-400">{{ sub.language }}</td>
              <td class="p-4">
                <span :class="['px-3 py-1 rounded-md text-xs font-bold tracking-wide', getVerdictClass(sub.verdict)]">
                  {{ sub.verdict }}
                </span>
              </td>
              <td class="p-4 text-sm font-mono text-gray-400">{{ sub.time }}</td>
              <td class="p-4 text-sm font-mono text-gray-400">{{ sub.memory }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </main>
</template>