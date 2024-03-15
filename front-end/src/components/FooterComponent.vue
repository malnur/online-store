<template>
  <footer class="bg-neutral">
    <div
      class="py-8 container mx-auto flex items-center justify-around text-xl text-center font-bold text-primary"
    >
      <div class="flex flex-col">
        <p>Talan Towers</p>
        <p>26 floor</p>
      </div>

      <RouterLink to="/">
        <img width="72" src="/logo.png" alt="logo" />
      </RouterLink>

      <div class="flex flex-col">
        <p>Astana</p>
        <p>16, Dostyk street</p>
      </div>
    </div>
    <hr class="mx-4 mb-2 border-dotted border-primary" />
    <div class="pb-6 flex justify-center gap-2 text-primary">
      <p>&copy; 2024 Fruit Market Ltd</p>
      <p>|</p>
      <a href="">Terms & Conditions</a>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
