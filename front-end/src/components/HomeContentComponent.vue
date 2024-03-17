<template>
  <!-- Hero -->
  <section class="relative block mb-8">
    <RouterLink to="/list">
      <img
        class="absolute left-0 top-0 z-[1] w-full h-full object-cover"
        src="../assets/img/fruits-background-1.jpg"
        alt="background"
      />
      <div class="container mx-auto text-white text-center">
        <div class="relative z-[2] block w-full lg:w-2/3 xl:w-1/3 px-2 xl:px-8 py-2 sm:py-4 xl:py-10 bg-primary bg-opacity-75">
          <h1 class="text-3xl xl:text-5xl font-semibold tracking-wider">Fruits</h1>
          <hr class="h-[2px] max-w-16 my-6 mx-auto bg-secondary" />
          <p class="text-base text-justify tracking-wide">
            An impressive selection of exotic and seasonal fruit as well as the very best vegetables
            and herbs delivered from the market each day. Prices may vary according to the season.
          </p>
        </div>
      </div>
    </RouterLink>
  </section>
  <!-- About -->
  <section class="container mx-auto text-primary">
    <h2 class="my-4 xl:my-12 text-center text-3xl xl:text-5xl font-semibold tracking-wide">We are Fruit Market</h2>
    <p class="mx-4 xl:mx-12 mb-2 xl:mb-6 text-justify text-lg font-semibold xl:leading-8">
      Fruit Market has been recognised for more than 3 years as Astana’s well-loved food destination
      with culinary delights from all over the world. The food hall preserves the same ethos of
      quality and service as it did in 2010 and is admired today as a gastronomic haven for all
      those who appreciate great food. Fruit Market has always been famous for its fresh products.
    </p>
    <div class="mx-4 xl:mx-12 mb-2 xl:mb-6 flex flex-col md:flex-row gap-4 xl:gap-8 justify-between text-lg text-justify font-light xl:leading-7">
      <p class="flex-1">
        Our online store offers a wide selection of the freshest and most delicious fruits
        available. From juicy strawberries to ripe bananas, we have everything you need to satisfy
        your fruit cravings. Our fruits are sourced from local farms and suppliers to ensure the
        highest quality and freshness.
      </p>
      <p class="flex-1">
        Whether you're looking for a healthy snack or ingredients for your favorite recipes, our
        store has you covered. Shop with us today and experience the joy of fresh, flavorful fruits
        delivered right to your doorstep.
      </p>
    </div>
    <hr class="mx-12 mb-12 h-[2px]" />
    <p class="mb-12 text-center">
      <span class="py-2 px-4 text-lg font-bold">Call us today, {{ storeCommon.phoneNumber }}</span>
    </p>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCommonStore } from '@/stores/common.js'

const storeCommon = useCommonStore()
</script>
