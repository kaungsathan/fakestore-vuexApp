<template>
    <div class="cart container">
        <!-- <h1>Cart</h1> -->

        <div v-if="productStr == null">
            <h1>Empty Cart !</h1>
        </div>

        <table class="table table-striped col-12" v-if="productStr != null">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in productArr" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }} $</td>
                    <td>
                        <button class="btn btn-dark btn-sm me-2" @click="sub(index)">-</button>
                        {{ item.qty }}
                        <button class="btn btn-dark btn-sm ms-2" @click="add(index)">+</button>
                    </td>
                    <td>{{ item.cost }} $</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="4">Total</td>
                    <td>{{ totalPrice }} $</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>

export default {
    name: 'CartView',
    data() {
        return {
            productArr: [],
            productStr: '',
            totalPrice: 0,
        }
    },

    mounted() {
        this.showTable();
    },

    methods: {
        showTable() {
            let storage = localStorage.getItem('cart');
            this.productStr = storage;
            this.$store.state.cart = 0;

            if (storage) {
                this.productArr = JSON.parse(storage);

                let total = 0;
                this.productArr.forEach(element => {
                    total += (element.price) * (element.qty);
                });
                this.totalPrice = total.toFixed(2);

                this.$store.state.cart = this.productArr.length;
            }
        },

        add(index) {
            (this.productArr[index].qty)++;

            this.productArr[index].cost = ((this.productArr[index].price) * (this.productArr[index].qty)).toFixed(2);
            // console.log(this.productArr);

            localStorage.setItem('cart', JSON.stringify(this.productArr));
            this.showTable();
        },

        sub(index) {
            (this.productArr[index].qty)--;

            this.productArr[index].cost = ((this.productArr[index].price) * (this.productArr[index].qty)).toFixed(2);
            if (this.productArr[index].qty == 0) {
                this.productArr.splice(index, 1);
                this.$store.state.cart--;
            }

            localStorage.setItem('cart', JSON.stringify(this.productArr));

            if (this.productArr.length == 0) {
                localStorage.clear();
            }

            this.showTable();
        }
    },
}
</script>
