<template>
  <div class="modal-backdrop">
    <div class="container">
      <div class="cartList">
        <div class="cartList__header">
          <h2 class="cartList__title">Ваша корзина</h2>
          <button class="cartList__clear" @click="clearCart()">
            Очистить
          </button>
          <button class="cartList__close" @click="closeModal">
            <img src="../../../assets/svg/close.svg" alt="X">
          </button>
        </div>
        <div class="cartList__content">
          <span v-if="!list[0]" class="cartList_empty">Ваша корзина пуста. <br> Пожулуйста добавьте товар</span>
          <cartItem :data="item" :key="item.index" v-for="item of list"/>
        </div>
        <div v-if="list[0]" class="cartList__footer">
          <div class="total">
            <span class="total__count">{{ totalCount }} товаров</span>
            <span class="total__price">{{ totalPrice }} ₽</span>
          </div>
          <button class="btn checkout">Оформить заказ</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {priceMask} from "@/helpers/priceMask";

import cartItem from "@/components/cart/components/cartItem";

export default {
  name: "cartList",
  components: {cartItem},
  data: function () {
    return {}
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCartList');
      this.$store.dispatch('setTotal');
    },
    closeModal() {
      this.$emit('closeModal')
    }
  },
  computed: {
    list() {
      return this.$store.getters.getCartList;
    },
    totalCount() {
      return this.$store.getters.getItemCount;
    },
    totalPrice() {
      return priceMask(this.$store.getters.getTotalPrice);
    }
  },
  watch: {},
  mounted() {

  },
}
</script>

<style lang="scss">
.modal-backdrop {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  //right: 0;

  height: 100vh;
  width: 100%;
  background: rgba(79, 79, 79, 0.5);
}
.cartList {
  z-index: 1000;
  position: absolute;
  //top: -92px;
  right: 0;

  width: 475px;
  padding: 30px 20px;

  background: #ffffff;
  border-radius: 6px;

  // Header
  &__header {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    height: 30px;

    margin-bottom: 60px;
  }

  &__title {
    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }

  &__clear {
    font-family: Cera Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    /* or 14px */
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__close {

  }

  // Items
  &__content {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin-bottom: 60px;
  }

  &_empty {
    font-family: Cera Pro;
    font-size: 20px;
    line-height: 1.5;
  }

  // FOOTER
  &__footer {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
}

.checkout {
  width: 314px !important;
  position: relative !important;
}

.total {
  display: flex;
  flex-flow: column;
  //width: 115px;
  text-align: left;

  &__count {
    font-family: Cera Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    margin-bottom: 8px;
  }

  &__price {
    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-transform: uppercase;

    color: #2B2A29;
  }
}
</style>