<template>
  <!-- <Tutorial/> -->

  <div class="wrapper">


      <div class="top-bar-style">
        <div class="container top-bar-content">
          <div class="logo-wrapper">
            <img src="logogram.png" class="mainLogo"/>
          </div>
          
          <div class="search-wrapper">
            <div class="search-content">
                <img src="search-white.png" class="search-icon desktop-view-visible"/>
                <form class="desktop-view-visible">
                  <input class="search" type="text" placeholder="Ketik kata kunci untuk mencari" name="search">
                </form>
            </div>
            <img src="search-icon-mobile.png" class="search-icon-mobile mobile-view-visible"/>
            <img src="Vector.png" class="account"/>
        </div>
        </div>
      </div>


      <div class="navBar-wrapper">
        <div class="container navBar">
            <a class="menu-nav" href="#program">PROGRAM</a>
            <a class="menu-nav" href="#event">EVENT</a>
            <a class="menu-nav" href="#kolaborasi">KOLABORASI</a>
            <a class="menu-nav" href="#akademi">AKADEMI</a>

        </div>
      </div>

      <div class="headline-wrapper">
          <img :src="$store.state.narasi.headline.data.image" class="headline-img-desktop desktop-view-visible"/>
          <img :src="$store.state.narasi.headline.data.imagemobile" class="headline-img-mobile mobile-view-visible"/>
          <div class="shadow"></div>
        </div>
        <div class="headline-copy">
          <div class="container">
            <a class="headline-style">Mata Najwa</a>
          </div>
        </div>
        <div class="headline-copy">
          <div class="container">
             <a class="main-headline">{{$store.state.narasi.headline.data.title}} </a>
          </div>
        </div>
        <div class="headline-copy">
          <div class="container">
            <a class="headline-date">{{$store.state.narasi.headline.data.date}}</a>
            <Swiper
            :news_list='$store.state.narasi.headlineList.data'/>
          </div>
          
        </div>
        
      

      <div class="container">
        <SwiperContent news_title="TERPOPULER"
        :news_type='1'
        :news_list='$store.state.narasi.terpopulerList.data'/>
        <SwiperContent 
        news_title="PILIHAN NARASI"
        :news_type='2'
        :news_list="$store.state.narasi.narasiList.data"/>
        <ArtikelNarasi
        :title="$store.state.narasi.article.data.title"
        :date="$store.state.narasi.article.data.date"
        :category="$store.state.narasi.article.data.category"
        :image="$store.state.narasi.article.data.image"
        :preview="$store.state.narasi.article.data.preview"
        :news_list='$store.state.narasi.articleList.data'/>
      
      </div>

    <div class="wrapper-footer">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <div class="footer-detail container">
            <div class="main-content">
             <img src="narasi-ungu.png" class="main-logo-footer" />
                <div class="information desktop-view-visible">
                    <div class="group-about">
                        <a>Informasi Perusahaan • </a>
                        <a>Syarat dan Ketentuan Umum</a>
                    </div>
                    <div class="group-about">
                        <a>Kebijakan Privasi • </a>
                        <a>Pedoman Liputan Media Siber • </a>
                        <a>Kontak Kami • </a>
                        <a>Karir</a>
                    </div>
                </div>

              <div class="social-media">
                    <img src="Instagram.png"/>
                    <img src="Twitter.png"/>
                    <img src="Facebook.png"/>
                    <img src="Youtube.png"/>
              </div>
            </div>
            <div class="information mobile-view-visible">
                    <div class="group-about">
                        <a>Press Release • </a>
                        <a>Informasi Perusahaan </a>
                    </div>
                    <div class="group-about">
                        <a>Kebijakan Privasi • </a>
                        <a>Pedoman Liputan Media Siber</a>
                    </div>
                      <div class="group-about">
                        <a>Kontak Kami • </a>
                        <a>Karir</a>
                    </div>
                </div>
            <div class="partner-wrapper">
                <a>Our Partner</a>
                <div class="partner">
                    <img src="logo-gdp.png"/>
                    <img src="logo-gv.png"/>
                    <img src="logo-home.png"/>
                </div>
            </div>
        </div>



        <div class="bottom-bar">
            <a>© 2021 Narasi.tv | All rights reserved.</a>
        </div>
    
    </div>
    <!-- <Footer/> -->
  </div>
  

</template>

<script>
import Swiper from "../components/Swiper.vue";
import SwiperContent from "../components/SwiperContent.vue";
import ArtikelNarasi from "../components/ArtikelNarasi.vue";


export default {
    name: "IndexPage",
    components: { Swiper, SwiperContent, ArtikelNarasi },

  methods: {
    async initData() {
      await this.$store.dispatch('narasi/getMainHeadline'),
      await this.$store.dispatch('narasi/getHeadlineList'),
      await this.$store.dispatch('narasi/getMainArticle'),
      await this.$store.dispatch('narasi/getTerpopuler'),
      await this.$store.dispatch('narasi/getPilihanNarasi'),
      await this.$store.dispatch('narasi/getArticleList')
    },
  },
  mounted() {
    this.initData()
    console.log(this.value)
  },
}
</script>

<style lang="scss" scoped>

