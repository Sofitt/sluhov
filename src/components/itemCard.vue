<template>
  <div :id="data.id" class="itemCard">
    <div class="itemCard__img">
      <img :src="data.image" class="itemCard__pic" alt="Слуховой аппарат">
    </div>
    <p v-if="data.description" class="itemCard__desc">
      {{ data.description }}
    </p>
    <span v-else class="itemCard__desc">Описание товара отсутствует</span>
    <span class="itemCard__isAvailable">{{ available }}</span>
    <div class="itemCard__price">
      <span class="itemCard__current">{{ price }} ₽</span>
<!--      <span class="itemCard__old">{{ oldPrice }}</span>-->
    </div>
    <button class="btn" @click="addToCart">Купить</button>
  </div>
</template>

<script>
import {priceMask} from "@/helpers/priceMask";

export default {
  name: "itemCard",
  components: {},
  props: ['data'],
  data: function () {
    return {
      isAvailable: this.data.in_stock,
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('pushNewItem', {id: this.data.id, name: this.data.name, count: 1, price: this.price})
      this.$store.dispatch('setTotal');
    }
  },
  computed: {
    available() {
      if (this.isAvailable === true) return 'Есть в наличии';
      else return 'Нет в наличии';
    },
    price() {
      return priceMask(this.data.price);
    }
  },
  watch: {},
  mounted() {

  },
}
</script>

<style lang="scss">
@import "../assets/scss/style";

.itemCard {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 661px;
  max-width: 410px;
  margin: 0 40px 60px 0;

  background: white;

  @include transitionAll(0.3s);
  //transition: all 0.3s ease 0s;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    @include transitionAll(0.3s);
    //transition: all 0.3s ease 0s;
    box-shadow: 0 20px 14px -5px rgba(0, 0, 0, 0.15);
  }

  &__img{
    height: 410px;
    width: 410px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  &__pic {
    height: 343px;
    width: 410px;
    object-fit: fill;
  }

  &__desc {
    height: 84px;
    max-height: 100px;
    width: 100%;
    text-align: left;
    overflow-y: auto;
    margin-bottom: 20px;

    text-align: left;
    font-family: Cera Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
  }
  &__isAvailable {
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
  }

&__price {
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}
  &__current {
    text-align: left;
    margin-right: 20px;

    color: #00A0E3;

    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
  }
}
</style>