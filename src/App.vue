<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
      flat
      align="center"
    >
    <v-menu open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon 
          class="ml-8"
          v-bind="attrs"
          v-on="on"
        >
        </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="(item) in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-toolbar-title
        style="width: 300px"
        class="mx-auto"
      >
        <v-row
          justify="center"
          align="center"
        >
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo.png"
              transition="scale-transition"
              width="40"
            />

            <v-img
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="100"
              src="./assets/logo_name.png"
              width="150"
            />
          </div>
        </v-row>
      </v-toolbar-title>
      <v-menu open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          v-bind="attrs"
          v-on="on"
          icon
          class="mr-10"
        >
          <v-icon>mdi-account-star</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item) in items1"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home-import-outline', link:'/'},
      { title: 'Volume', icon: 'mdi-beaker-outline', link:'/volume'},
      { title: 'Comprimento', icon: 'mdi-ruler', link:'/length'},
    ],
    items1: [
      { title: 'Nos ajude !', icon: 'mdi-hand-heart-outline', link:'/donate'},
    ],
  }),
  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;
      vm.selectedIndex = selectedIndex;
      return vm.$router.push({ name: routeName });
    }
  },
};
</script>
