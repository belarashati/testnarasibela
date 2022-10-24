<template>
  
  <div class="wrapper">
    <div class="head-category">
        <div class="wrapper-category">
          <div class="itemPoint"></div>
            <a class="category">{{news_title}}</a>
          </div>
          <a class="view-all">Lihat semua</a>
      </div>
    <div class="content">
      <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
              <div>
                <img :src="item.img" alt="" class="thumbnail" />
                <a v-if="news_type == 1" class="narasumber">{{item.text}}</a>
                <a class="subTitle">{{item.subTitle}}</a>
                <a v-if="news_type == 2" class="see-more">LIHAT PLAYLIST SELENGKAPNYA</a>
              </div>
            </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

        <div class="shadow-wrapper shadow-left"></div>
        <div class="shadow-wrapper shadow-right"></div>
      
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
        { img:"thumbnail-1.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-2.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-3.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-1.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"THUMBNAIL-2.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
        { img:"thumbnail-1.png", text: "AKU BELA", subTitle: "AAAAAAAAAAAA"},
      ],
        swiperOption: {
          slidesPerView: 4.2,
          spaceBetween: 5,
          slidesPerGroup: 1,
          loop: false,
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
      news_title: {
      type: String,
      default: "",
    },
    news_type: {
      type: Number,
      default: 0,
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/swiper/swiper.scss';
.wrapper{
  margin-top: 30px;
  .content{
    display: block;
    position: relative;
    flex-direction:column;
    margin-left: 50px;
    margin-right: 50px;

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
        background: linear-gradient(-272.36deg, #F1F1F1 2.21%, rgba(241, 241, 241, 0) 98.25%);
      }

      .shadow-right{
        right: 0;
        background: linear-gradient(272.36deg, #F1F1F1 2.21%, rgba(241, 241, 241, 0) 98.25%);
      }

    
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
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      display: flex;
      align-items: center;
      color: #4A25AA;
      flex: none;
      order: 2;
      flex-grow: 0;
    }

    .subTitle{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 125%;
      display: flex;
      align-items: center;
      color: #0C0B0D;
      flex: none;
      order: 1;
      flex-grow: 0;

    }

    .see-more{
      font-family: Roboto;
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: 0em;
      text-align: left;
      color: #4A25AA;

    }

    
  }

      .head-category{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 50px;
        margin-right: 50px;

        .view-all{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        align-items: center;
        text-align: right;
        line-height: 50px;
        text-decoration-line: underline;
        color: #4A25AA;

      }
      .wrapper-category{
        display: flex;
      .itemPoint {
        display: block;
        width: 9px;
        height: 22px;
        background: #FFE900;
        margin-right: 20px;
      }

    .category{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      display: flex;
      color: #4A25AA;
    }
    }
  }
}

</style>




  