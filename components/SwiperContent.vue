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
            <swiper-slide v-for="(item,index) in news_list" :key="index">
              <div class="card-wrapper">
                <div class="video-wrapper">
                  <div class="image-wrapper">
                    <div>
                      <img :src="item.image" alt="" class="thumbnail" />
                    </div>
                    
                    <div v-if="news_type == 2" class="shadow-video">
                      <img src="play_circle.png"/>>
                      <a class="video-text">4 video</a>
                  </div>
                  </div>
                </div>
                
                <div>
                  <a v-if="news_type == 1" class="narasumber">{{item.category}}</a>
                  <a class="subTitle">{{item.title}}</a>
                  <a v-if="news_type == 2" class="see-more">LIHAT PLAYLIST SELENGKAPNYA</a>
                </div>
                
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
                slidesPerView: 1.1,
                spaceBetween: 18
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
            }
          }
        },

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
    },
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
  margin-top:34px;
  .content{
    position: relative;

    .card-wrapper{
      width: 100%;
      height: min-content;
      display: block;
      position: relative;
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
        background: linear-gradient(-272.36deg, #F1F1F1 2.21%, rgba(241, 241, 241, 0) 98.25%);
      }

      .shadow-right{
        right: 0;
        background: linear-gradient(272.36deg, #F1F1F1 2.21%, rgba(241, 241, 241, 0) 98.25%);
      }

    .narasumber{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 100%;
      display: block;
      align-items: center;
      color: #4A25AA;
      flex: none;
      order: 2;
      flex-grow: 0;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    .subTitle{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 125%;
      display: block;
      align-items: center;
      color: #0C0B0D;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin-bottom: 5px;

    }

    .see-more{
      font-family: Roboto;
      font-size: 10px;
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
        @media only screen and (max-width: 1024px) {
          margin-bottom: 16px;
        }

        .view-all{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        align-items: center;
        text-align: right;
        text-decoration-line: underline;
        color: #4A25AA;
        font-size: 16px;
        line-height: 50px;
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
      line-height: 100%;
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


  .video-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
  }

  .video-wrapper{
    height: min-content;
    width: 100%;
    display: block;
    position: relative;

      .shadow-video{
      height: 20px;
      width: 100%;
      background: #0C0B0D;
      opacity: 0.7;
      display: flex;
      bottom: 0;
      position: absolute;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      justify-content: center;
      align-items: center;

      }
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

  .image-wrapper{
      width: 100%;
      height: auto;
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




  