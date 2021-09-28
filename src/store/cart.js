export default {
    state() {
        return {
            cartList: [],
            itemCount: 0,
            totalPrice: 0,
        }
    },
    mutations: {
        /**
         * Проверяет наличие дублей в корзине товаров и, либо добавляет новый элемент массива, либо прибавляет значение count к существующему.
         * @param state
         * @param data {object} - id, name, count, price
         */
        pushNewItem(state, data) {
            if (state.cartList[0]) {
                let c = state.cartList.filter(item => item.id === data.id);
                if (!c[0]) {
                    state.cartList.push(data);
                } else {
                    state.cartList[state.cartList.indexOf(c[0])].count += data.count;
                }
            } else state.cartList.push(data);
            console.log(state.cartList);

        },
        /**
         * Удаляет товар из списка
         * @param state
         * @param id
         */
        removeItem(state, id) {
            state.cartList = (state.cartList.filter(item => item.id !== id));
        },
        /**
         * Очищает корзину товаров
         * @param state
         */
        clearCartList(state) {
            state.cartList = [];
        },

        addCount(state, id) {
            let c = state.cartList.filter(item=>item.id === id);
            state.cartList[state.cartList.indexOf(c[0])].count++;
        },
        minusCount(state, id) {
            let c = state.cartList.filter(item=>item.id === id);
            state.cartList[state.cartList.indexOf(c[0])].count--;
        },
        /**
         * Считает общее количество товаров в корзине по штучно
         * @param state
         */
        setItemCount(state) {
            let total = 0;
            state.cartList.forEach(item => total += item.count)
            state.itemCount = total;
        },
        /**
         * Рассчитывает общую стоимость корзины
         * @param state
         */
        setTotalPrice(state) {
            let total = 0;
            let curPrice;
            state.cartList.forEach(item => {
                curPrice = item.price;
                curPrice = curPrice.split(' ');
                curPrice = curPrice.join('');
                curPrice = curPrice*item.count;
                total += curPrice;
            })
            state.totalPrice = total;
        }
    },
    getters: {
        getCartList(state) {
            return state.cartList;
        },
        getItemCount(state) {
            return state.itemCount;
        },
        getTotalPrice(state) {
            return state.totalPrice;
        }
    },
    actions: {
        setTotal(ctx) {
            ctx.commit('setTotalPrice');
            ctx.commit('setItemCount');
        }
    }
}