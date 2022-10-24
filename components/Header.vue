
<template>
    <header class="content">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <div class="topBar">
            <img src="logogram.png" class="mainLogo" />
            <div class="search-wrapper">
                <div class="search-content">
                    <img src="search-white.png" class="search-icon"/>
                    <input class="search" type="text" placeholder="Ketik kata kunci untuk mencari" name="search">
                </div>
                <img src="Vector.png" class="account"/>
            </div>
            
        </div>

        <div class="navBar">
            <a class="menu-nav" href="#program">PROGRAM</a>
            <a class="menu-nav" href="#event">EVENT</a>
            <a class="menu-nav" href="#kolaborasi">KOLABORASI</a>
            <a class="menu-nav" href="#akademi">AKADEMI</a>
        </div>
    
    </header>

</template>

<script>
import NuxtLogoVue from './NuxtLogo.vue';

export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.content{
    .topBar{
        width: 100%;
        height: 58px;
        display: flex;
        align-items: center;
        background: #0C0B0D;
        justify-content: space-between;
    }

    .navBar {
        background: #4A25AA;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;

        a{
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            color: #FAFAFA;
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
        }

        &:hover {
        background: #4A25AA;
        text-decoration-color: #FAFAFA;
      }

    }

}
.mainLogo{
    align-items: center;
    height: 33.99976348876953px;
    width: 117.99700164794922px;
    left: 125px;
    top: 11px;
    margin-left: 10px;

        @media only screen and (max-width: 1300px) {
            position: absolute;
            left: 6.4%;
            right: 72.27%;
            top: 2%;
            bottom: 60.78%;

      }
}

.search-wrapper{
    
    align-items: center;
    display: flex;
    justify-content: space-between;
    .search-content{
        background-color: white;
        border-radius: 5px;
        .search{
        height: 34px;
        width: 310px;
        left: 954px;
        top: 12px;
        margin-right: 30px;
        border: none;

        @media only screen and (max-width: 1300px) {
            position: absolute;
            left: 6.4%;
            right: 72.27%;
            top: 2%;
            bottom: 60.78%;
        }
    }
    
    }

    .search-icon{
        height: 14.215105056762695px;
        width: 14.206770896911621px;
        left: 2.5px;
        top: 2.49951171875px;
        border-radius: 0px;
        margin-right: 10px;
        margin-left: 10px;

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


</style>