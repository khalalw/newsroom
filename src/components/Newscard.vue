<template>
  <v-hover>
    <v-card>
      <v-img :src="image"></v-img>

      <v-card-title primary-title>
        <div>
          <div class="headline">{{newsTitle}}</div>
          <span class="grey--text">{{publishTime}}</span>
        </div>
      </v-card-title>

      <v-card-actions>
        <a :href="articleURL" target="_blank">
          <v-btn flat>View Source</v-btn>
        </a>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show">{{description}}</v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["newsTitle", "publishTime", "image", "description", "articleURL"],
  data: () => ({
    show: false
  })
};
</script>

<style>
</style>
