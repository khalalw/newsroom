<template>

  <v-form>
    <v-layout justify-center row wrap>
      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-container>
          <v-text-field
            clearable
            label="Search..."
            prepend-inner-icon="search"
            solo
          ></v-text-field>
        </v-container>
      </v-flex>
    </v-layout>
  </v-form>

</template>

<script>
  export default {
    name: 'Search',
  };
</script>

<style>

</style>