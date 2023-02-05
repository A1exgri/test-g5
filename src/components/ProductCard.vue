<template>
  <div class="product-card">
    <div class="product-card__img">
      <img :src="product.thumbnail" :alt="product.title">
    </div>
    <div class="product-card__body">
      <div>
        <span class="bold">Brand:</span> {{product.brand}}
      </div>
      <div class="product-card__category">
        <span class="bold">Category:</span> {{product.category}}
      </div>
      <div class="product-card__desc">
        <span class="bold">Description:</span> {{product.description}}
      </div>
      <div>
        <span class="bold">In stock:</span> {{ stock }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    stock: 0
  }),
  mounted() {
    this.stock = this.product.stock
    this.stockProduct()
  },
  methods: {
    stockProduct() {
      setInterval(() => {
        if(this.stock > 0) {
          this.stock--
        }
      }, this.randomInteger() * 1000)
    },
    randomInteger(min=1, max=4) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  }
}
</script>

<style lang="scss">
.product-card {
  border: 1px solid #D9D9D9;
  padding: 9px;
  &__img {
    img {
      width: 100%;
      height: 206px;
      object-fit: cover;
      @media (max-width: 1440px) {
        height: 191px;
      }
      @media (max-width: 1280px) {
        height: 176px;
      }
      @media (max-width: 1024px) {
        height: 180px;
      }
      @media (max-width: 834px) {
        height: 161px;
      }
      @media (max-width: 744px) {
        height: 201px;
      }
    }
  }
  &__body {
    margin-top: 9px;
    padding-bottom: 36px;
    @media (max-width: 430px) {
      padding-bottom: 0;
    }
  }
  &__desc, &__category {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  &__desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 40px;
  }
}
</style>