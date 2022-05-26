<template>
  <v-card
    dark
    class="pa-0 ma-0"
    tile
    max-width="600"
    style="overflow-x: hidden"
  >
    <v-row justify="center">
      <v-card-title class="my-7"> Memories of Battle </v-card-title>
    </v-row>
    <v-list-item-group v-model="selectedIndex">
      <v-list-item
        v-for="(scenario, index) in BattleScenarios"
        :key="`scenario` + index"
        two-line
      >
        <v-list-item-content @click.stop="clickScenario(index)">
          <v-list-item-title>{{ scenario.title }}</v-list-item-title>
          <v-list-item-subtitle
            >prints "{{ scenario.subtitle }}"</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <!-- 다이얼로그 -->
    <v-dialog dark v-model="isDialogOpened" max-width="300">
      <v-card>
        <v-card-title class="text-center" style="word-break: keep-all">
          Do you want to remind <br />
          "{{ BattleScenarios[selectedIndex].title }}" <br />battle?
        </v-card-title>
        <v-card-actions>
          <v-btn text @click="isDialogOpened = false">No</v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="clickLoadScenario()">Yes</v-btn>
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
