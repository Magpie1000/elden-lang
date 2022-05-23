<template>
  <v-app>
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

<style scoped>
main {
  max-width: 1500px;
}
</style>