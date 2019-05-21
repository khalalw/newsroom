<template>
  <v-app id="inspire" dark>
    <Navbar @toggle-nav="toggleNav"/>
    <Sidenav :drawer="drawer"/>

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
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Top from "./pages/Top";
export default {
  components: { Sidenav, Navbar, Top },
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
