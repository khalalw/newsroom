<template>
  <v-container>
    <v-form>
      <v-layout justify-center row wrap>
        <v-flex lg6 md8 sm10 xl4 xs12>
          <v-container>
            <v-text-field
              clearable
              label="Search..."
              prepend-inner-icon="search"
              solo
              v-model="query"
              v-on:keydown.enter.prevent="getSearchResults"
            ></v-text-field>
          </v-container>
        </v-flex>
      </v-layout>
    </v-form>

    <div class="text-xs-center" v-if="isSearching">
      <v-progress-circular
        indeterminate
        size="110"
        width="7"
      ></v-progress-circular>
    </div>


    <v-layout justify-center row wrap>
      <v-flex xs10>
        <template v-for="(article, index) in results.articles">
          <Searchcard
            :description="article.description"
            :key="index"
            :published-at="article.publishedAt"
            :url-to-image="article.urlToImage"
            :title="article.title"
          ></Searchcard>
          <v-divider :key="index"></v-divider>
        </template>
      </v-flex>
    </v-layout>
  </v-container>


</template>

<script>
  import * as NewsAPI from 'newsapi';
  import Searchcard from '../components/Searchcard';

  const newsapi = new NewsAPI('b7937248fde44f8c83c367b292cc827e');
  export default {
    name: 'Search',
    components: {
      Searchcard
    },
    data() {
      return {
        results: {},
        query: '',
        isSearching: false
      };
    },
    methods: {
      getSearchResults() {
        this.results = {};
        this.isSearching = true;
        newsapi.v2.everything({
          q: this.query,
          sortBy: 'relevancy'
        }).then(response => {
          this.results = response;
          this.isSearching = false;
        });
      }
    }
  };
</script>

<style>

</style>