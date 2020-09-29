<template>
  <v-container>
    <div>Layout</div>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <div style="background-color: #888">Column</div>
        <v-card max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            Number 10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <div style="background-color: #888">Column</div>

        <v-card max-width="400" elevation="5">
          <v-card-title>Top 10 Australian beaches</v-card-title>

          <v-card-subtitle class="pb-0">
            Number 10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="orange" text>
              Share
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <div style="background-color: #888">Column</div>
        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">Card title</v-card-title>

              <v-card-subtitle>card subtitle</v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4" offset-md="4">
        <div style="background-color: #888">md=4 offset-md=4</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2">
        <div style="background-color: #888">cols 2</div>
      </v-col>
      <v-spacer />
      <v-col cols="2">
        <div style="background-color: #888">cols 2</div>
      </v-col>
    </v-row>

    <h1>Flex</h1>

    <v-row>
      <v-col cols="6" class="grey">
        <!-- justify-start, center, end, space-between, space-around -->
        <v-card class="d-flex justify-center mb-6" flat tile>
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            Flex {{ n }}
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
