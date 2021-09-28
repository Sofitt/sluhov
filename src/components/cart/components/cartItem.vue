<template>
  <div class="item"
       @mouseover="showRemove = true" @mouseleave="showRemove = false">
    <p class="item__name">{{ data.name }}</p>
    <div class="item__controls">
      <button type="button" class="item__btn" @click="add"><span class="arrow up"></span></button>
      <span class="item__count">{{ data.count }} шт</span>
      <button :id="'btn'+data.id" type="button" class="item__btn" @click="min"><span class="arrow down"></span>
      </button>
    </div>
    <span class="item__price" v-if="showRemove === false">{{ data.price }} ₽</span>
    <button type="button" v-else class="item__remove" @click="removeItem">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  components: {},
  props: ['data'],
  data: function () {
    return {
      showRemove: false,
      isMin: true,
      btn: '',
    }
  },
  methods: {
    add() {
      this.$store.commit('addCount', this.data.id);
      this.$store.dispatch('setTotal');
      this.btn.disabled = this.data.count === 0;
    },
    min() {
      this.$store.commit('minusCount', this.data.id);
      this.$store.dispatch('setTotal');
      this.btn.disabled = this.data.count === 0;
    },
    removeItem() {
      this.$store.commit('removeItem', this.data.id);
      this.$store.dispatch('setTotal');
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    this.btn = document.getElementById('btn'+this.data.id);
  },
}
</script>

<style lang="scss">
// Item
.item {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;

  padding-bottom: 20px;
  border-bottom: 1px solid rgba(43, 42, 41, 0.1);

  &:first-child {
    padding-bottom: 20px !important;
    border-bottom: 1px solid rgba(43, 42, 41, 0.1) !important;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0);
  }

  &__name {
    display: flex;
    align-items: center;
    text-align: left;
    width: 230px;
    max-width: 230px;
    height: 84px;
    margin-right: 20px;
    color: #2B2A29;

    font-family: Cera Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
  }

  &__controls {
    position: absolute;
    left: 46%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    height: 73px;
    width: 100%;
    max-width: 100px;

    font-family: Cera Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
  }

  &__btn {
    width: 24px;
    height: 24px;

    &:hover {
      .arrow {
        border-color: #00A0E3;
      }
    }
    &:disabled {
      cursor: default;
      border-color: #000000;
      opacity: 0.5;
      &:hover {
        .arrow {
          border-color: #000000;
        }
      }
    }
  }

  &__remove {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    color: #EB5757;

    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
  }

  &__price {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    color: #2B2A29;

    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-transform: uppercase;
  }
}
</style>