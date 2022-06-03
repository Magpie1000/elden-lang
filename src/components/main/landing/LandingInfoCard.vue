<template>
  <v-row class="justify-center">
    <v-card
      class="justify-center py-5 mt-5"
      min-height="300"
      style="background-color: rgba(0, 0, 0, 0); color: white"
    >
      <v-row class="justify-center align-self-center">
        <v-card-title
          v-if="isLefty || $vuetify.breakpoint.name === `xs`"
          v-html="parsedTitle"
          class="mr-10"
          style="font-size: 40px"
        >
        </v-card-title>
        <v-card min-height="200" min-width="300" :img="imgUrl"></v-card>
        <v-card-title
          v-if="!isLefty && $vuetify.breakpoint.name !== `xs`"
          v-html="parsedTitle"
          class="mr-10"
          style="font-size: 40px"
        >
        </v-card-title>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "LandingInfoCard",
  props: ["title", "imgUrl", "isLefty"],

  computed: {
    parsedTitle: function () {
      return this.$breakLine(this.title);
    },
  },
};
</script>

<style></style>
