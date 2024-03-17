<template>
  <header class="sticky top-0 z-10 w-full backdrop-blur bg-white/90">
    <div class="container mx-auto h-11 my-5 flex justify-between">
      <!-- Logo -->
      <RouterLink class="flex gap-2 items-center" to="/">
        <img width="40" src="/logo.png" alt="logo" />
        <span
          class="text-2xl xl:text-3xl font-semibold tracking-widest text-primary hover:text-secondary hidden sm:flex"
          >Fruit Market</span
        >
      </RouterLink>

      <div class="flex gap-2 lg:gap-4 xl:gap-8 items-center">
        <!-- Search -->
        <div class="flex items-center border border-primary">
          <input
            class="w-72 h-full p-2 text-base outline-0 hidden lg:block"
            type="text"
            placeholder="Product Search"
          />
          <div class="size-11 flex justify-center items-center bg-primary">
            <img
              width="20"
              height="20"
              class="filter-white"
              src="../assets/icon/search.svg"
              alt="search icon"
            />
          </div>
        </div>

        <!-- Account -->
        <div class="h-full flex justify-between items-center border border-secondary">
          <div class="size-11 flex justify-center items-center bg-secondary">
            <img
              width="24"
              height="24"
              class="filter-white"
              src="../assets/icon/account-circle-fill.svg"
              alt="cart"
            />
          </div>
          <div class="px-4 hidden xl:flex xl:flex-col">
            <p class="text-xs text-secondary">My Account</p>
            <p class="font-bold text-primary underline">Log In</p>
          </div>
        </div>

        <!-- Cart -->
        <RouterLink
          class="h-full flex justify-between items-center border border-primary has-[#cart-img:hover]:border-secondary"
          to="/cart"
        >
          <div
            id="cart-img"
            class="size-11 flex justify-center items-center bg-primary hover:bg-secondary"
          >
            <img
              width="22"
              height="22"
              class="filter-white"
              src="../assets/icon/shopping-cart.svg"
              alt="cart"
            />
          </div>
          <div class="px-2 md:px-6 flex flex-col">
            <span class="text-xs text-secondary">{{ storeCart.count }} items</span>
            <span class="font-bold text-primary">${{ storeCart.total }}</span>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- Category & Icon -->
    <div
      class="container mx-auto py-2 flex items-center justify-around sm:justify-between xl:justify-around border-t border-solid border-secondary"
    >
      <div
        class="xl:basis-3/4 flex justify-between"
        v-for="(category, index) in categories"
        :key="index"
      >
        <RouterLink class="flex flex-col items-center hover:scale-110" :to="'/list/' + category.id">
          <img
            :width="category.size"
            :height="category.size"
            :class="`${category.css}`"
            :src="'/icon/' + category.image + '.svg'"
            alt="category"
            :title="category.short"
          />
          <span class="mt-1 text-sm font-bold text-primary hidden sm:block">{{
            category.short
          }}</span>
        </RouterLink>
      </div>

      <!-- Contact -->
      <div class="basis-1/4 hidden xl:flex xl:justify-end xl:gap-1 shrink-0">
        <div class="flex justify-between items-center gap-2">
          <img
            width="24"
            height="24"
            class="filter-primary"
            src="../assets/icon/instagram-line.svg"
            alt="instagram"
          />
          <span class="h-1 w-1 rounded-full bg-secondary hidden 2xl:block" />
          <img
            width="24"
            height="24"
            class="filter-primary"
            src="../assets/icon/facebook-circle-line.svg"
            alt="facebook"
          />
          <span class="h-1 w-1 rounded-full bg-secondary hidden 2xl:block" />
          <img
            width="24"
            height="24"
            class="filter-primary"
            src="../assets/icon/mail-line.svg"
            alt="main"
          />
          <span class="h-1 w-1 rounded-full bg-secondary hidden 2xl:block" />
          <span class="text-base text-primary hidden 2xl:block">{{ storeCommon.phoneNumber }}</span>
        </div>
      </div>
    </div>
  </header>

  <!-- TODO Add breadcrumb path -->
  <!-- TODO activate Search Item capability -->
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useCommonStore } from '@/stores/common.js'
import { useCartStore } from '@/stores/cart.js'

const storeCommon = useCommonStore()
const storeCart = useCartStore()

const categories = ref([
  {
    id: 'apples-pears-and-rhubarb',
    short: 'Apples',
    size: 24,
    image: 'apple',
    css: 'filter-green'
  },
  { id: 'bananas-and-grapes', short: 'Bananas', size: 28, image: 'banana', css: 'filter-orange' },
  {
    id: 'berriescherries-and-currants',
    short: 'Berries',
    size: 24,
    image: 'grapes',
    css: 'filter-purple'
  },
  { id: 'citrus', short: 'Citrus', size: 24, image: 'citrus-slice', css: 'filter-orange' },
  { id: 'dates-figs-and-nuts', short: 'Dates', size: 24, image: 'olive', css: 'filter-brown' },
  { id: 'exotic-fruits', short: 'Exotic', size: 24, image: 'pineapple', css: 'filter-orange' },
  {
    id: 'melon-and-mango',
    short: 'Melon',
    size: 24,
    image: 'watermelon-slice',
    css: 'filter-green'
  },
  { id: 'stone-fruits', short: 'Stone Fruits', size: 24, image: 'peach', css: 'filter-bright-red' }
])
</script>
