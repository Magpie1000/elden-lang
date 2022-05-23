<template>
  <v-app class="justify-center">
    <v-main class="main">
      <the-nav-bar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/bars/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    TheNavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
main {
  max-width: 1500px;
}

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap');
</style>