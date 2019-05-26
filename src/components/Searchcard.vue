<template>
  <v-hover>
    <v-card
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      slot-scope="{ hover }"
    >
      <v-layout>
        <v-flex align-self-center xs4>
          <v-img
            :src="urlToImage"
            alt="article photo"
            height="160px"
            width="285px"
          ></v-img>
        </v-flex>
        <v-flex xs8>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ title }}</div>
              <div>{{ publishedAt }}</div>
              <div>{{ description }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'Searchcard',
    props: [ 'urlToImage', 'title', 'publishedAt', 'description' ]
  };
</script>

<style scoped>

</style>