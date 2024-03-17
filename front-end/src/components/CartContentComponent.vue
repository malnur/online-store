<template>
  <!-- Hero -->
  <section class="bg-primary">
    <h1 class="py-4 xl:py-12 text-3xl xl:text-5xl text-center tracking-widest uppercase text-white">
      Basket
    </h1>
  </section>

  <!-- Main Content -->
  <main class="my-8 container mx-auto flex flex-col gap-4">
    <!-- Warnings -->
    <div
      class="mx-auto p-2 flex items-center gap-2 border-[3px] bg-red border-red-dark"
      v-show="isMinimum"
    >
      <img
        width="42"
        height="42"
        class="inline-block filter-red"
        src="../assets/icon/error-warning-fill.svg"
        alt="warning icon"
      />
      <p class="tracking-wider font-semibold text-red-dark">
        Minimum order for delivery is $30. Please review your order before proceeding.
      </p>
    </div>

    <!-- Product List -->
    <div class="grid grid-cols-6 font-semibold text-primary">
      <span>&nbsp;</span>
      <span class="col-span-2">PRODUCT</span>
      <span class="text-right">PRICE</span>
      <span class="text-right">QUANTITY</span>
      <span class="text-right">SUBTOTAL</span>
    </div>
    <hr class="h-[2px] bg-gray-300" />

    <Loading class="justify-self-center self-center" :loading="loading" />
    <div class="flex flex-col gap-4" v-show="!loading">
      <div
        class="grid grid-cols-6 gap-y-2 items-center text-gray-400"
        v-for="(item, index) in fruits"
        :key="index"
      >
        <!-- Items -->
        <div class="flex justify-center items-center gap-1 xl:gap-4">
          <a class="min-w-6" href="#" @click="onRemoveClick(item.id)">
            <img
              width="24"
              height="24"
              class="filter-red hover:scale-125"
              src="../assets/icon/close-circle-fill.svg"
              alt="remove item"
              title="Delete Item"
            />
          </a>
          <RouterLink :to="`/detail/${item.id}`">
            <img
              class="w-14 h-14 object-cover overflow-clip hidden sm:block hover:scale-110"
              :src="`/img/${item.image}`"
              alt="item small picture"
            />
          </RouterLink>
        </div>
        <div class="col-span-2 flex flex-col gap-1">
          <p class="font-light tracking-widest text-primary">{{ item.name }}</p>
          <div class="px-4 py-1 w-full lg:w-1/3 hidden md:flex flex-col bg-slate-100">
            <p class="font-semibold text-green">IN STOCK</p>
            <div v-show="isWeight(item.uom)">
              <p class="font-bold text-primary">Item weigth:</p>
              <p class="text-xs text-primary">{{ item.uom }}</p>
            </div>
          </div>
        </div>
        <p class="text-base text-right">${{ item.price }}</p>
        <p class="text-base text-right">{{ item.count }}</p>
        <p class="text-base text-right">${{ item.subtotal }}</p>
      </div>
      <hr class="h-[2px] bg-gray-300" v-show="!isMinimum" />

      <!-- Totals -->
      <h3 class="text-2xl xl:text-4xl text-center tracking-wide uppercase text-primary">
        BASKET TOTALS
      </h3>
      <hr class="h-[2px] bg-gray-300" />
      <div class="mx-2 flex justify-between">
        <p class="text-xl font-bold uppercase text-primary">Total</p>
        <p class="text-xl uppercase text-primary">${{ storeCart.total }}</p>
      </div>

      <!-- Checkout -->
      <a
        class="w-64 mx-auto mt-8 py-5 flex justify-center gap-3 rounded-lg bg-primary hover:bg-secondary"
        href="#"
        v-show="!isMinimum"
        @click="onCheckoutClick()"
      >
        <img
          width="32"
          height="32"
          class="inline-block filter-white"
          src="../assets/icon/bank-card-fill.svg"
          alt="bank card"
        />
        <p class="text-2xl xl:text-3xl uppercase text-white">Checkout</p>
      </a>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
import { APIService } from '@/services/APIService.js'
import Loading from './LoadingComponent.vue'

const router = useRouter()
const storeCart = useCartStore()
const apiService = new APIService()
const loading = ref(true)
const fruits = reactive([])
const isMinimum = computed(() => storeCart.total < 30)

onMounted(() => {
  loadFruits()
})

const onRemoveClick = (id) => {
  storeCart.removeItem(id)
  if (storeCart.count == 0) {
    router.push('/')
  } else {
    const found = fruits.find((fruit) => fruit.id === id)
    if (found) {
      fruits.splice(fruits.indexOf(found), 1)
    }
  }
}

const onCheckoutClick = () => {
  storeCart.reset()
  router.push('/')
}

const isWeight = (uom) => uom !== 'each'

const loadFruits = () => {
  fruits.splice(0)
  storeCart.basket.forEach((fruit) => {
    const fruitId = fruit.id
    apiService.getFruit(fruitId).then((raw) => {
      const obj = {}
      obj.id = raw._id
      obj.name = raw.name
      obj.image = raw.images[0]
      let uom = raw.uom
      if (fruit.option) {
        const found = raw.options.find((data) => data.value == fruit.option)
        uom = found.value + found.uom
      }
      obj.uom = uom
      obj.price = fruit.price
      obj.count = fruit.count
      obj.subtotal = Math.round(100 * fruit.price * fruit.count) / 100
      fruits.push(obj)
    })
  })

  if (loading.value) {
    setTimeout(() => {
      loading.value = false
    }, 300)
  }
}
</script>
