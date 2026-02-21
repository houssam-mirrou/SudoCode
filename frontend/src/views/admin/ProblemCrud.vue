<script setup lang="ts">
import { ref } from 'vue';

// Reactive state for the new problem
const problem = ref({
  title: '',
  difficulty: 'Easy',
  timeLimit: '1.0', // in seconds
  memoryLimit: '256', // in megabytes
  description: '',
});

// Reactive state for test cases (both public examples and hidden grading tests)
const testCases = ref([
  { id: Date.now(), input: '', output: '', isHidden: false }
]);

// Methods for managing test cases dynamically
const addTestCase = () => {
  testCases.value.push({
    id: Date.now(),
    input: '',
    output: '',
    isHidden: true // Default new test cases to hidden (for grading)
  });
};

const removeTestCase = (index: number) => {
  testCases.value.splice(index, 1);
};

// Method to handle saving to the backend
const saveProblem = () => {
  const payload = {
    ...problem.value,
    testCases: testCases.value
  };
  
  console.log('Saving problem to Laravel API:', payload);
  // TODO: Send Axios POST request to your Laravel backend
  alert('Problem saved! Check the console for payload details.');
};
</script>

<template>
  <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-gray-200">
    
    <div class="flex justify-between items-center mb-8 border-b border-gray-800 pb-5">
      <div>
        <h2 class="text-3xl font-extrabold text-white tracking-tight">Create New Problem</h2>
        <p class="mt-1 text-sm text-gray-400">Add an algorithm, set constraints, and define test cases.</p>
      </div>
      <button 
        @click="saveProblem"
        class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-500/20"
      >
        Save Problem
      </button>
    </div>

    <div class="space-y-8">
      
      <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
        <h3 class="text-lg font-bold text-white mb-4">Basic Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="col-span-1 md:col-span-2">
            <label class="block text-sm font-medium text-gray-300 mb-2">Problem Title</label>
            <input 
              v-model="problem.title" 
              type="text" 
              placeholder="e.g., Two Sum"
              class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
            <select 
              v-model="problem.difficulty"
              class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Time Limit (s)</label>
              <input 
                v-model="problem.timeLimit" 
                type="number" step="0.1"
                class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Memory Limit (MB)</label>
              <input 
                v-model="problem.memoryLimit" 
                type="number"
                class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
            </div>
          </div>

        </div>
      </div>

      <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
        <h3 class="text-lg font-bold text-white mb-4">Problem Description (Markdown)</h3>
        <textarea 
          v-model="problem.description" 
          rows="8"
          placeholder="Write the problem description, constraints, and instructions here..."
          class="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-mono text-sm custom-scrollbar resize-y"
        ></textarea>
      </div>

      <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-white">Test Cases</h3>
          <button 
            @click="addTestCase"
            class="text-sm bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors border border-gray-700 flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            Add Test Case
          </button>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(test, index) in testCases" 
            :key="test.id"
            class="bg-gray-950 border border-gray-800 rounded-lg p-5 relative group"
          >
            <button 
              v-if="testCases.length > 1"
              @click="removeTestCase(index)"
              class="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>

            <div class="flex items-center gap-4 mb-4">
              <span class="text-sm font-bold text-gray-400 uppercase tracking-wider">Test Case #{{ index + 1 }}</span>
              <label class="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <input type="checkbox" v-model="test.isHidden" class="rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500/50">
                Hidden (Grading Only)
              </label>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-gray-500 mb-1">Standard Input (stdin)</label>
                <textarea 
                  v-model="test.input" 
                  rows="3"
                  placeholder="e.g. 2 7 11 15\n9"
                  class="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-mono text-sm resize-none custom-scrollbar"
                ></textarea>
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-500 mb-1">Expected Output (stdout)</label>
                <textarea 
                  v-model="test.output" 
                  rows="3"
                  placeholder="e.g. 0 1"
                  class="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-mono text-sm resize-none custom-scrollbar"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #374151; border-radius: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #4b5563; }
</style>