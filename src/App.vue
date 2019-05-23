<template>
  <v-app dark id="app">
    <Navbar @toggle-nav="toggleNav"/>

    <!-- drawer -->
    <v-navigation-drawer app clipped fixed v-model="drawer">
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Top Stories</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- drawer -->

    <v-content>
      <v-container fluid>

        <router-view></router-view>

      </v-container>
      <!-- hello -->
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: { Navbar, Footer },
    data: () => ({
      drawer: null
    }),
    methods: {
      toggleNav() {
        this.drawer = !this.drawer;
      }
    }
  };
</script>
