<template>
  <nav>
    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-medium">Grow</span>
        <span class="font-weight-light">User Interface</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text depressed target="_blank">
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<style>
#background {
  height: 100px;
  background: #252525;
  margin: 0;
}
#header {
  margin: 0;
  padding: 0;
}
</style>