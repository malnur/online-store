<template>
  <!-- Hero -->
  <section class="relative block">
    <img
      class="absolute left-0 top-0 z-[1] w-full h-full object-cover"
      :src="`/img/${mainImage}`"
      alt="background"
    />
    <div class="relative z-[2] block pt-3 bg-primary bg-opacity-75">
      <h1 class="py-4 xl:py-12 text-3xl xl:text-5xl text-center tracking-wider uppercase text-white">
        {{ fruit.name }}
      </h1>
    </div>
  </section>

  <!-- Main Content -->
  <main class="min-h-screen container mx-auto">
    <Loading class="mt-4 text-center" :loading="loading" />

    <!-- Fruit Details -->
    <div class="my-8 flex flex-col lg:flex-row justify-center gap-4" v-show="!loading">

      <!-- Images -->
      <div class="basis-1/3 flex flex-col gap-2 justify-center items-center">
        <img
          class="w-64 lg:w-96 h-64 lg:h-96 mb-1 object-cover overflow-clip"
          :src="`/img/${mainImage}`"
          alt="fruit picture"
        />
        <div v-if="hasImages" class="w-full flex justify-center gap-2">
          <img
            class="w-32 h-32 mb-1 object-cover overflow-clip"
            :src="`/img/${image}`"
            alt="fruit picture"
            v-for="image in fruit?.images"
            :key="image"
          />
        </div>
      </div>

      <!-- Details -->
      <div class="basis-1/3 px-4 mb-8 flex flex-col">
        <p class="mb-2 text-xl font-semibold uppercase text-secondary">About {{ fruit.name }}</p>
        <p class="mb-2 text-base font-light text-gray-400" v-if="fruit.description">
          {{ fruit.description }}
        </p>
        <hr class="my-4 h-[2px] bg-secondary" />
        <div class="mb-2 flex items-center gap-1" v-if="isOption">
          <p class="text-xs text-primary">Price per {{ fruit.info.uom }}:</p>
          <span class="text-sm font-bold text-primary">${{ fruit.info.value }}</span>
        </div>
        <div class="flex items-center gap-2" v-if="isOption">
          <p class="text-primary">Selected option:</p>
          <select
            class="px-4 py-2 text-base border border-secondary outline-0"
            v-model="currentOption"
          >
            <option v-for="option in fruit.options" :key="option._id" :value="option.value">
              ({{ option.value }}{{ option.uom }}) - ${{ option.price }}
            </option>
          </select>
        </div>
        <hr class="my-4 h-[2px] bg-secondary" v-if="isOption" />
        <div class="flex justify-between items-center" v-show="!anavailable">
          <p class="text-xl font-bold text-secondary">{{ total > 0 ? '$' + total : '' }}</p>
          <div class="flex gap-2">
            <input
              class="w-16 h-10 pl-2 text-2xl border border-secondary outline-0"
              type="number"
              min="1"
              v-model="count"
              ref="input"
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
                alt="cart"
              />
              <span class="ml-1 uppercase text-base font-bold text-white hidden sm:block">Add to Basket</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Items -->
    <section class="py-8 flex flex-col bg-gray" v-show="!loading">
      <h3 class="mb-8 uppercase text-2xl text-center font-semibold tracking-widest text-primary">
        RELATED PRODUCTS
      </h3>
      <div class="container mx-auto flex justify-center gap-4 flex-wrap xl:flex-nowrap">
        <ItemCardComponent :item="item" v-for="item in relations" :key="item._id" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useCartStore } from '@/stores/cart.js'
import { APIService } from '@/services/APIService.js'
import { TextUtils } from '@/utils/text.js'
import Loading from './LoadingComponent.vue'
import ItemCardComponent from './ItemCardComponent.vue'

const route = useRoute()
const apiService = new APIService()
const storeCart = useCartStore()
const text = new TextUtils()
const mainImage = ref(null)
const currentOption = ref(null)
const input = ref(null)
const loading = ref(true)
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
  input.value.focus()
  loadFruit(getDefaultFruit())
})

watch(
  () => route.params.fruit,
  (newFruit) => {
    loading.value = true
    loadFruit(newFruit)
  }
)

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
      if (raw.uom != 'each') {
        raw.option = parseInt(raw.uom)
      }
      raw.image = raw.images[0]
      delete raw.images
    })
    relations.push(...filtered)

    setTimeout(() => {
      loading.value = false
    }, 300)
  })
}
</script>
