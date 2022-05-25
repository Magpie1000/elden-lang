<template>
  <v-card dark justify="center" min-width="500px" max-width="600px">
    <v-card-text
      class="cousine text-start"
      style="font-size: 22px; font-weight: 200"
      v-html="lineBreakedText"
    >
      <!-- {{ lineBreakedText }} -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GoldenOrderCodeBlock",
  props: ["text"],
  data: () => ({}),
  methods: {
    breakLine(string) {
      return string.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
    logText() {
      console.log(this.text);
    },
  },
  computed: {
    lineBreakedText: function () {
      return this.breakLine(this.text);
    },
  },
  created() {
    console.log(this.text, "받은 텍스트");
  },
};
</script>

<style></style>
