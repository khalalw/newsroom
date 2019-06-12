<template>
  <v-toolbar app clipped-left fixed>
    <v-toolbar-side-icon @click="toggleSideBar()"></v-toolbar-side-icon>
    <v-toolbar-title>The Newsroom</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      q: ""
    };
  },
  methods: {
    toggleSideBar() {
      this.$emit("toggle-nav");
    }
  }
};
</script>

<style>
</style>
