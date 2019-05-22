<template>

  <v-layout align-content-space-between justify-space-around row wrap>
    <div :key="index" class="newscard" v-for="(article, index) in topNews.articles">
      <Newscard
        :articleURL="article.url"
        :description="article.description"
        :image="article.urlToImage"
        :newsTitle="article.title"
        :publishTime="article.publishedAt"
      />
    </div>
  </v-layout>
</template>

<script>
  import Newscard from '../components/Newscard';
  import * as NewsAPI from 'newsapi';

  const newsapi = new NewsAPI('b7937248fde44f8c83c367b292cc827e');

  export default {
    name: 'Top',
    components: {
      Newscard
    },
    data() {
      return {
        topNews: {}
      };
    },
    created: function () {
      newsapi.v2.topHeadlines({
        country: 'us'
      }).then(res => this.topNews = res)
    }
  };
</script>

<style scoped>
  .newscard {
    margin-bottom: 30px;
  }
</style>
