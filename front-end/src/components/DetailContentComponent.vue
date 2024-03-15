<template>
  <!-- Hero -->
  <section class="relative block">
    <img class="absolute left-0 top-0 z-[1] w-full h-full object-cover" src="/img/261.jpg" alt="" />
    <div class="relative z-[2] block pt-3 bg-primary bg-opacity-75">
      <h1 class="py-12 text-5xl text-center tracking-wider uppercase text-white">Apples - Pink Lady</h1>
    </div>
  </section>

  <!-- Main Content -->
  <main class="my-8 container mx-auto flex justify-center">
    <!-- Images -->
    <div class="basis-1/3 flex flex-col gap-2">
      <img class="mb-1 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
      <div class="w-full flex gap-2">
        <img class="w-1/3 mb-1 object-fill overflow-clip animate-fade" src="/img/261.jpg" alt="" />
        <img class="w-1/3 mb-1 object-fill overflow-clip animate-fade" src="/img/261.jpg" alt="" />
      </div>
    </div>

    <!-- Details -->
    <div class="basis-1/3 px-4 mb-8 flex flex-col">
      <p class="mb-2 text-xl font-semibold uppercase text-secondary">
        About Pear – ASIAN (NASHI)
      </p>
      <p class="mb-2 text-base font-light text-gray-400">
        Quinces are related to the apple and pear but are best cooked, when they turn a lovely pink.
      </p>
      <p class="mb-2 text-base font-light text-gray-400">
        Cooking: Quinces are often roasted or poached with spices, such as cinnamon, star anise and
        ginger. For savoury dishes, roasted quince is a good match for fattier meats such as pork,
        goose, or game birds For desserts, quinces are a quirky addition to torts, cakes and
        crumbles.
      </p>
      <hr class="my-4 h-[2px] bg-secondary" />
      <div class="mb-2 flex gap-1">
        <p class="text-xs">Price per kg:</p>
        <span class="font-bold">£17.95</span>
      </div>
      <div class="flex items-center gap-2">
        <p>Selected option:</p>
        <select class="px-4 py-2 text-base border border-secondary outline-0">
          <option value="0.3;(300g)" selected>(300g) - £5.39</option>
          <option value="0.5;(500g)">(500g) - £8.98</option>
          <option value="0.75;(750g)">(750g) - £13.46</option>
        </select>
      </div>
      <hr class="my-4 h-[2px] bg-secondary" />
      <div class="flex justify-between items-center">
        <p class="text-xl font-bold text-secondary">£1.75</p>
        <div class="flex gap-2">
          <input
            class="w-14 h-10 pl-2 text-2xl border border-secondary outline-0"
            type="number"
            value="1"
          />
          <div class="px-4 py-2 flex bg-primary">
            <img
              width="20"
              height="20"
              class="filter-white"
              src="../assets/icon/shopping-cart.svg"
              alt=""
            />
            <p class="ml-1 uppercase text-base font-bold text-white">Add to Basket</p>
          </div>
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
      <div class="flex flex-col">
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

      <div class="flex flex-col">
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

      <div class="flex flex-col">
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

      <div class="flex flex-col">
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
  </section>
</template>
<script setup></script>
