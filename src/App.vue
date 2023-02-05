<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  color: #111;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  @media (max-width: 1440px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (max-width: 744px) {
    font-size: 16px;
    line-height: 19px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
  @media (max-width: 1440px) {
    width: auto;
    padding-right: 75px;
    padding-left: 75px;
  }
  @media (max-width: 1280px) {
    padding-right: 43px;
    padding-left: 43px;
    max-width: 1100px;
  }
  @media (max-width: 1024px) {
    padding-right: 59px;
    padding-left: 59px;
  }
  @media (max-width: 834px) {
    padding-right: 9px;
    padding-left: 9px;
    max-width: 700px;
  }
  @media (max-width: 744px) {
    padding-right: 43px;
    padding-left: 43px;
    max-width: 600px;
  }
  @media (max-width: 430px) {
    padding-right: 9px;
    padding-left: 9px;
  }
  @media (max-width: 375px) {
    padding-right: 26px;
    padding-left: 26px;
  }
  @media (max-width: 320px) {
    padding-right: 22px;
    padding-left: 22px;
  }
}
.bold {
  font-weight: 600;
}
</style>
