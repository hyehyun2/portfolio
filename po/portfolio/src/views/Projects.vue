
<template>
  <div id="top">
    <swiper class="swiper" :slides-per-view="1">
      <swiper-slide style="background-image:url(/mainpage1.jpg)" class="slide">
        <div class="header">장점을 특화할 수 있도록 노력합니다.</div>
      </swiper-slide>
      <swiper-slide style="background-image:url(/mainpage2.png)" class="slide">
        <div class="header">단점을 장점으로 바꿀 수 있도록 노력합니다.</div>
      </swiper-slide>
      <swiper-slide style="background-image:url(/mainpage3.png)" class="slide">
        <div class="header">명지전문대 정보통신공학과 김혜현</div>
      </swiper-slide>
      ...
    </swiper>
  </div>

  <div id="portfolio">
    <div class="header">포트폴리오</div>

    <div class="list">
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/memorygame.jpeg)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/iosproject.png)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/smartfarm.png)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/vueproject.png)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/tutor.jpeg)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/plant.png)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/fish.jpeg)"></div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right" style="background-image:url(/and.png)">
      </div>
      <div class="item" @click="movePage('/portfolio1')" data-aos="zoom-in-right"
        style="background-image:url(/bake.jpeg)"></div>



    </div>

  </div>
</template>

<script>


import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import aos from "aos";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };

  },
  mounted() {
    aos.init();
  },
  name: 'Projects  ',
};
</script>

<style lang="less">
#top {
  margin-top: 1.5%;
  height: 90vh;

  .swiper {
    height: 90vh;

    .slide {
      background-position: center center;
      background-size: cover;
      text-align: center;

      .header {
        font-size: 60px;
        font-weight: 900;
        color: rgb(197, 255, 241);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}


#portfolio {
  .header {
    text-align: center;
    font-size: 40px;
  }

  width: 1000px;
  margin: 0 auto;

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .item {

      width: 100%;
      background-position: center center;
      background-size: cover;
      border-radius: 10px;
      //비율 1ㄷ1 
      aspect-ratio: 1/1;
    }
  }
}
</style>