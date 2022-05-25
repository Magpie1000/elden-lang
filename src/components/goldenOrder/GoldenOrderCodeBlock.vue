<template>
  <v-card dark justify="center" min-width="400px" max-width="600px">
    <v-card-text
      class="cousine text-start ma-4"
      style="font-size: 22px; font-weight: 200"
      v-html="lineBreakedText"
    >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GoldenOrderCodeBlock",
  props: ["text"],
  data: () => ({}),
  methods: {},
  computed: {
    lineBreakedText: function () {
      return this.$breakLine(this.text);
    },
  },
};
</script>

<style></style>
