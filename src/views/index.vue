<template>
  <div class="mainPage">
    <header class="mainPage__headerColor">
      <div class="container">
        <div class="mainPage__header">
          <img src="../assets/svg/logo.svg" alt="Доктор слухов. Цифровые слуховые аппараты" class="mainPage__logo">
          <cart @showModal="showModal = true"></cart>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="mainPage__content">
        <itemCard :data="item" :key="item.id" v-for="item of data"></itemCard>
      </div>
      <cartList v-show="showModal === true" @closeModal="showModal = false"></cartList>
    </div>

  </div>
</template>

<script>

import cart from "@/components/cart/cart";
import itemCard from "@/components/itemCard";
import cartList from "@/components/cart/components/cartList";

export default {
  name: "index",
  components: {cart, cartList, itemCard},
  data: function () {
    return {
      data: '',
      showModal: false,
    }
  },
  methods: {},
  computed: {},
  watch: {},
  mounted: async function () {
    fetch('https://xn--b1adsenbbojhpy.xn--p1ai/api/product/?cityId=1', {
      method: 'GET'
    }).then(r => r.json()).then(r => this.data = r.results).then(() => console.log(this.data))
  },
}
</script>

<style lang="scss">
.mainPage {

  // Header
  &__header {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    height: 94px;

    &Color {
      z-index: 998;
      background: #00A0E3;
      position: fixed;
      top: 0;
      width: 100%;
    }

  }

  &__logo {
    width: 190px;
    height: 54px;
  }

  // Товары
  &__content {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }
}
</style>