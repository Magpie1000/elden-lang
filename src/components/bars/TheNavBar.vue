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
        style="font-family: Cinzel; font-size: 40px; cursor: pointer"
        @click="$goToHome()"
      >
        Logo
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        :to="{ name: 'Battle' }"
        style="font-family: Cinzel; font-size: 20px"
        >Battle</v-btn
      >
      <v-btn
        text
        :to="{ name: 'GoldenOrder' }"
        style="font-family: Cinzel; font-size: 20px"
        >The Golden Order</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
  data: () => ({}),
};
</script>

<style></style>
