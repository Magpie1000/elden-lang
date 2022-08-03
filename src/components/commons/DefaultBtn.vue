<template>
  <v-btn x-large v-html="text" :style="style" />
</template>

<script>
export default {
  name: "DefaultBtn",
  props: ["text"],
  computed: {
    style: function () {
      let style = "";
      if (this.$vuetify.breakpoint.name !== `xs`) {
        style = `
        min-width: 220px;
        min-height: 70px;
        font-size: 18px;
        font-weight: 800;
        background-color: #dcbf72;
      `;
      } else {
        style = `
        font-size: 14px;
        font-weight: 800;
        background-color: #dcbf72;
      `;
      }
      return style;
    },
  },
};
</script>

<style></style>
