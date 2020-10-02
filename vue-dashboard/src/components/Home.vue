<template>
  <v-container>
    <v-row>Home</v-row>

    <v-row>
      <!-- Widgets-->
      <v-col cols="12" sm="6" lg="3" v-for="(stat, i) in stats" :key="i">
        <app-widget :stat="stat"></app-widget>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <bar-chart
              :data="[
                ['X-Small', 5],
                ['Small', 27],
              ]"
            ></bar-chart>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <pie-chart
              :data="[
                ['US', 44],
                ['China', 22],
                ['UK', 10],
              ]"
              :donut="true"
            ></pie-chart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import AppWidget from "./analytics/AppWidget.vue";

export default {
  components: {
    "app-widget": AppWidget,
  },
  computed: {
    ...mapState({
      stats: (state) => state.data.stats,
    }),
  },
};
</script>
