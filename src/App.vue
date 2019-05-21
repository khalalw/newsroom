<template>
  <v-app id="inspire" dark>
    <Navbar @toggle-nav="toggleNav"/>
    <!-- drawer -->
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Top Stories</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- drawer -->
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink></v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Top from "./pages/Top";
export default {
  components: { Navbar, Top },
  data: () => ({
    drawer: null
  }),
  methods: {
    toggleNav() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
