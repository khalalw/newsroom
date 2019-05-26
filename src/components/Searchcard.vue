<template>
  <v-hover>
    <v-card
      :class="`elevation-${hover ? 12 : 2}`"
      :href="url"
      class="mx-auto"
      slot-scope="{ hover }"
      target="_blank"
    >
      <v-layout>
        <v-flex align-self-center xs4>
          <v-img
            :src="urlToImage"
            alt="article photo"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs8>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ title }}</div>
              <div class="source"><strong>{{ source }}</strong> - {{ getDate(publishedAt) }}</div>
              <div>{{ description }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
  import * as moment from 'moment';

  export default {
    name: 'Searchcard',
    props: [ 'urlToImage', 'title', 'publishedAt', 'description', 'source', 'url' ],
    methods: {
      getDate(date) {
        return moment(date).format('LL');
      }
    }
  };
</script>

<style scoped>
  .source {
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>