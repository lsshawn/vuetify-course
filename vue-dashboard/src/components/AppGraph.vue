<template>
  <div>
    <div class="text-h2">Graph</div>
    <div>npm install vue-chartkick chart.js</div>

    <line-chart :data="{ '2017-01-01': 11, '2017-01-02': 6 }"></line-chart>

    <line-chart
      :data="[
        {
          name: 'A',
          data: { '2017-01-01': 11, '2017-01-02': 6 },
          color: '#D6E9C6',
        },
        {
          name: 'B',
          data: { '2017-01-01': 15, '2017-01-02': 12 },
          color: '#FAEBCC',
        },
      ]"
      legend="bottom"
    ></line-chart>

    <line-chart
      :data="rates"
      :min="null"
      :curve="false"
      xtitle="Date"
      ytitle="Rate"
      :dataset="{ pointRadius: 0 }"
      :download="true"
    ></line-chart>

    <area-chart
      :data="rates"
      :min="null"
      :curve="false"
      xtitle="Date"
      ytitle="Rate"
      xmin="2020-01-01"
      xmax="2020-03-31"
      :dataset="{ pointRadius: 0 }"
      :download="true"
    ></area-chart>

    <bar-chart
      :data="[
        ['X-Small', 5],
        ['Small', 27],
      ]"
    ></bar-chart>

    <pie-chart
      :data="[
        ['US', 44],
        ['China', 22],
        ['UK', 10],
      ]"
      :donut="true"
    ></pie-chart>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      coins: [],
      rates: {},
    };
  },
  computed: {},
  async mounted() {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/exchange_rates"
    );
    const coinsData = res.data.rates;
    // object to array of objects
    this.coins = Object.keys(coinsData).map((key) => {
      return coinsData[key];
    });

    const ccyRes = await axios.get(
      `https://api.frankfurter.app/2020-01-01..?to=USD`
    );

    const ccyData = ccyRes.data.rates;
    Object.keys(ccyData).map((key) => {
      // this.rates[key] = ccyData[key]["USD"];
      this.$set(this.rates, key, ccyData[key]["USD"]);
    });
  },
};
</script>
