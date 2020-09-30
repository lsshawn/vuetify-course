<template>
  <v-card :class="stat.color || 'teal'">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-icon size="70px" color="white">{{ stat.icon }}</v-icon>

      <div>
        <v-card-title class="headline white--text">
          <span class="font-weight-bold text-end">{{
            stat.title
          }}</span></v-card-title
        >

        <v-card-subtitle class="white--text">{{
          stat.subtitle
        }}</v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
};
</script>
