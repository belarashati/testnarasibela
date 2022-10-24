<template>
  
  <div class="wrapper">
    <div class="content">
      <div>
      <img src="headline-cat.png" class="headline-img"/>
    </div>
    <div class="shadow"></div>
    <div class="headline-title">
      <a class="headline-style">Mata Najwa</a>
      <a class="main-headline">{{$store.state.narasi}}</a>
      <a class="headline-style">Mata Najwa</a>
    </div>
      
    </div>
  </div>

  
</template>

<script>
import Swiper from './Swiper.vue';
export default {
    components: { Swiper },

    methods: {
      async initData() {
        await this.$store.dispatch('narasi/getMainHeadline')
        await this.$store.dispatch('narasi/getHeadlineList')
      },
    },
    mounted() {
      this.initData()
      console.log(this.value)
    },
};
</script>

<style lang="scss" scoped>

.wrapper{
  .content{
    display: block;
    position: relative;
    flex-direction:column;
    justify-content: space-between;
    
.headline-img {
  position: relative;
  width: 100%;
  height: 342px; 
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

  .headline-title{
    height: fit-content;
    position: absolute;
    display: flex;
    flex-direction:column;
    bottom: 0;
    margin-left: 50px;
    margin-right: 50px;
    .headline-style{
      font-family: 'Roboto';
      font-style: normal;
      font-size: 16px;
      color: #ffe900;
      margin: 0px;
    }

    .main-headline{
      font-family: 'Roboto';
      font-style: normal;
      font-size: 32px;
      color: #EEEEEE;
    

  }
    

  }
  .content-slider{
    width: 100%;
    height: fit-content;
    position: static;

  }
  }


  

  
}


</style>
