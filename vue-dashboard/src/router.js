import Vue from "vue";
import VueRouter from "vue-router";

import AppLayout from "./components/AppLayout.vue";
import Home from "./components/Home.vue";
import AppTypography from "./components/AppTypography.vue";
import AppForm from "./components/AppForm.vue";
import UserProfile from "./components/UserProfile.vue";
import AppPhotoUpload from "./components/AppPhotoUpload.vue";
import AppTransition from "./components/AppTransition.vue";
import AppDialog from "./components/AppDialog.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/layout", component: AppLayout, name: "layout" },
  { path: "/typography", component: AppTypography, name: "typography" },
  { path: "/form", component: AppForm, name: "form" },
  { path: "/user-profile", component: UserProfile, name: "userProfile" },
  { path: "/photo-upload", component: AppPhotoUpload, name: "photoUpload" },
  { path: "/transition", component: AppTransition, name: "transition" },
  { path: "/transition", component: AppTransition, name: "transition" },
  { path: "/dialog", component: AppDialog, name: "dialog" },
];

export default new VueRouter({ mode: "history", routes });
