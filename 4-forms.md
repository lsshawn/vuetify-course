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

## 4.2 v-select vs v-autocomplete

v-select only allows selection. Use `v-autocomplete` if you want to allow user to input and filter selection

v-select only allows selection. Use `v-autocomplete` if you want to allow user to input and filter selection.

## 4.3 Exercise on v-autocomplete timezone

geo.json: https://tinyurl.com/ycgsenfs

Put that json into /src/assets

## 4.4 Snackbar: show confirmation on user update

## 4.5 Button with loading and disabled

## 4.6 Date picker with text entry

## 4.7 V-chips and combining it with v-autocomplete

In forms.

## 4.8 Text area with autogrow

## 4.9 File input

AppPhotoUpload to show functionality with Cloudinary
