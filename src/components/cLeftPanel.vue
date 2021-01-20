<template>
    <div id="left-panel">
        <div class="lp-overlay">
            <div class="lp-title">Countries</div>
            <div style="padding: 10px 15px"><input type="text" class="lp-search" placeholder="Search" v-model="search" /></div>
            <div class="lp-country-list">
                <div class="lp-country" :class="{active: index == selected}" v-bind:country-code="index" @click="selected = index; selectCountry(index)" 
                v-for="(country, index) in countries" :key="index" v-show="filteredCountries(country.Country)">{{country.Country}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../main'

export default {
    data(){
        return{
            countries: [],
            selected: 0,
            countryIndex: 0,
            search: ''
        }
    },
    methods: {
        selectCountry: function(i){
            bus.$emit('onCountry', this.countries[i]);
        },
        filteredCountries: function(input){
            // eslint-disable-next-line no-unused-vars
            return input.toLowerCase().match(this.search.toLowerCase());
        }
    },
    computed: {
        
    },
    created() {
        this.axios.get('https://api.covid19api.com/summary').then((response) => {
            var counntryArray = [];
            var data = response.data;
            var countriesData = data.Countries;
            for(let countryData in countriesData) {
                counntryArray.push(countriesData[countryData])
            }
            console.log(data);
            this.countries = counntryArray;

            bus.$emit('globalData', data.Global);
        });
    }
}
</script>

<style scoped>
#left-panel{
    position: fixed;
    width: 260px;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url('../assets/leftPanel.jpg');
    background-size: cover;
    background-position: 50%;
    box-shadow: 0 16px 38px -12px rgba(0,0,0,.56), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
    z-index: 3;
}

.lp-overlay{
    background: rgba(31, 40, 62, 0.94);
    width: 100%;
    height: 100%;
}

.lp-title{
    color: #a9afbbd1;
    padding: 15px 0;
    text-align: center;
    margin: 0 15px;
    border-bottom: 1px solid hsla(0,0%,71%,.1);
    font-size: 18px;
}

.lp-country-list{
    height: calc(100% - 130px);
    margin: 15px;
    overflow: auto;
}

.lp-country:first-child{
    margin-top: 0px;
}

.lp-country{
    padding: 10px 15px;
    font-size: 13px;
    color: #a9afbbd1;
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s all ease-in-out;
}

.lp-country:hover{
    background-color: hsla(0,0%,78%,.05);
    color: #ffffff;
}

.lp-country.active{
    background: linear-gradient(60deg,#7b1fa2,#913f9e);
    color: #ffffff;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);
}

.lp-search{
    background-color: transparent;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid rgba(139, 146, 169, 0.5);
    width: 100%;
    outline: none;
    color: #a9afbbd1;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(139, 146, 169, 0.5);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(139, 146, 169, 0.5);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgba(139, 146, 169, 0.5);
}
</style>