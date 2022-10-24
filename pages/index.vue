<template>
  <!-- <Tutorial/> -->

  <div class="wrapper">
    <div>
      <Header/>
      <Headline/>
      <div class="content">
      <Swiper/>
      <SwiperContent news_title="TERPOPULER"
      :news_type='1'/>
      <SwiperContent 
      news_title="PILIHAN NARASI"
      :news_type='2'/>
      <ArtikelNarasi/>
      <Footer/>
    </div>
    </div>
  </div>
  

</template>

<script>
import Swiper from "../components/Swiper.vue";
import SwiperContent from "../components/SwiperContent.vue";
import ArtikelNarasi from "../components/ArtikelNarasi.vue";


export default {
    name: "IndexPage",
    components: { Swiper, SwiperContent, ArtikelNarasi }
}
</script>

<style lang="scss" scoped>

.wrapper{
  .content{
    background: #F1F1F1;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    
  }
  
}


</style>
