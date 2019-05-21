<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click="toggleSideBar()"></v-toolbar-side-icon>
    <v-toolbar-title>The Newsroom</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout row align-center style="max-width: 275px" class="hidden-md-and-down">
      <v-text-field
        placeholder="Search..."
        single-line
        append-icon="search"
        color="white"
        hide-details
      ></v-text-field>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    toggleSideBar() {
      this.$emit("toggle-nav");
    }
  }
};
</script>

<style>
</style>
