<template>
  <!-- Hero -->
  <section class="relative block">
    <img class="absolute left-0 top-0 z-[1] w-full h-full object-cover" src="/img/261.jpg" alt="" />
    <div class="relative z-[2] block pt-3 bg-primary bg-opacity-75">
      <h1 class="py-12 text-5xl text-center tracking-wider uppercase text-white">
        {{ fruit.name }}
      </h1>
    </div>
  </section>

  <!-- Main Content -->
  <main class="my-8 container mx-auto flex justify-center">
    <!-- Images -->
    <div class="basis-1/3 flex flex-col gap-2">
      <img
        class="w-96 h-96 mb-1 object-cover overflow-clip animate-fade"
        :src="`/img/${mainImage}`"
        alt=""
      />
      <div v-if="hasImages" class="w-full flex gap-2">
        <img
          v-for="image in fruit?.images"
          :key="image"
          class="w-32 h-32 mb-1 object-cover overflow-clip animate-fade"
          :src="`/img/${image}`"
          alt=""
        />
      </div>
    </div>

    <!-- Details -->
    <div class="basis-1/3 px-4 mb-8 flex flex-col">
      <p class="mb-2 text-xl font-semibold uppercase text-secondary">About {{ fruit.name }}</p>
      <p v-if="fruit.description" class="mb-2 text-base font-light text-gray-400">
        {{ fruit.description }}
      </p>
      <hr class="my-4 h-[2px] bg-secondary" />
      <div v-if="isOption" class="mb-2 flex items-center gap-1">
        <p class="text-xs text-primary">Price per {{ fruit.info.uom }}:</p>
        <span class="text-sm font-bold text-primary">£{{ fruit.info.value }}</span>
      </div>
      <div v-if="isOption" class="flex items-center gap-2">
        <p class="text-primary">Selected option:</p>
        <select
          class="px-4 py-2 text-base border border-secondary outline-0"
          v-model="currentOption"
        >
          <option v-for="option in fruit.options" :key="option._id" :value="option.value" selected>
            ({{ option.value }}{{ option.uom }}) - £{{ option.price }}
          </option>
        </select>
      </div>
      <hr v-if="isOption" class="my-4 h-[2px] bg-secondary" />
      <div v-show="!anavailable" class="flex justify-between items-center">
        <p class="text-xl font-bold text-secondary">{{ total > 0 ? '£' + total : '' }}</p>
        <div class="flex gap-2">
          <input
            class="w-16 h-10 pl-2 text-2xl border border-secondary outline-0"
            type="number"
            min="1"
            v-model="count"
          />
          <a
            class="px-4 py-2 flex bg-primary"
            href="#"
            @click="storeCart.addItem(fruit, count, currentOption)"
          >
            <img
              width="20"
              height="20"
              class="filter-white"
              src="../assets/icon/shopping-cart.svg"
              alt=""
            />
            <span class="ml-1 uppercase text-base font-bold text-white">Add to Basket</span>
          </a>
        </div>
      </div>
    </div>
  </main>

  <!-- Related Items -->
  <section class="py-8 flex flex-col bg-gray">
    <h3 class="mb-8 uppercase text-2xl text-center font-semibold tracking-widest text-primary">
      RELATED PRODUCTS
    </h3>
    <div class="container mx-auto flex justify-center gap-4">
      <!-- Cards -->
      <div v-for="item in relations" :key="item._id" class="flex flex-col border-2 border-gray">
        <RouterLink :to="`/detail/${item._id}`">
          <img
            class="w-96 h-96 mb-1 object-cover overflow-clip animate-fade"
            :src="`/img/${item.image}`"
            alt=""
          />
          <p class="mb-1 text-sm font-bold text-primary">{{ item.name }}</p>
        </RouterLink>
        <p class="mb-1 text-lg font-bold uppercase text-green">In stock</p>
        <div class="mb-3 flex justify-between">
          <p class="font-bold text-secondary">{{ item.uom }}</p>
          <p class="font-bold text-secondary">£{{ item.price }}</p>
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
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart.js'
import { APIService } from '@/services/APIService.js'
import { TextUtils } from '@/utils/text.js'

const route = useRoute()
const apiService = new APIService()
const storeCart = useCartStore()
const text = new TextUtils()
const mainImage = ref(null)
const currentOption = ref(null)
const count = ref(1)
const fruit = reactive({})
const relations = reactive([])

const currentRoute = computed(() => route.path)
const isOption = computed(() => fruit.options?.length > 0)
const hasImages = computed(() => fruit.images?.length > 1)
const anavailable = computed(() => fruit.price === null)
const total = computed(() => {
  let price = fruit.price
  if (currentOption.value) {
    price = fruit.options?.find((item) => item.value == currentOption.value).price
  }
  return Math.round(100 * price * count.value) / 100
})

onMounted(() => {
  loadFruit(getDefaultFruit())
})

const getDefaultFruit = () => {
  return text.getUrlLastPart(currentRoute)
}

const loadFruit = (fruitId) => {
  apiService.getFruit(fruitId).then((data) => {
    Object.assign(fruit, data)
    mainImage.value = fruit.images[0]
    if (fruit.options) {
      const uom = fruit.uom
      const found = fruit.options.find((item) => uom.indexOf(item.value) > -1)
      if (found) {
        currentOption.value = found.value
      }
    }
    loadRelations()
  })
}

const loadRelations = () => {
  relations.splice(0)
  apiService.getFruitsOfCategory(fruit.categoryId).then((data) => {
    const filtered = data.filter((item) => {
      return fruit.relations.includes(item._id)
    })
    filtered.forEach((raw) => {
      raw.image = raw.images[0]
      delete raw.images
    })
    relations.push(...filtered)
  })
}
</script>
