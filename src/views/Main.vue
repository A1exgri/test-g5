<template>
  <div class="main container">
    <Slider v-if="slides" :slides="slides"/>
    <Products v-if="products" :products="products" />
  </div>
</template>

<script>
import {mapState} from "vuex";
import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default {
  components: { Products, Slider },
  mounted() {
    this.$store.dispatch('slider/getSlides')
    this.checkLocal()
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      slides: state => state.slider.slides
    })
  },
  methods: {
    checkLocal() {
      this.$store.dispatch('products/getLocalProducts')
    }
  }
}
</script>
