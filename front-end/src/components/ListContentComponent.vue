<template>
  <!-- Hero -->
  <section class="relative block">
    <img
      class="absolute left-0 top-0 z-[1] w-full h-full object-cover"
      src="../assets/img/background-pattern-waves.jpg"
      alt="background"
    />
    <div class="container py-6 mx-auto flex justify-center text-white text-center">
      <div class="relative z-[2] block px-4 pt-3 bg-primary bg-opacity-75">
        <p class="text-xs uppercase text-secondary">Fresh Fruits</p>
        <h1 class="text-4xl font-bold">Apples, Pears And Rhubarb</h1>
        <hr class="h-[2px] mt-3 mx-auto bg-secondary" />
      </div>
    </div>
  </section>

  <main class="my-8 container mx-auto flex justify-between">
    <!-- Categories -->
    <nav class="basis-1/5 self-start border border-primary">
      <p class="px-4 py-3 tracking-wider uppercase font-bold text-white bg-primary">Fresh Fruits</p>

      <div v-for="category in categories" :key="category._id">
        <div v-if="category.active" class="flex justify-between px-4 py-3 uppercase bg-highlight">
          <p class="font-bold text-primary">{{ category.name }}</p>
          <img
            width="20"
            height="20"
            class="filter-secondary"
            src="../assets/icon/play-fill.svg"
            alt="current item"
          />
        </div>
        <p v-else class="px-4 py-3 uppercase font-bold text-primary">{{ category.name }}</p>
      </div>
    </nav>

    <!-- Main Content -->
    <section class="ml-4 basis-4/5 flex flex-col">
      <!-- Records -->
      <p class="mb-3 text-xs text-center text-primary">Showing 1–12 of 19 results</p>

      <!-- Item Cards -->
      <div class="mb-8 grid grid-cols-3 gap-7">
        <div class="flex flex-col border-2 border-gray">
          <RouterLink to="/detail">
            <img class="mb-1 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
            <p class="mb-1 text-sm font-bold text-primary">Apple – Pink Lady</p>
            <p class="mb-1 text-lg font-bold uppercase text-green">In stock</p>
            <div class="mb-3 flex justify-between">
              <p class="font-bold text-secondary">each</p>
              <p class="font-bold text-secondary">£1.19</p>
            </div>
          </RouterLink>
          <div class="flex justify-between">
            <div class="px-4 py-2 flex bg-primary">
              <img
                width="20"
                height="20"
                class="filter-white"
                src="../assets/icon/shopping-cart.svg"
                alt=""
              />
              <p class="ml-1 uppercase text-base font-bold text-white">Add</p>
            </div>
            <p
              class="px-4 py-2 border border-secondary text-center text-base font-bold text-secondary"
            >
              Info
            </p>
          </div>
        </div>

        <div class="flex flex-col border-2 border-gray">
          <img class="mb-1 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
          <p class="mb-1 text-sm font-bold text-primary">Apple – Pink Lady</p>
          <p class="mb-1 text-lg font-bold uppercase text-green">In stock</p>
          <div class="mb-3 flex justify-between">
            <p class="font-bold text-secondary">each</p>
            <p class="font-bold text-secondary">£1.19</p>
          </div>
          <div class="flex justify-between">
            <div class="px-4 py-2 flex bg-primary">
              <img
                width="20"
                height="20"
                class="filter-white"
                src="../assets/icon/shopping-cart.svg"
                alt=""
              />
              <p class="ml-1 uppercase text-base font-bold text-white">Add</p>
            </div>
            <p
              class="px-4 py-2 border border-secondary text-center text-base font-bold text-secondary"
            >
              Info
            </p>
          </div>
        </div>

        <div class="flex flex-col border-2 border-gray">
          <img class="mb-1 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
          <p class="mb-1 text-sm font-bold text-primary">Apple – Pink Lady</p>
          <p class="mb-1 text-lg font-bold uppercase text-green">In stock</p>
          <div class="mb-3 flex justify-between">
            <p class="font-bold text-secondary">each</p>
            <p class="font-bold text-secondary">£1.19</p>
          </div>
          <div class="flex justify-between">
            <div class="px-4 py-2 flex bg-primary">
              <img
                width="20"
                height="20"
                class="filter-white"
                src="../assets/icon/shopping-cart.svg"
                alt=""
              />
              <p class="ml-1 uppercase text-base font-bold text-white">Add</p>
            </div>
            <p
              class="px-4 py-2 border border-secondary text-center text-base font-bold text-secondary"
            >
              Info
            </p>
          </div>
        </div>

        <div class="flex flex-col border-2 border-gray">
          <img class="mb-1 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
          <p class="mb-1 text-sm font-bold text-primary">Apple – Pink Lady</p>
          <p class="mb-1 text-lg font-bold uppercase text-green">In stock</p>
          <div class="mb-3 flex justify-between">
            <p class="font-bold text-secondary">each</p>
            <p class="font-bold text-secondary">£1.19</p>
          </div>
          <div class="flex justify-between">
            <div class="px-4 py-2 flex bg-primary">
              <img
                width="20"
                height="20"
                class="filter-white"
                src="../assets/icon/shopping-cart.svg"
                alt=""
              />
              <p class="ml-1 uppercase text-base font-bold text-white">Add</p>
            </div>
            <p
              class="px-4 py-2 border border-secondary text-center text-base font-bold text-secondary"
            >
              Info
            </p>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div
        class="relative mt-3 text-center after:absolute after:-z-[1] after:left-0 after:top-1/2 after:w-full after:h-[1px] after:bg-secondary"
      >
        <button class="py-2 w-32 text-base uppercase text-white border bg-secondary">
          Load More
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { APIService } from '@/services/APIService.js'
import { TextUtils } from '@/utils/text.js'

const DEFAULT_CATEGORY = 'apples-pears-and-rhubarb'

const route = useRoute()
const currentRoute = computed(() => route.path)
const apiService = new APIService()
const text = new TextUtils()
const categories = ref([])

onMounted(() => {
  loadCategories()
})

const loadCategories = () => {
  apiService.getAllCategory().then((data) => {
    const sorted = data.sort((a, b) => a._id.localeCompare(b._id))
    const defaultCategory = getDefaultCategory()
    const found = sorted.find((element) => element._id === defaultCategory)
    found.active = true
    categories.value.push(...sorted)
  })
}

const getDefaultCategory = () => {
  const result = text.getUrlLastPart(currentRoute)
  return result === null ? DEFAULT_CATEGORY : result
}
</script>
