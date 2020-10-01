<template>
  <div>
    <div class="text-h3">User profile</div>
    <v-card>
      <v-card-text>
        <div v-for="(value, key, index) in user" :key="index">
          {{ key }}: {{ value }}
        </div>
      </v-card-text>
    </v-card>

    <div class="text-h4 my-10">
      Alternative 1: v-model and update on button click
    </div>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="tempUser.firstName"
        label="First name"
        required
      ></v-text-field>

      <v-text-field
        v-model="tempUser.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="validate">
        Update profile
      </v-btn>
      <!-- {{ tempUser }} -->
    </v-form>

    <div class="text-h4 my-10">Alternative 2: Update on text field change</div>

    <v-text-field
      :value="user.company"
      label="Company"
      hint="This will update on input"
      @change="(value) => updateUser({ company: value })"
    />

    <v-checkbox
      :input-value="user.isPilot"
      @change="(value) => updateUser({ isPilot: value })"
      hide-details
      label="Are you a pilot?"
    ></v-checkbox>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      valid: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      tempUser: {},
    };
  },
  computed: {
    // do not mutate Vuex store
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
  methods: {
    validate() {
      const validated = this.$refs.form.validate();
      if (validated) {
        this.$store.dispatch("user/updateUser", this.tempUser);
      }
    },
    updateUser(obj) {
      this.$store.dispatch("user/updateUser", obj);
    },
  },
  created() {
    this.tempUser = JSON.parse(JSON.stringify(this.$store.state.user.user));
  },
};
</script>
