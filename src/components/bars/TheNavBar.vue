<template>
  <div>
    <v-app-bar
      dense
      dark
      min-height="60"
      class="pt-1"
    >
      <v-toolbar-title 
        class="font-weight-medium " 
        style="font-family: Cinzel; font-size: 40px"
      >Elden-Lang</v-toolbar-title>
      <v-spacer />
      <v-btn text style="font-family: Cinzel">Fight</v-btn>
      <v-btn text style="font-family: Cinzel">The Golden Order</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar',
    data: () => ({
    }),
}
</script>

<style>


</style>