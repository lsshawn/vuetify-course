<template>
  <v-container>
    <div>Layout</div>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <div style="background-color: #888">Col 1</div>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <div style="background-color: #888">Col 2</div>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <div style="background-color: #888">Col 2</div>
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
  </v-container>
</template>

<script>
export default {};
</script>
