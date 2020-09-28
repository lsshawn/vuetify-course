<template>
  <v-app>
    <!-- app prop is required for Vuetify to size your components around v-main -->
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
    //
  }),
};
</script>
