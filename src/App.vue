<template>
  <v-app class="appMain">
    <v-main class="main container">
      <div class="backdrop">
        <img
          :src="`https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/UAnLUUMdxA9cow8TEe8IfhuC.png`"
          class="backdrop-img"
          alt="backdrop image"
        />
        <div
          style="background-color: rgba(0, 0, 0, 0.8); align-items: stretch"
        ></div>
      </div>
      <the-nav-bar />
      <router-view />
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from "@/components/bars/TheNavBar.vue";
import TheFooter from "./components/bars/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavBar,
    TheFooter,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

#app {
  background-color: #272727 !important;
  font-family: "Cinzel", serif;
  line-height: 70%;
}

.noto {
  font-family: "Noto Sans KR", sans-serif !important;
  line-height: 110%;
}

.main {
  max-width: 1500px;
  height: 100vh;
}

.backdrop {
  z-index: -1;
  position: absolute;
  margin-top: -9rem;
  left: 0;
  top: 0;
  width: 100vw;
}
.backdrop-img {
  width: 100%;
}

.appMain {
  position: relative;
  z-index: 1;
}

.appMain:after {
  /* background-image:url(https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/UAnLUUMdxA9cow8TEe8IfhuC.png); */
  /* top:0;
    left:0;
    position:absolute;
    background-size:cover; */
  /* opacity:0.5!important; */
  /* mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); */
  /* filter:alpha(opacity=50); */
  /* z-index:-1;
    content:"";
    width:100%;
    height:100vh; */
}
</style>
