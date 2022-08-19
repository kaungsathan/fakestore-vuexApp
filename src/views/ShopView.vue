<template>
    <div class="shop container">
        <h1>All Product</h1>

        <div class="text-end m-5">
            <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Categories
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <button class="dropdown-item" type="button" @click="showItem">All</button>
                    </li>
                    <li v-for="(item, index) in categories" :key="index">
                        <button class="dropdown-item" type="button" @click="categoryName(item)">{{ item }}</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card-group">
            <div class="row g-5">
                <div class="card col-lg-3 col-md-4 col-sm-6 col-12 pt-4" v-for="(item, index) in allProduct" :key="index">
                    <img :src="item.image" class="card-img-top">
                    <div class="card-body text-start">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">
                            {{ item.description }}
                        </p>
                        <p>Price - {{ item.price }} $</p>
                    </div>
                    <div class="card-footer bg-white">
                        <router-link :to="{ name: 'detail', params: { id: item.id } }">
                            <button class="btn btn-dark">View</button>
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
    name: 'ShopView',
    data() {
        return {
            allProduct: Array,
            categories: Array,
        }
    },

    mounted() {
        this.showItem();
        this.showCategories();
    },

    methods: {
        showItem() {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    // console.log(response.data);
                    this.allProduct = response.data;
                })
        },

        showCategories() {
            axios.get('https://fakestoreapi.com/products/categories')
                .then(response => {
                    // console.log(response.data);
                    this.categories = response.data;
                })
        },

        categoryName(name) {
            let categoryName = name;
            axios.get('https://fakestoreapi.com/products/category/' + categoryName)
                .then(response => {
                    // console.log(response.data);
                    this.allProduct = response.data;
                })
        }
    },
}
</script>
