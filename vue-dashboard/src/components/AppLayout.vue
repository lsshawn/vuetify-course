<template>
  <v-container>
    <div class="text-h1 my-5">Layout</div>
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

    <div class="text-h1 my-5">Flex</div>

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

    <div class="text-h1 my-5">List</div>

    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Single-line item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Two-line item</v-list-item-title>
          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card>
      <v-list-item three-line>
        <v-list-item-avatar>
          <v-img
            src="https://sshawn.com/_nuxt/img/profile-shawn.c5535cf.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Three-line item</v-list-item-title>
          <v-list-item-subtitle>
            Secondary line text Lorem ipsum dolor sit amet,
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            consectetur adipiscing elit.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card class="mt-12">
      <v-list two-line>
        <v-list-item-group
          v-model="selected"
          active-class="pink--text"
          multiple
        >
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.action"
                ></v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>

            <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: [2],
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          title: "Ali Connors",
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          subtitle: "Wish I could come, but I'm out of town this weekend.",
          title: "me, Scrott, Jennifer",
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams",
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen",
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          title: "Britta Holt",
        },
      ],
    };
  },
};
</script>
