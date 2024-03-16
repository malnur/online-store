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
        <h1 class="text-4xl font-bold">{{ category?.name }}</h1>
        <hr class="h-[2px] mt-3 mx-auto bg-secondary" />
      </div>
    </div>
  </section>

  <main class="my-8 container mx-auto flex justify-between">
    <!-- Categories -->
    <nav class="basis-1/5 self-start border border-primary">
      <p class="px-4 py-3 tracking-wider uppercase font-bold text-white bg-primary">Fresh Fruits</p>
      <a
        v-for="item in categories"
        :key="item._id"
        class="flex justify-between px-4 py-3 uppercase cursor-pointer"
        :class="{ 'bg-highlight': item.active }"
        @click="onCategoryClick(item._id)"
      >
        <span class="font-bold text-primary">{{ item.name }}</span>
        <img
          v-if="item.active"
          width="20"
          height="20"
          class="filter-secondary"
          src="../assets/icon/play-fill.svg"
          alt="current item"
        />
      </a>
    </nav>
    <section class="ml-4 basis-4/5 flex flex-col">
      <div class="mb-8 grid grid-cols-3 gap-7">
        <!-- Item Cards -->
        <div v-for="fruit in fruits" :key="fruit._id" class="flex flex-col border-2 border-gray">
          <RouterLink :to="`/detail/${fruit._id}`">
            <img
              class="w-96 h-96 mb-1 object-cover overflow-clip animate-fade"
              :src="`/img/${fruit.image}`"
              alt=""
            />
            <p class="mb-1 text-sm font-bold text-primary">{{ fruit.name }}</p>
            <p
              class="mb-1 text-lg font-bold uppercase text-green"
              :class="[isAnavailable(fruit.price) ? 'text-red-dark' : '']"
            >
              {{ isAnavailable(fruit.price) ? 'Temporarily Anavailable' : 'In stock' }}
            </p>
            <div class="mb-3 flex justify-between">
              <p class="font-bold text-secondary">
                {{ !isAnavailable(fruit.price) ? fruit.uom : '&nbsp;' }}
              </p>
              <p class="font-bold text-secondary">
                {{ !isAnavailable(fruit.price) ? '£' + fruit.price : '&nbsp;' }}
              </p>
            </div>
          </RouterLink>
          <div
            class="flex justify-between"
            :class="{ 'justify-around': isAnavailable(fruit.price) }"
          >
            <div v-show="!isAnavailable(fruit.price)" class="px-4 py-2 flex bg-primary">
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
    </section>
  </main>

  <!-- TODO Add loading page status. Fetching data takes time -->
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { APIService } from '@/services/APIService.js'
import { TextUtils } from '@/utils/text.js'

const DEFAULT_CATEGORY = 'apples-pears-and-rhubarb'

const route = useRoute()
const apiService = new APIService()
const text = new TextUtils()
const category = ref({})
const categories = reactive([])
const fruits = reactive([])

const currentRoute = computed(() => route.path)

onMounted(() => {
  loadCategories()
})

watch(category, (current) => {
  loadFruits(current._id)
})

const onCategoryClick = (id) => {
  const found = categories?.find((item) => item._id === id)
  if (found && found._id !== category.value._id) {
    category.value.active = false
    found.active = true
    category.value = found
  }
}

const getDefaultCategory = () => {
  const result = text.getUrlLastPart(currentRoute)
  return result === null ? DEFAULT_CATEGORY : result
}

const isAnavailable = (value) => {
  return value === null
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
      raw.image = raw.images[0]
      delete raw.images
      fruits.push(raw)
    })
  })
}
</script>