.wrapper{
  display: flex;
    flex-direction: column;    

    .top-bar-style{
      width: 100%;
      height: 58px;
      background: #000;

      .top-bar-content{
        display: flex;
        justify-content: space-between;
      }
    }
  .content{
    width: 100%;
    display: flex;
    flex-direction: column;    
    
  }

  .navBar-wrapper{
    background: #4A25AA;
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
      overflow-x: scroll;
      white-space: nowrap;
    }
  
  }
      .navBar {
        display: flex;
        flex-direction: row;

        a{
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            color: #FAFAFA;
            @media only screen and (max-width: 1024px) {
              margin: 5px;
            }
        }

        .menu-nav{
            font-family: Roboto;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 100%;
            display: flex;
            align-items: center;
            opacity: 0.5;
             @media only screen and (max-width: 1024px) {
              margin-right: 40px;
            }
        }
      }

.account{
        align-items: center;
        height: 21px;
        width: 21px;
        left: 2px;
        top: 2px;
        border-radius: 0px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .search-icon-mobile{
      height: 17px;
      width: 17px;
      left: 290px;
      top: 19px;
      border-radius: 0px;
      margin-right: 20px;
      display: none;
        @media only screen and (max-width: 1024px) {
        display: block;
  }

    }

    .headline-wrapper{
      display: block;
      position: relative;

      .headline-img-desktop {
        position: relative;
        width: 100%;
        height: 300px; 
        object-fit: cover;
        object-position: 25% 25%; 
      }

      .headline-img-mobile {
        position: relative;
        width: 100%;
        height: 214px; 
        object-fit: cover;
        object-position: 25% 25%; 
      }
    .shadow{
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg,transparent,#000);
      position: absolute;
      bottom: 0;
      left: 0;
    }

    
  }

  .headline-copy{
    background: #000;
    width: 100%;
    padding-bottom: 8px;

  }

  .headline-style{
    font-size: 16px;
    font-weight: 500;
    color: #ffe900;
    font-family: 'Roboto';
    font-style: normal;
      @media only screen and (max-width: 1024px) {
        display: block;
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 3px;
      }
  }

  .headline-date{
    font-size: 16px;
    font-weight: 500;
    color: #EEEEEE;
    font-family: 'Roboto';
    font-style: normal;
    padding-bottom: 8px;
    display: block;
    @media only screen and (max-width: 1024px) {
        font-size: 12px;
        line-height: 12px;
        padding-bottom: 16px;
      }
  }

      .main-headline{
      font-family: 'Roboto';
      font-style: normal;
      font-size: 32px;
      color: #EEEEEE;

      @media only screen and (max-width: 1024px) {
        display: block;
        font-size: 24px;
        line-height: 30px;
      }
  }

  .logo-wrapper{
    display: flex;
    height: 100%;
    position: relative;
  }

  .mainLogo{
    margin-top: auto;
    margin-bottom: auto;
    height: 34px;
    width: 118px;
  }

  .main-logo-footer{
    align-items: center;
    height: 47px;
    width: 161px;
    left: 130px;
    top: 40px;
    border-radius: 0px;

    @media only screen and (max-width: 1024px) {
    width: 82px;
    height: auto;
  }

}





.wrapper-footer{
    background: white;

    .footer-detail{
        display: block;
        padding: 50px 0;
        .main-content{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: auto;
            margin-right: auto;

        }

        .information{
                .group-about{
                  display: flex;
                  justify-content: center;
                  margin-top: 12px;
                  @media only screen and (max-width: 1024px) {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                  }
                    a{
                        font-family: Roboto;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 100%;
                        letter-spacing: 0em;
                        text-align: center;
                        color: #616161;
                        margin-left: 5px;

                    }
                }
            }
        .partner-wrapper{
            width: 100%;
            display: block;
            position: relative;
            justify-items: center;
            margin-top: 27px;
            @media only screen and (max-width: 1024px) {
              margin-top: 35px;
            }
            a{
                width: 100%;
                font-family: Roboto;
                font-size: 10px;
                font-weight: 400;
                line-height: 10px;
                letter-spacing: 0em;
                text-align: center;
                color: #9E9E9E;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .partner{
                height: fit-content;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    margin: 5px;
                }
            }
        }

    }
  .social-media{
    @media only screen and (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      max-width: 50%;
    }
    img{
      margin: 2px;
      @media only screen and (max-width: 1024px) {
      width: 24px;
      height: auto;
    }
    }
  }

    .bottom-bar {
        background: #4A25AA;
        width: 100%;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;

        a{
            font-family: Roboto;
            font-size: 10px;
            font-weight: 500;
            line-height: 10px;
            letter-spacing: 0em;
            text-align: center;
            color: #FAFAFA;
        }

    }

}

.search-wrapper{
    display: flex;
    align-items: center;
}

.search{
  border: none;
  width: 310px;
  height: 25px;
}

.search-icon{
  width: 14px;
  height: 14px;
  padding: 5px;
  margin-top: auto;
  margin-bottom: auto;
}

.search-content{
    position: relative;
    margin-right: 10px;
    flex-direction: row;
    padding: 5px;
    border-radius: 4px;
    display: flex;
    background: #FAFAFA;
      
    @media only screen and (max-width: 1024px) {
        display: none;
  }
}
  
}


</style>
