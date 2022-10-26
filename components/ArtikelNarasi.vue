<template>
  
  <div class="wrapper">
    <div class="head-category">
        <div class="wrapper-category">
          <div class="itemPoint"></div>
            <a class="category">ARTIKEL NARASI</a>
        </div>
          <a class="view-all">Lihat semua</a>
    </div>

    <div class="main-article">
      <div class="image-wrapper">
        <img :src="image" class="image-article"/>
      </div>
      <div class="article-preview">
        <a class="article-category">{{category}}</a>
        <a class="article-title">{{title}}</a>
        <a class="article-text desktop-view-visible">{{preview}}</a>
        <a class="article-date">{{date}}</a>

      </div>
    </div>

      
    <div class="content">
      
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(data,index) in news_list" :key="index">
          <div class="card-list">
          <img :src="data.image" alt="" class="thumbnail" />
          <a class="narasumber">{{data.category}}</a>
          <a class="subTitle">{{data.title}}</a>
          <a class="date-swiper">{{data.date}}</a>
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
          slidesPerView: 4,
          spaceBetween: 3,
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
          },
          breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
            }
          }
        }
      }
    },

    props: {
      news_list: {
      type: Array,
      default: [],
    },
      category:{
        type: String,
        default: '',
      },
      title:{
        type: String,
        default: '',
      },
      date:{
        type: String,
        default: '',
      },
      preview:{
        type: String,
        default: '',
      },
      image:{
        type: String,
        default: '',
      },
    news_type_title: {
      type: String,
      default: '',
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
    margin-bottom: 30px;
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
  height: auto;
    width: 100%;
    left: 128px;
    top: 0px;
    border-radius: 4px;
     @media only screen and (max-width: 1024px) {
      left: 0px;
      top: 0px;
     }

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
    margin-top: 5px;
    margin-bottom: 5px;

  }

  .date-swiper{
    font-family: Roboto;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #616161;
  }
  
  
}
    .head-category{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (max-width: 1024px) {
          margin-bottom: 16px;
        }

        .view-all{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        align-items: center;
        text-align: right;
        font-size: 16px;
        line-height: 50px;
        text-decoration-line: underline;
        color: #4A25AA;
        @media only screen and (max-width: 1024px) {
          font-size: 10px;
          font-weight: 500;
          line-height: 15px;
          letter-spacing: 0em;
        }
      }
      .wrapper-category{
        display: flex;
      .itemPoint {
        display: block;
        width: 9px;
        height: 22px;
        background: #FFE900;
        margin-right: 17px;
          @media only screen and (max-width: 1024px) {
            height: 14px;
            width: 4px;
            margin-right: 8px;
          }
      }

    .category{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      display: flex;
      color: #4A25AA;
      @media only screen and (max-width: 1024px) {
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: 0em;
      }
    }
    }
  }

  .main-article{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 32px;

    @media only screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
    }

    .image-wrapper{
      width: 40%;
      height: fit-content;
        @media only screen and (max-width: 1024px) {
          width: 100%;
        }
    }
    .article-preview{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      padding-left: 24px;
        @media only screen and (max-width: 1024px) {
          width: 100%;
          padding: 0%;
          margin-top: 10px;
        }
    }
  }

  .card-list{    
      width: 100%;
      height: min-content;
      display: block;
      position: relative;
  }

  .article-category{
   font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 10%;
    display: flex;
    align-items: center;
    color: #4A25AA;
    margin-bottom: 14px;
    @media only screen and (max-width: 1024px) {
      font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          margin-bottom: 10px;
    }
  }

  .article-title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #051C2C;
    @media only screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 20px;
    }
  }

  .article-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    align-items: center;
    color: #757575;

  }

  .article-date{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #616161;
    @media only screen and (max-width: 1024px) {
      margin-top: 12px;
    }
  }

  .image-article{
    height: auto;
    width: 100%;
    border-radius: 5px;
  }

  .swiper-button-next{
    color: transparent;
    background-image: url("static/narasi-next-black.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 23px;
    width: 13px;
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .swiper-button-prev{
    color: transparent;
    background-image: url("static/narasi-prev-black.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 23px;
    width: 13px;
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .swiper-button-disabled{
    opacity: 0;
  }
}


</style>




  