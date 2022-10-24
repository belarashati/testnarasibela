<template>
  
  <div class="wrapper">
  
    <div class="content">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <div>
            <img :src="item.img" alt="" class="thumbnail" />
            <a class="narasumber">{{item.text}}</a>
            <a class="subTitle">{{item.subTitle}}</a>
            <a class="narasumber">{{item.text}}</a>
          </div>
      
        </swiper-slide>
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
        swiperList:[
        { img:"headline-cat.png", text: "AKU BELA"},
        { img:"thumbnail-1.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-2.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-3.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-1.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-2.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
      ],
        swiperOption: {
          slidesPerView: 4.2,
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
          }
        }
      }
    },

    props: {
    news_type_title: {
      type: String,
      default: 'INI DEFAULTNYA',
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/swiper/swiper.scss';
.wrapper{
  background: black;
  .content{
    display: block;
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 10px;
    padding-bottom: 10px;

  .thumbnail{
    height: 160px;
    width: 284px;
    left: 128px;
    top: 633px;
    border-radius: 4px;

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

    }
  }
}



</style>




  