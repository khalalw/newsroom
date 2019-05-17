<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img class="white--text" width="400px" :src="image"></v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span>
            <br>
            <span>Whitehaven Beach</span>
            <br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">View Source</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["newsTitle", "publishTime", "image", "description", "articleURL"]
};
</script>

<style>
</style>
