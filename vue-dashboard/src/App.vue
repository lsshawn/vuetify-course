<template>
  <v-app>
    <v-app-bar color="primary" dense dark app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
