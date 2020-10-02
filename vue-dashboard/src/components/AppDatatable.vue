<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="5"
    ></v-data-table>

    <div class="text-h3">Format column display</div>

    <v-data-table :headers="headers" :items="coins" :items-per-page="5">
      <template v-slot:item.name="{ item }">
        {{ item.name.toLowerCase() }}
      </template>
    </v-data-table>

    <div class="text-h3">Footer props</div>

    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="2"
      :footer-props="{
        'items-per-page-options': [2, 5, 30, 100 - 1],
      }"
    >
    </v-data-table>

    <div class="text-h3">Loading</div>

    <v-data-table
      :headers="headers"
      loading
      loading-text="Loading... Please wait"
    >
    </v-data-table>

    <div class="text-h3">Searching</div>
    <v-text-field v-model="search" label="Search" hide-details></v-text-field>

    <v-data-table
      :headers="headers"
      :items="coins"
      :search="search"
    ></v-data-table>

    <div class="text-h3">Editing</div>
    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="5"
      @click:row="editItem"
    ></v-data-table>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>Card title</v-card-title>
        <v-card-text>{{ editingItem }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1">Save</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      search: "",
      dialog: false,
      editingItem: {},
    };
  },
  methods: {
    editItem(obj) {
      console.log("editItem");
      this.dialog = true;
      this.editingItem = obj;
    },
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
