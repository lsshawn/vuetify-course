<template>
  <v-container>
    <v-row>Home</v-row>

    <v-row>
      <!-- Widgets-->
      <v-col cols="12" sm="6" lg="3" v-for="(stat, i) in stats" :key="i">
        <app-widget :stat="stat"></app-widget>
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
