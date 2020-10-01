<template>
  <div>
    <div class="text-h1">Dialog</div>
    <v-btn @click="dialog = !dialog">Open dialog</v-btn>

    <v-dialog
      v-model="dialog"
      width="500"
      persistent
      transition="slide-x-reverse-transition"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Some policy text here
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
