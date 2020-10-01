<template>
  <div>
    <v-select
      v-model="selectedTransition"
      :items="transitions"
      label="Transition"
    ></v-select>

    <v-menu :transition="selectedTransition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" class="ma-2" v-bind="attrs" v-on="on">
          {{ selectedTransition }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="text-h4">Wrap a component with transition</div>

    <v-checkbox v-model="done" label="Done"> </v-checkbox>

    <v-fab-transition>
      <ul v-if="done">
        <li>Payments</li>
        <li>Subscriptions</li>
        <li>Connect</li>
      </ul>
    </v-fab-transition>

    <v-scroll-x-transition>
      <v-icon v-if="done" color="success" x-large>
        mdi-dog
      </v-icon>
    </v-scroll-x-transition>

    <v-expand-transition>
      <v-card v-if="done" height="100" width="100" class="secondary"></v-card>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTransition: "fab-transition",
      transitions: [
        "fab-transition",
        "fade-transition",
        "expand-transition",
        "scale-transition",
        "scroll-x-transition",
        "scroll-y-transition",
        "slide-x-transition",
        "slide-y-transition",
      ],
      done: false,
    };
  },
};
</script>

<style scoped>
</scoped
