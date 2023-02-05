<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="products__item">
      <div class="products__item-wrap">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  &__item {
    flex: 0 0 25%;
    max-width: 25%;
    width: 100%;
    @media (max-width: 1024px) {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    @media (max-width: 744px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media (max-width: 576px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    &-wrap {
      padding: 15px;
      position: relative;
    }
  }
}
</style>