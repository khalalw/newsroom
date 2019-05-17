<template>
  <v-app>
    <Navbar/>
    <Newscard/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Newscard from "./components/Newscard";

export default {
  name: "App",
  components: {
    Navbar,
    Newscard
  },
  data() {
    return {};
  }
};
</script>
