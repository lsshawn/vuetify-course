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

      <v-btn
        color="primary"
        class="mr-4"
        @click="asyncValidate"
        :loading="saving"
        :disabled="saving"
      >
        Async Update profile
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

    <div class="text-h4 my-10">Autocomplete</div>

    <v-autocomplete
      :value="user.timezone"
      :items="geo.timezones"
      label="Time zone"
      :item-text="
        (item) => item.name.replace('_', ' ') + ' ' + item.offset.split(' ')[0]
      "
      item-value="name"
      filled
      required
      @change="(value) => updateUser({ timezone: value })"
    >
    </v-autocomplete>

    <div class="text-h4 my-10">Date picker</div>

    <div class="text-h5 my-5">Date picker without input</div>

    <v-date-picker
      v-model="tempUser.joinDate"
      :show-current="true"
    ></v-date-picker>

    <div class="text-h5 my-5">Date picker with input</div>

    <v-menu
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
      :nudge-top="360"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="tempUser.joinDate"
          label="Date"
          hint="YYYY-MM-DD"
          v-bind="attrs"
          v-on="on"
          lazy
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="tempUser.joinDate"
        no-title
        :show-current="true"
      ></v-date-picker>
    </v-menu>

    <v-textarea
      solo
      v-model="tempUser.about"
      label="About"
      auto-grow
      autofocus
      rows="1"
      background-color="blue lighten-5"
    ></v-textarea>

    <v-snackbar v-model="snackbar" top right :timeout="500">
      User updated!
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
const geo = require("../assets/geo.json");

export default {
  data() {
    return {
      valid: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      tempUser: {},
      geo: geo,
      snackbar: false,
      saving: false,
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
      this.snackbar = true;
    },
    async asyncValidate() {
      const validated = this.$refs.form.validate();
      if (!validated) {
        return;
      }

      this.saving = true;

      setTimeout(() => {
        this.$store.dispatch("user/updateUser", this.tempUser);
        this.snackbar = true;
        this.saving = false;
      }, 2000);
    },
    updateUser(obj) {
      this.$store.dispatch("user/updateUser", obj);
      this.snackbar = true;
    },
  },
  created() {
    this.tempUser = JSON.parse(JSON.stringify(this.$store.state.user.user));
  },
};
</script>
