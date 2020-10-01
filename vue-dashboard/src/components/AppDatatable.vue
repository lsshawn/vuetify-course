<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="5"
    ></v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Unit", value: "unit" },
        { text: "Value", value: "value" },
        { text: "Type", value: "type", align: "start", sortable: false },
      ],
      coins: [],
    };
  },
  async mounted() {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/exchange_rates"
    );
    // object to array of objects
    this.coins = Object.keys(res.data.rates).map((key) => {
      return res.data.rates[key];
    });
  },
};
</script>
