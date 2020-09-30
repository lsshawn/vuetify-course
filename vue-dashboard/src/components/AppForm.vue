<template>
  <div>
    <div class="text-h2 mb-10">Text field</div>
    <v-text-field label="Your name" placeholder="John Woo"></v-text-field>
    <v-text-field label="Email" hint="We won't spam you"></v-text-field>
    <v-text-field label="solo" solo></v-text-field>
    <v-text-field label="filled" filled></v-text-field>
    <v-text-field label="outlined" outlined></v-text-field>
    <v-text-field
      label="counter"
      counter="25"
      :rules="[rules.max]"
    ></v-text-field>
    <v-text-field
      label="Prepend Icon"
      prepend-icon="mdi-map-marker"
    ></v-text-field>
    <v-text-field label="Dollar" prefix="$"></v-text-field>
    <v-text-field
      v-model.lazy="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      counter
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <div class="text-h2 mb-10">Form</div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="['beginner', 'intermediate', 'advanced']"
        :rules="[(v) => !!v || 'Skill is required']"
        label="Skill level"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      name: "",
      checkbox: "",
      select: "",
      email: "",
      showPassword: false,
      valid: false,
      rules: {
        max: (v) => v.length <= 25 || "Max 25 characters",
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    validate() {
      const res = this.$refs.form.validate();
      console.log(res);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
