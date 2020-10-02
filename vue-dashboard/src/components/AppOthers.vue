<template>
  <div>
    <div class="text-h2">Stepper</div>

    <v-stepper v-model="stepperModel" vertical>
      <div v-for="(question, i) in questions" :key="i">
        <v-stepper-step :step="i">
          {{ question.title }}
        </v-stepper-step>

        <v-stepper-content :step="i">
          <v-text-field
            :label="question.description"
            v-model="question.answer"
          />
          <v-btn @click="stepperModel++">Done</v-btn>
        </v-stepper-content>
      </div>
    </v-stepper>

    <div class="text-h3">Non-linear</div>

    <v-stepper v-model="stepperModel" vertical non-linear>
      <div v-for="(question, i) in questions" :key="i">
        <v-stepper-step :step="i" editable>
          {{ question.title }}
        </v-stepper-step>

        <v-stepper-content :step="i">
          <v-text-field
            :label="question.description"
            v-model="question.answer"
          />
          <v-btn @click="stepperModel++">Done</v-btn>
        </v-stepper-content>
      </div>
    </v-stepper>

    <v-divider />

    <div class="text-h2">Skeleton Loader</div>

    <v-btn @click="loading = !loading">Toggle</v-btn>

    <v-row>
      <v-col cols="12" md="4">
        <v-skeleton-loader type="image, article" :loading="loading">
          <v-card>
            <v-card-title>Title</v-card-title>
            <v-card-text>Card Text</v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row>

    <div class="text-h2">Sparkline</div>

    <v-sheet color="cyan" elevation="12">
      <v-sparkline
        :labels="sparkLabel"
        :value="sparkValue"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <!-- 
    <div class="text-h3">Tree view with card</div>
    <v-treeview
      :items="items"
      activatable
      :active-sync="active"
      open-on-click
    />

    {{ active }}
    <v-card>
      <v-card-text>
        {{ selected }}
      </v-card-text>
    </v-card>
    -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      stepperModel: "0",
      questions: [
        {
          title: "Your name",
          description: "How should be call you?",
          answer: "",
        },
        {
          title: "Your location",
          description: "For us to send you goodies",
          answer: "",
        },
        {
          title: "Feedback",
          description: "What do you think?",
          answer: "",
        },
      ],
      countForYears: [
        { year: 2020, count: 50 },
        { year: 2019, count: 32 },
        { year: 2018, count: 51 },
        { year: 2017, count: 16 },
      ],
      items: [
        {
          id: "1",
          name: "Users",
          children: [],
        },
      ],
      active: [],
    };
  },
  computed: {
    sparkLabel() {
      return this.countForYears.map((i) => i.year);
    },
    sparkValue() {
      return this.countForYears.map((i) => i.count);
    },
    selected() {
      if (!this.active.length) return "null";

      const id = this.active[0];
      console.log(`TCL:  -> id `, id);
      return this.items[0].users.filter((i) => i.id === id)[0];
    },
  },
  async created() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.items[0].children = res.data;
  },
};
</script>
