<template>
  <v-toolbar app clipped-left fixed>
    <v-toolbar-side-icon @click="toggleSideBar()"></v-toolbar-side-icon>
    <v-toolbar-title>The Newsroom</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout align-center class="hidden-md-and-down" row style="max-width: 275px">
      <v-text-field
        append-icon="search"
        color="white"
        hide-details
        placeholder="Search..."
        single-line
      ></v-text-field>
    </v-layout>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      toggleSideBar() {
        this.$emit('toggle-nav');
      }
    }
  };
</script>

<style>
</style>
