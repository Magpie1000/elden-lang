<template>
  <v-btn
    x-large
    v-html="text"
    style="
      min-width: 220px;
      min-height: 70px;
      font-size: 18px;
      font-weight: 800;
      background-color: #dcbf72;
    "
  />
</template>

<script>
// background-color: aliceblue;
// background-color: #dcbf72;
export default {
  name: "DefaultBtn",
  props: ["text"],
};
</script>

<style></style>
