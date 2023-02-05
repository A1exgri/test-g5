<template>
  <div ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div
          v-for="(slider, index) in slides"
          :key="index"
          class="swiper-slide"
      >
        <img :src="slider" class="swiper-img">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  props: {
    slides: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
    swiperInstance: null,
    swiperOptions: {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      slideClass: "swiper-slide",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        744: {
          slidesPerView: 1,
        },
        745: {
          slidesPerView: 3,
        },
      }
    },
  }),
  mounted() {
    this.renderSwiper()
  },
  updated() {
    this.renderSwiper()
  },
  methods: {
    renderSwiper() {
      const swiperElement = this.$refs.swiper
      if (this.swiperInstance) {
        this.swiperInstance.destroy()
        this.swiperInstance = null
      }
      this.swiperInstance = new Swiper(swiperElement, this.swiperOptions)
    },
  }
}
</script>

<style lang="scss">
.swiper {
  .swiper-wrapper {
    padding: 16px 0 30px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 294px;
    margin-right: 30px;
    @media (max-width: 1440px) {
      height: 272px;
    }
    @media (max-width: 1280px) {
      height: 250px;
    }
    @media (max-width: 1024px) {
      height: 187px;
    }
    @media (max-width: 1024px) {
      height: 167px;
    }
    @media (max-width: 744px) {
      margin-right: 0;
      height: 208px;
    }
    @media (max-width: 1024px) {
      height: 130px;
    }
    @media (max-width: 375px) {
      height: 143px;
    }
  }

  &-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .swiper-button-next, .swiper-button-prev {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    height: 48px;
    width: 48px;
    @media (max-width: 1024px) {
      height: 32px;
      width: 32px;
    }
    @media (max-width: 430px) {
      height: 23px;
      width: 23px;
    }
    &:after {
      font-size: 30px;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 24px;
      }
      @media (max-width: 430px) {
        font-size: 16px;
      }
    }
  }
}
</style>