<template>
  <v-card
    dark
    class="pa-0 ma-0"
    tile
    max-width="600"
    style="overflow-x: hidden"
  >
    <v-row justify="center">
      <v-card-title class="my-15" style="font-size: 30px">
        Memories of Battle
      </v-card-title>
    </v-row>
    <v-list-item-group v-model="selectedIndex">
      <v-list-item
        v-for="(scenario, index) in BattleScenarios"
        :key="`scenario` + index"
        two-line
      >
        <v-list-item-content @click.stop="clickScenario(index)">
          <v-list-item-title style="font-size: 25px">{{
            scenario.title
          }}</v-list-item-title>
          <v-list-item-subtitle style="font-size: 20px"
            >prints "{{ scenario.subtitle }}"</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <!-- 다이얼로그 -->
    <v-dialog dark v-model="isDialogOpened" max-width="500">
      <v-card>
        <v-card-title
          class="text-center mx-2 my-10"
          style="word-break: keep-all; font-size: 29px"
        >
          Do you want to remind <br />
          "{{ BattleScenarios[selectedIndex].title }}" <br />battle?
        </v-card-title>
        <v-card-actions class="pb-5">
          <v-btn
            x-large
            text
            @click="isDialogOpened = false"
            style="font-size: 20px"
            >No</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            x-large
            text
            style="font-size: 20px; background-color: #dcbf72; color: black"
            @click="clickLoadScenario()"
            >Yes</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "BattleExampleDialog",
  props: ["BattleScenarios"],
  data: () => ({
    isDialogOpened: false,
    selectedIndex: 0,
  }),
  methods: {
    clickScenario: function (index) {
      this.selectedIndex = index;
      this.isDialogOpened = true;
    },
    clickLoadScenario: function () {
      this.$emit("clickLoadScenario", this.selectedIndex);
      this.isDialogOpened = false;
    },
  },
};
</script>

<style></style>
