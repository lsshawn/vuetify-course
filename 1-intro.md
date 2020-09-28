# 1. Introductino

## 1.1 Installation

We'll use `vue-cli` to start a new project.

To install `vue-cli`, run `npm install -g @vue/cli`.

```
vue create vue-dashboard

cd vue-dashboard

vue add vuetify
```

Study the directory structure.

The `vue.config.js` is an optional config file that is automatically loaded by `@vue/cli-service`

In this file, the `transpileDependencies` ensures that vuetify is always transpiled to ES5 to work on all browsers. By default, babel loader excludes files in node_modules.

In `src` folder, we see the usual structure.

Notice that in `main.js`, we load the plugin we created for vuetify.

Let's have a fresh start. Delete HelloWorld component and everything in App.vue.

## 1.2 v-app

This is the starting point of Vuetify magic. You only uses it once in your app.

The `app` prop on components like v-navigation-drawer, v-app-bar, v-footer and more, help bootstrap your application with the **proper sizing around <v-main> component**.

v-main is a déclaration of where the pages content is so it should wrap everything except the thing that are always there in your app ie the toolbar and maybe the footer.

V-container is a part of the grid system. Together with v-layout and v-flex it permit you to build your pages layout. The 2 main props of v-container are grid-list(xs to xl) which control gutter between éléments and fluid which control left and right margin, think Printer margin. If fluid is used the margin will be thinner.

## 1.3 v-app-bar

You have props you can change: 'dense' 'dark'.

These are props which you have learned in the last Vue course.

### 1.4 color

Look at color="primary". What other color options does Vuetify gives you?

{
primary: '#1976D2',
secondary: '#424242',
accent: '#82B1FF',
error: '#FF5252',
info: '#2196F3',
success: '#4CAF50',
warning: '#FFC107',
}

- red
- red lighten-2

What if we want to override the default theme color? Add in `/plugins/vuetify.js`.

If you want to conditionally switch dark/light theme, create a method to set `this.$vuetify.theme.dark` true/false.

## 1.5 Set-up vue-router and vuex

Before we go ahead, let's configure our Vue app to include vue-router and vuex.

`npm install --save vue-router vuex`

## 1.6 v-main, v-container and v-footer

In v-footer, let's add 2020 - Vuetify.

<v-cols cols="12">

This is the layout which we'll learn next.

How do we center text? `class=text-center`. We'll learn about typography next.

## 1.7 Layout

Let's create a Layout component. Remember to register it in your router.js.

Vuetify uses a 12 point grid system.

There are 5 media breakpoints: xs, sm, md, lg and xl.

`cols="12"` refers to xs.

Use `offset-md=12` to offset left and right.

Use `v-spacer` to fill available space between 2 components.
