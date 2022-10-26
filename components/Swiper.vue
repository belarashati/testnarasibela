<template>
  
  <div class="wrapper">
  
    <div class="content">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(data,index) in news_list" :key="index">
          <div class="card-wrapper">
            <img :src="data.image" alt="" class="thumbnail"  />
            <a class="narasumber">{{data.source}}</a>
            <a class="subTitle">{{data.title}}</a>
            <a class="date-style">{{data.date}}</a>
          </div>
      
        </swiper-slide>
          <div class="shadow-wrapper shadow-left desktop-view-visible" slot="button-prev"></div>
          <div class="shadow-wrapper shadow-right desktop-view-visible" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>

  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerGroup: 1,
          loop: false,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
             // when window width is <= 499px
            0: {
                slidesPerView: 2.2,
                spaceBetween: 8
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10
            }
          }
        },  
      }
    },

    props: {
    news_list: {
      type: Array,
      default: [],
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/swiper/swiper.scss';
.wrapper{
  margin-bottom: 24px;
  .content{
    position: relative;

    .card-wrapper{
      width: 100%;
      height: fit-content;
      display: block;
    }

        .shadow-wrapper{
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      padding: 0;
      z-index: 2;
      opacity: 1;

    }

    .shadow-left{
        left: 0;
        background: linear-gradient(-272.36deg, #000 2.21%, rgba(241, 241, 241, 0) 98.25%);
      }

      .shadow-right{
        right: 0;
        background: linear-gradient(272.36deg, #000 2.21%, rgba(241, 241, 241, 0) 98.25%);
      }

  .thumbnail{
    height: auto;
    width: 100%;
    left: 128px;
    top: 600px;
    border-radius: 4px;

    @media only screen and (max-width: 1024px) {
    left: 0%;
    top: 0%;
    border-radius: 4px;
  }

  }
  .narasumber{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #FFE900;
  }

  .subTitle{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    display: flex;
    align-items: center;
    color: #FAFAFA;
    margin-top: 5px;
    margin-bottom: 5px;

    @media only screen and (max-width: 1024px) {
      font-size: 14px;
    }

    }

    .date-style{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;          
      display: flex;
      align-items: center;
      color: #BDBDBD;
    }
  }

  .swiper-button-next{
    color: transparent;
    background-image: url("static/narasi-next-white.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 23px;
    width: 13px;
    display: block;
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .swiper-button-prev{
    color: transparent;
    background-image: url("static/narasi-prev-white.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 23px;
    width: 13px;
    display: block;
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .swiper-button-disabled{
    opacity: 0;
  }
}



</style>




  