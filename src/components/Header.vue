<template>
  <div class="header">
    <div class="container">
      <div class="header__wrap">
        <img class="header__logo" src="../assets/logo.svg" alt="logo">
        <button class="btn" @click="getProducts">Update Products</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getProducts() {
      this.$store.dispatch('products/getProducts')
    }
  }
}
</script>

<style lang="scss">
.header {
  background: #5775A9;
  padding: 8px 8px 9px;
  max-height: 48px;
  @media (max-width: 744px) {
    height: 48px;
    padding: 0;
  }
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    @media (max-width: 744px) {
      display: none;
    }
  }
  .btn {
    border:0;
    background: #fff;
    border-radius: 100px;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000;
    @media (max-width: 744px) {
      display: none;
    }
  }
}
</style>
