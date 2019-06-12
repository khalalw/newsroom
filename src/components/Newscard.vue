<template>
  <v-card max-width="400px">
    <v-img :src="image" alt="article image"></v-img>

    <v-card-title primary-title>
      <div>
        <div class="headline">{{newsTitle}}</div>
        <span class="grey--text">{{this.getRelativeTime(publishTime)}}</span>
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
</template>

<script>
import * as moment from "moment";
export default {
  props: ["newsTitle", "publishTime", "image", "description", "articleURL"],
  data: () => ({
    show: false
  }),
  methods: {
    getRelativeTime(date) {
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
