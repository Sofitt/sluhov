<template>
<button type="button" class="cart" @click="showModal">
  <img src="../../assets/svg/cart.svg" alt="Корзина" class="cart__logo">
  <span class="cart__counter">
    {{counter}}
  </span>
</button>
</template>

<script>
export default {
  name: "cart",
  components: {},
  data: function () {
    return {
    }
  },
  methods: {
    showModal() {
      this.$emit('showModal')
    }
  },
  computed: {
    counter() {
      return this.$store.getters.getItemCount;
    }
  },
  watch: {

  },
  mounted() {

  },
}
</script>

<style lang="scss">
.cart {
  position: relative;
  &__logo {

  }
  &__counter {
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: rgba(235, 87, 87, 1);
    color: white;
    //color: red;
    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>