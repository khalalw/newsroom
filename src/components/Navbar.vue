<template>
  <v-toolbar app clipped-left fixed>
    <v-toolbar-side-icon @click="toggleSideBar()"></v-toolbar-side-icon>
    <v-toolbar-title>The Newsroom</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout align-center class="hidden-md-and-down" row style="max-width: 275px">
      <v-text-field
        append-icon="search"
        color="black"
        hide-details
        label="Search..."
        v-model="q"
        v-on:keydown.enter="search"
      ></v-text-field>
    </v-layout>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        q: ''
      }
    },
    methods: {
      toggleSideBar() {
        this.$emit('toggle-nav');
      },
      search() {
        this.$router.push({name: 'search', params: {q: this.q}});
      }
    }
  };
</script>

<style>
</style>
