<template>
  <header class="sm:container mx-auto">
    <div class="h-11 my-5 flex justify-between">
      <!-- Logo -->
      <RouterLink class="flex gap-2 items-center" to="/">
        <img width="40" src="/logo.png" alt="logo" />
        <span class="text-3xl font-semibold tracking-widest text-primary">Fruit Market</span>
      </RouterLink>

      <div class="flex gap-8 items-center">
        <!-- Search -->
        <form class="flex items-center border border-primary">
          <input
            class="w-72 h-full p-2 text-base outline-0"
            type="text"
            placeholder="Product Search"
          />
          <a class="size-11 flex justify-center items-center bg-primary" href="#">
            <img
              width="20"
              height="20"
              class="filter-white"
              src="../assets/icon/search.svg"
              alt=""
            />
          </a>
        </form>

        <!-- Account -->
        <div class="h-full flex justify-between items-center border border-secondary">
          <div class="h-full px-4 flex items-center bg-secondary">
            <img
              width="28"
              height="28"
              class="filter-white"
              src="../assets/icon/account-circle-fill.svg"
              alt="cart"
            />
          </div>
          <div class="px-4 flex flex-col">
            <span class="text-xs text-secondary">My Account</span>
            <a class="font-bold text-primary underline" href="#">Log In</a>
          </div>
        </div>

        <!-- Cart -->
        <RouterLink class="h-full flex justify-between items-center border border-primary" to="/cart">
          <div class="h-full px-4 flex items-center bg-primary">
            <img
              width="24"
              height="24"
              class="filter-white"
              src="../assets/icon/shopping-cart.svg"
              alt="cart"
            />
          </div>
          <div class="px-6 flex flex-col">
            <span class="text-xs text-secondary">{{ storeCart.count }} items</span>
            <span class="font-bold text-primary">${{ storeCart.total }}</span>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- Category & Icon -->
    <div class="py-2 flex items-center justify-around border-t border-solid border-secondary">
      <div class="basis-3/4 flex justify-between" v-for="(category, index) in categories" :key="index">
        <RouterLink class="flex flex-col items-center" :to="'/list/' + category.id">
          <img
            :width="category.size"
            :height="category.size"
            class="filter-primary"
            :src="'/icon/' + category.image + '.svg'"
            alt=""
          />
          <span class="mt-1 text-sm font-bold text-primary">{{ category.short }}</span>
        </RouterLink>
      </div>

      <!-- Contact -->
      <div class="basis-1/4 flex justify-end gap-1 shrink-0">
        <div class="flex justify-between items-center gap-2">
          <img
            width="24"
            height="24"
            class="filter-primary"
            src="../assets/icon/instagram-line.svg"
            alt=""
          />
          <span class="h-1 w-1 rounded-full bg-secondary" />
          <img
            width="24"
            height="24"
            class="filter-primary"
            src="../assets/icon/facebook-circle-line.svg"
            alt=""
          />
          <span class="h-1 w-1 rounded-full bg-secondary" />
          <img
            width="24"
            height="24"
            class="filter-primary"
            src="../assets/icon/mail-line.svg"
            alt=""
          />
          <span class="h-1 w-1 rounded-full bg-secondary" />
          <span class="text-base text-primary">{{ storeCommon.phoneNumber }}</span>
        </div>
      </div>
    </div>
  </header>

  <!-- TODO Add sticky header to view CART -->
  <!-- TODO Add breadcrumb path -->
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useCommonStore } from '@/stores/common.js'
import { useCartStore } from '@/stores/cart.js'

const storeCommon = useCommonStore()
const storeCart = useCartStore()

const categories = ref([
  { id: 'apples-pears-and-rhubarb', short: 'Apples', size: 24, image: 'apple' },
  { id: 'bananas-and-grapes', short: 'Bananas', size: 28, image: 'banana' },
  { id: 'berriescherries-and-currants', short: 'Berries', size: 24, image: 'grapes' },
  { id: 'citrus', short: 'Citrus', size: 24, image: 'citrus-slice' },
  { id: 'dates-figs-and-nuts', short: 'Dates', size: 24, image: 'olive' },
  { id: 'exotic-fruits', short: 'Exotic', size: 24, image: 'pineapple' },
  { id: 'melon-and-mango', short: 'Melon', size: 24, image: 'watermelon-slice' },
  { id: 'stone-fruits', short: 'Stone Fruits', size: 24, image: 'peach' }
])
</script>
