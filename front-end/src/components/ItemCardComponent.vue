<template>
  <div class="flex flex-col border-2 border-gray">
    <RouterLink :to="`/detail/${item._id}`">
      <img
        class="w-64 lg:w-96 h-64 lg:h-96 mb-1 object-cover overflow-clip"
        :src="`/img/${item.image}`"
        alt="background"
      />
      <p class="mb-1 text-sm font-bold text-primary">{{ item.name }}</p>
    </RouterLink>
    <p
      class="mb-1 text-lg font-bold uppercase text-green"
      :class="[isAnavailable(item.price) ? 'text-red-dark' : '']"
    >
      {{ isAnavailable(item.price) ? 'Temporarily Anavailable' : 'In stock' }}
    </p>
    <div class="mb-3 flex justify-between">
      <p class="font-bold text-secondary">
        {{ !isAnavailable(item.price) ? item.uom : '&nbsp;' }}
      </p>
      <p class="font-bold text-secondary">
        {{ !isAnavailable(item.price) ? '$' + item.price : '&nbsp;' }}
      </p>
    </div>
    <div class="flex justify-between" :class="{ 'justify-around': isAnavailable(item.price) }">
      <a
        class="px-4 py-2 flex bg-primary"
        href="#"
        v-show="!isAnavailable(item.price)"
        @click="storeCart.addItem(item, 1, item.option)"
      >
        <img
          width="20"
          height="20"
          class="filter-white"
          src="../assets/icon/shopping-cart.svg"
          alt="cart"
        />
        <p class="ml-1 uppercase text-base font-bold text-white">Add</p>
      </a>
      <p class="px-4 py-2 border border-secondary text-center text-base font-bold text-secondary">
        Info
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'

const storeCart = useCartStore()
defineProps(['item'])

const isAnavailable = (value) => {
  return value === null
}
</script>
