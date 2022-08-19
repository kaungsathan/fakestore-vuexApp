<template>
    <div class="detail container">
        <h1>Product Detail</h1>

        <div class="card mb-3 col-12 p-4 mt-5">
            <div class="row g-4">
                <div class="col-md-4">
                    <img :src="productDetail.image" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-start">
                        <h3 class="card-title mb-4">{{ productDetail.title }}</h3>
                        <h5 class="card-title mb-4">Category - {{ productDetail.category }}</h5>
                        <p class="card-text mb-4">
                            Description - {{ productDetail.description }}
                        </p>

                        <h5 class="card-text mb-4">Rating - {{ productRate }}</h5>
                        <h5 class="card-text mb-4">Price - {{ productDetail.price }} $</h5>

                        <div class="input-group mb-4 w-25">
                            <button class="input-group-text btn btn-dark" id="basic-addon1"
                                @click="sub(productDetail.qty)">-</button>
                            <input type="number" class="form-control text-center" :value="productDetail.qty" readonly>
                            <button class="input-group-text btn btn-dark" id="basic-addon1"
                                @click="add(productDetail.qty)">+</button>
                        </div>

                        <router-link to="/shop"><button class="btn btn-dark" @click="store">Add to Cart</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'DetailView',
    data() {
        return {
            productDetail: Object,
            productRate: 0,
            status: true,
        }
    },

    mounted() {
        this.showDetail();
    },

    methods: {
        showDetail() {
            let id = this.$route.params.id;

            axios.get('https://fakestoreapi.com/products/' + id)
                .then(response => {
                    this.productDetail = response.data;
                    this.productRate = response.data.rating.rate;

                    this.productDetail.qty = 1;
                    this.productDetail.cost = (this.productDetail.price) * (this.productDetail.qty);
                })
        },

        add(qty) {
            qty++;
            this.productDetail.qty = qty;
            this.productDetail.cost = ((this.productDetail.price) * (this.productDetail.qty)).toFixed(2);
        },

        sub(qty) {
            if (this.productDetail.qty > 1) {
                qty--;
                this.productDetail.qty = qty;
                this.productDetail.cost = ((this.productDetail.price) * (this.productDetail.qty)).toFixed(2);
            }
        },

        store() {
            let storage = localStorage.getItem('cart');
            let productArr = [];

            if (storage) {
                productArr = JSON.parse(storage);

                productArr.forEach(element => {
                    if (element.id == this.productDetail.id) {
                        this.status = false;
                        element.qty += this.productDetail.qty;
                        element.cost = ((element.price) * (element.qty)).toFixed(2);
                        return false;
                    }
                });
            }
            if (this.status) {
                productArr.push(this.productDetail);
            }

            localStorage.setItem('cart', JSON.stringify(productArr));
            this.$store.state.cart++;
        }
    },
}
</script>
