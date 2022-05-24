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
          style="max-width: 800px; font-size: 22px; font-weight: 300"
        >
          'Elden-lang' is esolang of 'Brainfxxk', programming language noted for
          its extreme minimalism and was created in 1993 by Urban Müller.
          <br />
          <br />
          You can code with 8 basic moves of elden-ring: Roll,R1, R2, Jump,
          Guard, Parry. You can also panic-doing or spam one of those.
        </p>
      </v-row>
      <h2 class="mt-15">translation table</h2>

      <golden-order-table class="my-5" />
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
  data: () => ({
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
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
