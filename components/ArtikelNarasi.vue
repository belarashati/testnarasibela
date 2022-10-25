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
        <a class="article-text">{{preview}}</a>
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
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
    <div class="shadow-wrapper shadow-left desktop-view-visible"></div>
    <div class="shadow-wrapper shadow-right desktop-view-visible"></div>
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
             // when window width is <= 499px
            0: {
                slidesPerView: 1.3,
                spaceBetweenSlides: 5
            },
            499: {
                slidesPerView: 1.4,
                spaceBetweenSlides: 5
            },
            550: {
                slidesPerView: 2.2,
                spaceBetweenSlides: 5
            },
            699: {
                slidesPerView: 2.2,
                spaceBetweenSlides: 5
            },

            1024: {
                slidesPerView: 3,
                spaceBetweenSlides: 5
            },

            1180: {
                slidesPerView: 4,
                spaceBetweenSlides: 5
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
    height: 130px;
    width: 234px;
    left: 128px;
    top: 600px;
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

  .main-article{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;

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
    width: 234px;
  }

  .article-category{
   font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 10%;
    display: flex;
    align-items: center;
    color: #4A25AA;
  }

  .article-title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #051C2C;
    @media only screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 100%;
          margin-top: 10px;
          margin-bottom: 10px;
    }
  }

  .article-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    display: flex;
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
  }

  .image-article{
    height: auto;
    width: 100%;
    border-radius: 5px;
  }
}


</style>




  