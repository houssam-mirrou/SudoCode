<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useRoute } from 'vue-router';
// Import the Monaco Editor component
import { VueMonacoEditor } from '@guolao/vue-monaco-editor';

const route = useRoute();
const problemId = route.params.id; 

// Mock problem data
const problem = ref({
  title: 'Two Sum',
  difficulty: 'Easy',
  timeLimit: '1.0s',
  memoryLimit: '256MB',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
  exampleInput: 'nums = [2,7,11,15], target = 9',
  exampleOutput: '[0,1]',
});

// Editor state
const selectedLanguage = ref('go');
const code = ref('func twoSum(nums []int, target int) []int {\n    // Write your logic here\n}');

// We use shallowRef for the editor instance to prevent Vue from trying to make the massive Monaco object reactive (which causes lag)
const editorRef = shallowRef();

const handleEditorMount = (editor: any) => {
  editorRef.value = editor;
};

// Map our dropdown values to Monaco's official language IDs and inject default boilerplates
const handleLanguageChange = () => {
  const boilerplates: Record<string, string> = {
    c: '#include <stdio.h>\n\nint main() {\n    // Write your C code here\n    return 0;\n}',
    go: 'package main\n\nimport "fmt"\n\nfunc main() {\n    // Write your Go code here\n}',
    rust: 'fn main() {\n    // Write your Rust code here\n}',
    php: '<?php\n\n// Write your PHP code here\n',
    java: 'class Main {\n    public static void main(String[] args) {\n        // Write your Java code here\n    }\n}'
  };
  
  code.value = boilerplates[selectedLanguage.value] || '// Write your code here';
};

const submitCode = () => {
  console.log('Submitting code in', selectedLanguage.value);
  console.log(code.value);
};
</script>

<template>
  <div class="h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-gray-950 text-gray-200">
    
    <div class="w-full lg:w-1/2 h-1/2 lg:h-full border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col bg-gray-900/30">
      <div class="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
        <h2 class="text-xl font-bold text-white">{{ problem.title }}</h2>
        <span class="px-3 py-1 rounded-md text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20">
          {{ problem.difficulty }}
        </span>
      </div>

      <div class="p-5 overflow-y-auto flex-1 custom-scrollbar">
        <div class="flex gap-4 mb-6 text-sm text-gray-400">
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Time Limit: <span class="text-white font-medium">{{ problem.timeLimit }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            Memory Limit: <span class="text-white font-medium">{{ problem.memoryLimit }}</span>
          </div>
        </div>

        <p class="text-gray-300 leading-relaxed mb-8">{{ problem.description }}</p>

        <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">Example 1</h3>
        <div class="bg-gray-950 border border-gray-800 rounded-lg p-4 mb-6 font-mono text-sm">
          <div class="mb-2"><span class="text-gray-500">Input:</span> <span class="text-blue-300">{{ problem.exampleInput }}</span></div>
          <div><span class="text-gray-500">Output:</span> <span class="text-green-300">{{ problem.exampleOutput }}</span></div>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col bg-gray-950">
      
      <div class="p-3 border-b border-gray-800 bg-gray-900/80 flex justify-between items-center">
        <select 
          v-model="selectedLanguage" 
          @change="handleLanguageChange"
          class="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none transition-colors"
        >
          <option value="c">C</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
        </select>
      </div>

      <div class="flex-1 w-full h-full relative">
        <vue-monaco-editor
          v-model:value="code"
          theme="vs-dark"
          :language="selectedLanguage"
          :options="{
            automaticLayout: true,
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 16 },
            fontFamily: 'monospace'
          }"
          @mount="handleEditorMount"
        />
      </div>

      <div class="p-4 border-t border-gray-800 bg-gray-900/50 flex justify-end gap-3 z-10">
        <button class="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700">
          Run Test
        </button>
        <button 
          @click="submitCode"
          class="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20"
        >
          Submit
        </button>
      </div>

    </div>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #4b5563; }
</style>