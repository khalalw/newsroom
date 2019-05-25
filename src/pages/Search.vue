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
            ></v-text-field>
          </v-container>
        </v-flex>
      </v-layout>
    </v-form>

    <v-layout justify-center row wrap>
      <v-flex lg6 md8 sm10 xl4 xs12>
        <v-card>
          <v-layout>
            <v-flex xs4>
              <v-img
                alt="article photo"
                contain
                src="http://www.github.com/khalalw.png"
              ></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-title primary-title>
                <div>
                  <div class="headline">headline</div>
                  <div>date</div>
                  <div>summary</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </v-container>


</template>

<script>
  import * as NewsAPI from 'newsapi';

  const newsapi = new NewsAPI('b7937248fde44f8c83c367b292cc827e');
  export default {
    name: 'Search',
    data() {
      return {
        results: {}
      };
    },
    methods: {
      getSearchResults(query, category = '') {
        newsapi.v2.everything({
          q: query,
          category: category,
        });
      }
    }
  };
</script>

<style>

</style>