<template>
  <v-app id="app" light ref="app">
    <Navbar @search="startSearch" @toggle-nav="toggleNav"/>

    <!-- drawer -->
    <v-navigation-drawer app clipped fixed v-model="drawer">
      <v-list dense>
        <v-list-tile
          :key="item.title"
          :to="item.route"
          router
          v-for="item in items"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- end of drawer -->

    <v-content ref="router">
      <v-container fluid>

        <router-view></router-view>

      </v-container>

      <!-- hello -->
    </v-content>
    <Footer app/>

  </v-app>
</template>

<script>
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: { Navbar, Footer },
    data: () => ({
      drawer: null,
      items: [ { icon: 'dashboard', title: 'Top Stories', route: '/top' }, {
        icon: 'search',
        title: 'Search',
        route: '/search'
      } ]
    }),
    methods: {
      toggleNav() {
        this.drawer = !this.drawer;
      },
      startSearch() {

      }

    }
  };
</script>
