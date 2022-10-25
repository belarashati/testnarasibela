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
              <div class="card-list">
                <div class="video-wrapper">
                  <div>
                    <img :src="item.image" alt="" class="thumbnail" />
                  </div>
                  
                  <div v-if="news_type == 2" class="shadow-video">
                    <img src="play_circle.png"/>>
                    <a class="video-text">4 video</a>
                  </div>
                </div>
                
                <div>
                  <a v-if="news_type == 1" class="narasumber">{{item.category}}</a>
                  <a class="subTitle">{{item.title}}</a>
                  <a v-if="news_type == 2" class="see-more">LIHAT PLAYLIST SELENGKAPNYA</a>
                </div>
                
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
  margin-top: 20px;
  .content{
    position: relative;
    flex-direction:column;

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

    .card-list{
      width: 234px;
    }

    .video-wrapper{
      height: 130px;

      .thumbnail{
        display: flex;
        height: 130px;
        width: 234px;
        left: 128px;
        top: 600px;
        border-radius: 4px;
    }
    .shadow-video{
      height: 20px;
      width: 234px;
      background: #0C0B0D;
      opacity: 0.7;
      display: flex;
      top: 110px;
      position: absolute;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      justify-content: center;
      align-items: center;

  }
    }
    .narasumber{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 100%;
      display: flex;
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
      display: flex;
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

  .mobile-swiper-visible{
    display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
  }

  .video-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
  }
}

</style>




  