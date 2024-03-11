<script setup>
import Sidebar from "@/components/Sidebar/index.vue";
</script>

<template>
  <div class="bg-gray-200 flex">
    <sidebar />
    <router-view :key="$route.path" class="px-10 py-20" />
  </div>
</template>
