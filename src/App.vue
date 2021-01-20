<template>
  <div id="app">
    <app-header></app-header>
    <div class="c-body">
      <div class="c-leftPanCont">
        <left-panel></left-panel>
      </div>
      <div class="c-countryDetails">
        <country-details></country-details>
      </div>
      <div class="c-global">
        <app-global></app-global>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/cHeader'
import LeftPanel from './components/cLeftPanel'
import CountryDetails from './components/countryDetails'
import Global from './components/global'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'left-panel': LeftPanel,
    'country-details': CountryDetails,
    'app-global': Global
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  background-color: #1a2035;
}

.c-body{
  width: 100%;
  display: flex;
}

.c-leftPanCont{
  width: 260px;
  min-width: 260px;
}

.c-countryDetails{
  flex-grow: 1;
}

.c-global{
  width: 280px;
  min-width: 260px;
}
</style>
