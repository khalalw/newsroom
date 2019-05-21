<template>
  <v-layout>
    <v-flex v-for="(article, index) in topNews.articles" :key="index">
      <Newscard
        :image="article.urlToImage"
        :newsTitle="article.title"
        :publishTime="article.publishedAt"
        :articleURL="article.url"
        :description="article.description"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
import Newscard from "../components/Newscard";
export default {
  name: "Top",
  components: {
    Newscard
  },
  data() {
    return {
      topNews: {}
    };
  },
  created: function() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b7937248fde44f8c83c367b292cc827e"
      )
      .then(res => {
        this.topNews = res.data;
      });
  }
};
</script>

<style scoped>
.container {
  width: 1080px;
}

.item {
  margin: 0 auto;
}
</style>
