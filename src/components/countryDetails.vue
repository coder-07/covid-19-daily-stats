<template>
    <div id="country-details">
        <div class="country-name">{{countryName}}</div>
        <div class="country-stats-cont">
            <div class="country-stat orange">
                <div class="country-stat-title">Cases</div>
                <div class="country-stat-details">
                    <div class="detail">
                        <div class="detail-title">New</div>
                        <div class="detail-number">{{newCase}}</div>
                    </div>
                    <div class="detail">
                        <div class="detail-title">Overall</div>
                        <div class="detail-number">{{totalCase}}</div>
                    </div>
                </div>
            </div>
            <div class="country-stat red">
                <div class="country-stat-title">Deaths</div>
                <div class="country-stat-details">
                    <div class="detail">
                        <div class="detail-title">New</div>
                        <div class="detail-number">{{newDeath}}</div>
                    </div>
                    <div class="detail">
                        <div class="detail-title">Overall</div>
                        <div class="detail-number">{{totalDeath}}</div>
                    </div>
                </div>
            </div>
            <div class="country-stat green">
                <div class="country-stat-title">Recovered</div>
                <div class="country-stat-details">
                    <div class="detail">
                        <div class="detail-title">New</div>
                        <div class="detail-number">{{newRecover}}</div>
                    </div>
                    <div class="detail">
                        <div class="detail-title">Overall</div>
                        <div class="detail-number">{{totalRecover}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="daily-cont">
            <div class="daily-title">Daily Statistics</div>
            <div class="daily-stats-cont">
                <table class="daily-table" cellpadding="0" cellspacing="0">
                    <tr>
                        <th>Date</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                    <tr v-for="(day, index) in daily.slice().reverse()" :key="index">
                        <td>{{day.Date}}</td>
                        <td>{{day.Confirmed}}</td>
                        <td>{{day.Deaths}}</td>
                        <td>{{day.Recovered}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../main'

export default {
    data() {
        return{
            countryName: 'India',
            newCase: 0,
            totalCase: 0,
            newDeath: 0,
            totalDeath: 0,
            newRecover: 0,
            totalRecover: 0,
            slug:'',
            daily: []
        }
    },
    created() {
        bus.$on('onCountry', (response) => {
            this.countryName = response.Country;
            this.newCase = response.NewConfirmed;
            this.totalCase = response.TotalConfirmed;
            this.newDeath = response.NewDeaths;
            this.totalDeath = response.TotalDeaths;
            this.newRecover = response.NewRecovered;
            this.totalRecover = response.TotalRecovered;
            this.slug = response.Slug;

            this.axios.get('https://api.covid19api.com/total/dayone/country/' + this.slug).then((response) => {
                this.daily = response.data;
            });
        });

    }
}
</script>

<style scoped>
#country-details{
    padding: 0 20px 0 30px;
}

.country-name{
    color: #a9afbbd1;
    padding: 15px 0;
    font-size: 18px;
}

.country-stats-cont{
    display: flex;
    width: 100%;
    margin: 15px 0 40px;
}

.country-stat{
    flex-grow: 1;
    margin-right: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #202940;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    position: relative;
}

.country-stat:last-child{
    margin-right: 0px;
}

.country-stat-title{
    padding: 10px;
    border-radius: 5px;
    color: #ffffff;
    font-size: 12px;
    display: inline-block;
    position: absolute;
    top: -15px;
    left: 15px;
}

.orange .country-stat-title{
    background: linear-gradient(60deg,#f5700c,#ff9800);
}

.red .country-stat-title{
    background: linear-gradient(60deg,#d22824,#da3a36);
}

.green .country-stat-title{
    background: linear-gradient(60deg,#288c6c,#4ea752);
}

.country-stat-details{
    padding-top: 20px;
}

.detail{
    padding-bottom: 15px;
    text-align: center;
}

.detail:last-child{
    padding-bottom: 0px;
}

.detail-title{
    margin-bottom: 5px;
    font-size: 12px;
    color: #8b92a9;
}

.detail-number{
    font-size: 25px;
    color: #8b92a9;
}

.daily-cont{
    padding: 15px;
    background-color: #202940;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    border-radius: 5px;
    position: relative;
}

.daily-title{
    background: linear-gradient(60deg,#7b1fa2,#913f9e);
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    width: calc(100% - 40px);
    top: -15px;
    left: 50%;
    transform: translate(-50%);
}

.daily-stats-cont{
    padding: 30px 0 0px;
    margin: 0px auto;
    width: calc(100% - 10px);
}

.daily-table{
    width: 100%;
    color: #8b92a9;
    font-size: 12px;
}

.daily-table th{
    width: 25%;
    padding: 10px 5px;
    font-size: 14px;
    border-bottom: 1px solid rgba(139, 146, 169, 0.5);
}

.daily-table td{
    padding: 10px 5px;
    text-align: center;
    border-bottom: 1px solid rgba(139, 146, 169, 0.5);
}

.daily-table tr:last-child td{
    border-bottom: none;
}
</style>