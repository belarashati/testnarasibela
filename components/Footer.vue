
<template>
    <header class="wrapper">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <div class="footer-detail">
            <div class="main-content">
             <img src="narasi-ungu.png" class="mainLogo" />
                <div class="information">
                    <div class="group-about">
                        <a>Press Release</a>
                        <a>Informasi Perusahaan</a>
                        <a>Syarat dan Ketentuan Umum</a>
                    </div>
                    <div class="group-about">
                        <a>Kebijakan Privasi</a>
                        <a>Pedoman Liputan Media Siber</a>
                        <a>Kontak Kami</a>
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
    
    </header>

</template>

<script>
import NuxtLogoVue from './NuxtLogo.vue';

export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.wrapper{
    background: white;

    .footer-detail{
        display: block;
        padding: 50px 0;
        .main-content{
            max-width: 960px;
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;

            .information{
                .group-about{
                    a{
                        font-family: Roboto;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 14px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #616161;

                    }
                }
            }

        }
        .partner-wrapper{
            width: 100%;
            display: block;
            position: relative;
            justify-items: center;
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
.mainLogo{
    align-items: center;
    height: 46.99962615966797px;
    width: 161.1268310546875px;
    left: 130px;
    top: 40px;
    border-radius: 0px;


        @media only screen and (max-width: 1300px) {
            position: absolute;
            height: 15.555214881896973px;
            width: 58.22722625732422px;
            left: 48.04962158203125px;
            top: 32.44482421875px;
            border-radius: 0px;


      }
}


</style>