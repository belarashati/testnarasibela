<template>
  
  <div class="wrapper">
  
    <div class="content desktop-view-visible">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(data,index) in news_list" :key="index">
          <div>
            <img :src="data.image" alt="" class="thumbnail"  />
            <a class="narasumber">{{data.source}}</a>
            <a class="subTitle">{{data.title}}</a>
            <a class="date-style">{{data.date}}</a>
          </div>
      
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    
      </swiper>
    </div>

    <div class="content mobile-view-visible">
      <swiper class="swiper" :options="swiperOptionMobile">
        <swiper-slide v-for="(data,index) in news_list" :key="index">
          <div>
            <img :src="data.image" alt="" class="thumbnail"  />
            <a class="narasumber">{{data.source}}</a>
            <a class="subTitle">{{data.title}}</a>
            <a class="date-style">{{data.date}}</a>
          </div>
      
        </swiper-slide>
    
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
          slidesPerView: 4,
          spaceBetween: 5,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
             // when window width is <= 499px
            0: {
                slidesPerView: 1.4,
                spaceBetweenSlides: 5
            },
            499: {
                slidesPerView: 2.2,
                spaceBetweenSlides: 5
            },
            // when window width is <= 999px
            699: {
                slidesPerView: 3,
                spaceBetweenSlides: 5
            },

            999: {
                slidesPerView: 3,
                spaceBetweenSlides: 5
            },

            1299: {
                slidesPerView: 4,
                spaceBetweenSlides: 5
            }
          }
        },

        swiperOptionMobile: {
          slidesPerView: 2.2,
          spaceBetween: 3,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
                    breakpoints: {
             // when window width is <= 499px
            0: {
                slidesPerView: 2.2,
                spaceBetweenSlides: 5
            },
            499: {
                slidesPerView: 3,
                spaceBetweenSlides: 5
            },

            // when window width is <= 999px
            699: {
                slidesPerView: 3.5,
                spaceBetweenSlides: 5
            },

            799: {
                slidesPerView: 4,
                spaceBetweenSlides: 5
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
  .content{
    position: relative;
    margin-top: 10px;
    padding-bottom: 10px;

  .thumbnail{
    height: 130px;
    width: 234px;
    left: 128px;
    top: 600px;
    border-radius: 4px;

    @media only screen and (max-width: 1024px) {
    height: 88px;
    width: 152px;
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
}



</style>




  