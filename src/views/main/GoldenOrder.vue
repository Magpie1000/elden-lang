<template>
  <div class="TheGoldenOrder text-center" style="min-height: 100vh">
    <v-container
      class="mt-10 pb-15"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <h1 class="py-10 my-15" style="font-size: 80px; font-weight: 600">
        The Golden Order
      </h1>
      <h2 class="my-2 subtitle">Introduction</h2>
      <v-row class="mt-5" justify="center">
        <p
          class="noto text-start"
          style="max-width: 800px; font-size: 22px; font-weight: 200"
        >
          'Elden-Lang' is esolang of 'Brainfxxk', programming language noted for
          its extreme minimalism and was created in 1993 by Urban Müller. You
          can literally program everything with simple 8 letters.
          <br />
          <br />
          You can beat the whole 'Elden ring' game with 6 moves. Roll, R1, R2,
          Jump, Guard, Parry. I know you like spamming R1 or panic-rolling. You
          can do the same with your code too.
          <br />
          <br />
        </p>
      </v-row>
      <h2 class="mt-15">translation table</h2>
      <golden-order-table class="my-5" />
      <h2 class="mt-15">The Golden Order</h2>
      <h3 class="mt-5">(a.k.a coding conventions)</h3>

      <h3 class="mt-15">1. Start your battle with epic boss.</h3>
      <v-row class="mt-5" justify="center">
        <p
          class="noto text-start"
          style="max-width: 800px; font-size: 22px; font-weight: 200"
        >
          Go for your favorite boss! for examples...
          <br />
          <br />
          You can beat the whole 'Elden ring' game with 6 moves. Roll, R1, R2,
          Jump, Guard, Parry. I know you like spamming R1 or panic-rolling. You
          can do the same with your code too.
          <br />
          <br />
        </p>
      </v-row>

      <h3 class="mt-15">2. Determine your destiny.</h3>
      <v-row class="mt-5" justify="center">
        <p
          class="noto text-start"
          style="max-width: 800px; font-size: 22px; font-weight: 200"
        >
          <br />
          <br />
        </p>
      </v-row>

      <h2 class="mt-15">examples</h2>
    </v-container>
  </div>
</template>

<script>
import GoldenOrderTable from "@/components/goldenOrder/GoldenOrderTable.vue";

export default {
  name: "GoldenOrder",
  components: {
    GoldenOrderTable,
  },
  data: () => ({}),
};
</script>

<style scoped>
.TheGoldenOrder {
  color: aliceblue;
}

.subtitle {
  font-size: "30px";
}
</style>
