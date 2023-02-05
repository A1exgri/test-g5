import axios from "axios";

const state = {
    products: []
}

const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}

const actions = {
    async getProducts({ commit }) {
        let res = axios.get('https://dummyjson.com/products?limit=100')
        commit('SET_PRODUCTS', res.data.products)
        localStorage.setItem('products', JSON.stringify(res.data.products))
    },
    getLocalProducts({ commit }) {
        let products = JSON.parse(localStorage.getItem('products'))
        if (products) {
            commit('SET_PRODUCTS', products)
        }
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}