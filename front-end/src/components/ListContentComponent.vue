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
        <h1 class="text-2xl md:text-4xl font-bold">{{ category?.name }}</h1>
        <hr class="h-[2px] mt-3 mx-auto bg-secondary" />
      </div>
    </div>
  </section>

  <main class="my-4 xl:my-8 container mx-auto flex justify-center xl:justify-between">

    <!-- Categories -->
    <nav class="min-w-36 self-start border border-primary hidden xl:block">
      <p class="px-4 py-3 tracking-wider uppercase font-bold text-white bg-primary">Fresh Fruits</p>
      <a
        class="flex justify-between px-4 py-3 uppercase cursor-pointer"
        href="#"
        v-for="item in categories"
        :key="item._id"
        :class="{ 'bg-highlight': item.active }"
        @click="onCategoryClick(item._id)"
      >
        <span class="font-bold text-primary">{{ item.name }}</span>
        <img
          width="20"
          height="20"
          class="filter-secondary"
          src="../assets/icon/play-fill.svg"
          alt="current item"
          v-if="item.active"
        />
      </a>
    </nav>

    <!-- Fruits -->
    <section class="xl:ml-4 min-h-screen flex flex-col justify-center" v-show="!loading">
      <Loading :loading="loading" />
      <div class="mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-7">
        <ItemCardComponent :item="fruit" v-for="fruit in fruits" :key="fruit._id" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { APIService } from '@/services/APIService.js'
import { TextUtils } from '@/utils/text.js'
import Loading from './LoadingComponent.vue'
import ItemCardComponent from './ItemCardComponent.vue'

const DEFAULT_CATEGORY = 'apples-pears-and-rhubarb'
const route = useRoute()
const apiService = new APIService()
const text = new TextUtils()
const category = ref({})
const categories = reactive([])
const fruits = reactive([])
const loading = ref(true)

const currentRoute = computed(() => route.path)
onMounted(() => {
  loadCategories()
})
watch(category, (current) => {
  loading.value = true
  loadFruits(current._id)
})
watch(
  () => route.params.category,
  (newCategory) => flipActiveCategory(newCategory)
)

const onCategoryClick = (id) => flipActiveCategory(id)

const flipActiveCategory = (newId) => {
  if (category.value._id === newId) {
    return
  }
  category.value.active = false
  const found = categories?.find((item) => item._id === newId)
  found.active = true
  category.value = found
}

const getDefaultCategory = () => {
  const result = text.getUrlLastPart(currentRoute)
  return result === null ? DEFAULT_CATEGORY : result
}

const loadCategories = () => {
  apiService.getCategories().then((data) => {
    const sorted = data.sort((a, b) => a._id.localeCompare(b._id))
    const defaultCategory = getDefaultCategory()
    const found = sorted.find((element) => element._id === defaultCategory)
    found.active = true
    category.value = found
    categories.push(...sorted)
  })
}

const loadFruits = (categoryId) => {
  fruits.splice(0)
  apiService.getFruitsOfCategory(categoryId).then((data) => {
    data.forEach((raw) => {
      if (raw.uom != 'each') {
        raw.option = parseInt(raw.uom)
      }
      raw.image = raw.images[0]
      delete raw.images
      fruits.push(raw)
    })
  })
  setTimeout(() => {
    loading.value = false
  }, 300)
}
</script>
