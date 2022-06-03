<template>
  <v-app class="appMain">
    <v-main class="main container">
      <the-backdrop />
      <the-nav-bar />
      <router-view />
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from "@/components/bars/TheNavBar.vue";
import TheFooter from "@/components/bars/TheFooter.vue";
import TheBackdrop from "@/components/main/TheBackdrop.vue";

export default {
  name: "App",
  components: {
    TheNavBar,
    TheFooter,
    TheBackdrop,
  },
  data: () => ({}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cousine&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

#app {
  background-color: #272727 !important;
  font-family: "Cinzel", serif;
  word-break: keep-all;
  /* line-height: 70%; */
}

.title-text {
  font-family: "Cinzel";
  font-size: 60px !important;
  font-weight: 600 !important;
  color: #dcbf72 !important;
}

.cousine {
  font-family: "Cousine", monospace !important;
  line-height: 110%;
}

.noto {
  font-family: "Noto Sans KR", sans-serif !important;
  line-height: 110%;
}

.main {
  /* max-width: 1500px; */
  /* height: 100vh; */
}

.appMain {
  position: relative;
  z-index: 1;
}
</style>
