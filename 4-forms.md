# 4. Forms

- Create a new route called '/form' and a component called AppForm.vue
- Validation
- Form with validations

- extra: rules are validated on input. A hack to validate only when a button is clicked is by setting the rules on button click: https://codepen.io/subashdbc/pen/dybpPEj?editors=1010

## 4.1 Exercise (30 minutes)

- Create a UserProfile.vue component and a route called /user-profile.
- Create a new store module `user.js`
- Create a `v-card` to display user profile
- Create a form that updates the user profile when button is clicked.

- mapState user to edit the form will trigger a warning about mutating vuex state outside of vuex. What's a better way? Plus we don't want to immediately change the profile. We want to change the profile after the button is clicked.

- alternative way to change on input instead of button click.

- `isPilot` user property to learn try v-checkbox
