<template>
  <div>
    <v-app-bar
      app
      dense
      dark
      min-height="60"
      class="pt-1"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <v-toolbar-title
        class="font-weight-medium"
        style="
          font-family: Cinzel;
          font-size: 40px;
          cursor: pointer;
          color: #dcbf72;
          font-weight: 1000 !important;
        "
        @click="$goToHome()"
      >
        EL
      </v-toolbar-title>
      <v-spacer />
      <!-- 모바일 사이즈 - 햄버거 버튼 -->
      <v-menu v-if="$vuetify.breakpoint.name === `xs`" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list dark>
          <v-list-item>
            <v-btn
              text
              @click="scrollToTop('Battle')"
              :to="{ name: 'Battle' }"
              style="font-family: Cinzel; font-size: 20px"
              >Battle</v-btn
            >
          </v-list-item>
          <v-list-item>
            <v-btn
              text
              :to="{ name: 'GoldenOrder' }"
              style="font-family: Cinzel; font-size: 20px"
              @click="scrollToTop('GoldenOrder')"
              >The Golden Order</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- 그 외 -->
      <v-btn
        v-if="$vuetify.breakpoint.name !== `xs`"
        text
        @click="scrollToTop('Battle')"
        :to="{ name: 'Battle' }"
        style="font-family: Cinzel; font-size: 20px"
        >Battle</v-btn
      >
      <v-btn
        v-if="$vuetify.breakpoint.name !== `xs`"
        text
        :to="{ name: 'GoldenOrder' }"
        style="font-family: Cinzel; font-size: 20px"
        @click="scrollToTop('GoldenOrder')"
        >The Golden Order</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
  data: () => ({}),
  methods: {
    scrollToTop: function (routeName) {
      if (routeName === this.$route.name) {
        window.scroll(0, 0);
      }
    },
  },
};
</script>

<style></style>
