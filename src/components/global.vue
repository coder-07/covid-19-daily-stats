<template>
    <div id="c-global">
        <div class="c-globalCont">
            <div class="c-globalTitleCont">
                <div class="c-globalTitle">Global Stats</div>
            </div>
            <div class="c-detailsCont">
                <div class="c-detailsScroll">
                    <div class="c-detailsItem">
                        <div class="c-detailsTitle">Cases</div>
                        <div class="c-detailsBox orange">
                            <div style="margin-bottom: 5px">New: {{newCase}}</div>
                            <div>Total: {{totalCase}}</div>
                        </div>
                    </div>
                    <div class="c-detailsItem">
                        <div class="c-detailsTitle">Deaths</div>
                        <div class="c-detailsBox red">
                            <div style="margin-bottom: 5px">New: {{newDeaths}}</div>
                            <div>Total: {{totalDeaths}}</div>
                        </div>
                    </div>
                    <div class="c-detailsItem">
                        <div class="c-detailsTitle">Recovered</div>
                        <div class="c-detailsBox green">
                            <div style="margin-bottom: 5px">New: {{newRecover}}</div>
                            <div>Total: {{totalRecover}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="credits">
            <div>Made with</div>
            <div><i class="material-icons heart" style="color: red; font-size: 40px; padding: 5px 0;">favorite</i></div>
            by PK
            <div style="margin-top: 10px">Stay safe, take care :)</div>
        </div>
    </div>
</template>

<script>
import {bus} from '../main'

export default {
    data(){
        return{
            newCase: 0,
            totalCase: 0,
            newDeaths: 0,
            totalDeaths: 0,
            newRecover: 0,
            totalRecover: 0
        }
    },
    created() {
        bus.$on('globalData', (response) => {
            var globalData = response;
            this.newCase = globalData.NewConfirmed;
            this.totalCase = globalData.TotalConfirmed;
            this.newDeaths = globalData.NewDeaths;
            this.totalDeaths = globalData.TotalDeaths;
            this.newRecover = globalData.NewRecovered;
            this.totalRecover = globalData.TotalRecovered;
        });
    }
}
</script>

<style scoped>
#c-global{
    position: fixed;
    width: 260px;
    margin: 30px 0 20px;
    max-height: calc(100% - 50px);
    right: 10px;
    top: 0px;
}

.c-globalCont{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #202940;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    border-radius: 6px;
}

.c-globalTitleCont{
    position: absolute;
    width: 90%;
    padding: 10px 10px;
    box-sizing: border-box;
    background: linear-gradient(60deg,#7b1fa2,#913f9e);
    border-radius: 5px;
    left: 50%;
    transform: translate(-50%);
    top: -15px;
}

.c-globalTitle{
    font-size: 17px;
    color: #ffffff;
    text-align: center;
}

.c-detailsCont{
    width: 100%;
    padding: 35px 0 10px;
    height: 100%;
    box-sizing: border-box;
}

.c-detailsScroll{
    width: 85%;
    height: 100%;
    overflow: auto;
    margin: 0 auto; 
}

.c-detailsTitle{
    color: #8b92a9;
    font-size: 16px;
    margin-bottom: 10px;
}

.c-detailsItem{
    margin-bottom: 20px;
}

.c-detailsItem:last-child{
    margin-bottom: 0px;
}

.c-detailsBox{
    color: #ffffff;
    padding: 10px;
    font-size: 12px;
    border-radius: 5px;
}

.c-detailsBox.orange{
    background: linear-gradient(60deg,#f5700c,#ff9800);
}

.c-detailsBox.red{
    background: linear-gradient(60deg,#d22824,#da3a36);
}

.c-detailsBox.green{
    background: linear-gradient(60deg,#288c6c,#4ea752);
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}

.credits{
    margin-top: 15px;
    font-size: 15px;
    color: #8b92a9;
    padding: 0px 10px;
    text-align: center;
}

.heart{
    animation: heartbeat 0.7s linear infinite;
    transform: scale(1.0);
}

@keyframes heartbeat {
  0% {transform: scale(0.8);}
  50% {transform: scale(1.1);}
  100% {transform: scale(0.8);}
}
</style>