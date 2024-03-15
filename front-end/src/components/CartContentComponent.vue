<template>
  <!-- Hero -->
  <section class="bg-primary">
    <h1 class="py-12 text-5xl text-center tracking-widest uppercase text-white">Basket</h1>
  </section>

  <!-- Main Content -->
  <main class="my-8 container mx-auto flex flex-col gap-4">
    <!-- Warnings -->
    <div class="mx-auto p-2 flex items-center gap-2 border-[3px] bg-red border-red-dark">
      <img
        width="42"
        height="42"
        class="inline-block filter-red"
        src="../assets/icon/error-warning-fill.svg"
        alt=""
      />
      <p class="tracking-wider font-semibold text-red-dark">
        Minimum order for delivery is £30, minimum order value for collection is £20. Please review
        your order before proceeding.
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
    <div class="grid grid-cols-6 gap-y-2 items-center text-gray-400">
      <div class="flex items-center gap-1">
        <img
          width="24"
          height="24"
          class="filter-red"
          src="../assets/icon/close-circle-fill.svg"
          alt=""
        />
        <img class="w-1/2 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
      </div>
      <div class="col-span-2 flex flex-col gap-1">
        <p class="font-light tracking-widest text-primary">Pear - William</p>
        <div class="px-4 py-1 w-1/3 flex flex-col bg-slate-100">
          <p class="font-semibold text-green">IN STOCK</p>
          <p class="font-bold text-primary">Item weigth:</p>
          <p class="text-xs text-primary">0.166 kg</p>
        </div>
      </div>
      <p class="text-base text-right">£0.75</p>
      <p class="text-right">
        <input
          class="w-14 h-10 pl-2 text-2xl border border-primary outline-0"
          type="number"
          value="1"
        />
      </p>
      <p class="text-base text-right">£0.75</p>

      <div class="flex items-center gap-1">
        <img
          width="24"
          height="24"
          class="filter-red"
          src="../assets/icon/close-circle-fill.svg"
          alt=""
        />
        <img class="w-1/2 object-cover overflow-clip animate-fade" src="/img/261.jpg" alt="" />
      </div>
      <div class="col-span-2 flex flex-col gap-1">
        <p class="font-light tracking-widest text-primary">Pear - William</p>
        <div class="px-4 py-1 w-1/3 flex flex-col bg-slate-100">
          <p class="font-semibold text-green">IN STOCK</p>
          <p class="font-bold text-primary">Item weigth:</p>
          <p class="text-xs text-primary">0.166 kg</p>
        </div>
      </div>
      <p class="text-base text-right">£0.75</p>
      <p class="text-right">
        <input
          class="w-14 h-10 pl-2 text-2xl border border-primary outline-0"
          type="number"
          value="1"
        />
      </p>
      <p class="text-base text-right">£0.75</p>
    </div>
    <hr class="h-[2px] bg-gray-300" />

    <!-- Totals -->
    <h3 class="text-4xl text-center tracking-wide uppercase text-primary">BASKET TOTALS</h3>
    <hr class="h-[2px] bg-gray-300" />
    <div class="mx-2 flex justify-between">
      <p class="text-xl font-bold uppercase text-primary">Total</p>
      <p class="text-xl uppercase text-primary">£6.70</p>
    </div>
    <div class="mt-8 py-5 flex justify-center gap-3 bg-primary">
      <img
        width="32"
        height="32"
        class="inline-block filter-white"
        src="../assets/icon/bank-card-fill.svg"
        alt=""
      />
      <p class="text-3xl uppercase text-white">Proceed to Checkout</p>
    </div>
  </main>
</template>

<script setup></script>
