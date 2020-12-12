<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/" class="white--text mx-3">Home</router-link>
      <router-link to="/users" class="white--text mx-3">Users</router-link>

      <v-spacer></v-spacer>

      <router-link to="/signin" class="white--text mx-3">Sign In</router-link>
      <router-link to="/signup" class="white--text mx-3">Sign Up</router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
