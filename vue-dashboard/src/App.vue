<template>
  <v-app>
    <!-- app prop is required for Vuetify to size your components around v-main -->
    <v-app-bar color="primary" dense dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vue dashboard
          </v-list-item-title>
          <v-list-item-subtitle>
            Built with Vuetify
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          :exact="item.exact"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer app>
      <v-col cols="12" class="text-center"
        >{{ new Date().getFullYear() }} - <strong>Vuetify</strong></v-col
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    items: [
      {
        title: "Home",
        icon: "mdi-view-dashboard",
        to: { name: "home" },
        exact: true,
      },
      {
        title: "Typography",
        icon: "mdi-image",
        to: { name: "typography" },
        exact: true,
      },
      {
        title: "Layout",
        icon: "mdi-help-box",
        to: { name: "layout" },
        exact: true,
      },
      {
        title: "Form",
        icon: "mdi-help-box",
        to: { name: "form" },
        exact: true,
      },
      {
        title: "User profile",
        icon: "mdi-help-box",
        to: { name: "userProfile" },
        exact: true,
      },
      {
        title: "Photo upload",
        icon: "mdi-help-box",
        to: { name: "photoUpload" },
        exact: true,
      },
    ],
  }),
};
</script>
