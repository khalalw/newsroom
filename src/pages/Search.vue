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
      <v-progress-linear
        indeterminate
        size="110"
        width="7"
      ></v-progress-linear>
    </div>

    <div class="text-xs-center" v-if="noResults">No results found</div>


    <v-layout justify-center row v-if="results.articles && results.articles.length > 0" wrap>
      <v-flex xs10>
        <template v-for="(article, index) in results.articles">

          <v-item-group :key="index">
              
          </v-item-group>         

          <Searchcard
            :description="article.description"
            :key="index"
            :published-at="article.publishedAt"
            :source="article.source.name"
            :title="article.title"
            :url="article.url"
            :url-to-image="article.urlToImage || ''"
          ></Searchcard>
          <!--          <v-divider></v-divider>-->
        </template>
      </v-flex>

      <v-flex class="pagination" xs12>

        <v-pagination
          :length="numOfPages"
          @input="getSearchResults"
          circle
          v-model="page"

        ></v-pagination>

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
    props: [ 'q' ],
    data() {
      return {
        results: {},
        query: '' || this.q,
        isSearching: false,
        noResults: null,
        page: 1,
        numOfPages: null
      };
    },
    methods: {
      getSearchResults() {
        this.results = {};
        this.isSearching = true;
        this.noResults = false;

        newsapi.v2.everything({
          q: this.query,
          sortBy: 'relevancy',
          pageSize: 10,
          page: this.page
        }).then(response => {
          this.results = response;
          this.isSearching = false;
          this.numOfPages = Math.ceil(this.getNumOfResults() / 10) > 10 ? 10 :
            Math.ceil(this.getNumOfResults() / 10);

          if (!this.getNumOfResults()) {
            this.noResults = true;
          }
        });
      },
      getNumOfResults() {
        return this.results[ 'totalResults' ];
      }
    },

  };
</script>

<style scoped>
  .pagination {
    text-align: center;
    padding-top: 30px;
  }

</style>