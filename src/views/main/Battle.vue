<template>
  <div class="Battle text-center" style="min-height: 120vh">
    <v-container
      class="mt-10 pb-15"
      style="background-color: rgba(0, 0, 0, 0.8); border-radius: 1rem"
    >
      <h1 class="title-text pt-10 mt-15">The Battle</h1>
      <h2 class="subtitle-text">a.k.a code</h2>
      <v-row class="my-10" justify="center">
        <default-btn class="mr-5" text="LOAD EXAMPLES" />
        <!-- <default-btn @click.native.stop="open = true" text="COMMANDS" /> -->
        <default-btn @click.native.stop="dialog = true" text="COMMANDS" />
      </v-row>

      <v-divider dark class="my-9 mx-15" />
      <v-row justify="center">
        <v-textarea
          style="font-size: 27px; max-width: 800px"
          rows="25"
          dark
          filled
          color="white"
          placeholder="Your journey starts here."
          v-model="writtenCode"
        ></v-textarea>
      </v-row>
      <default-btn class="mb-15" text="run code" />
      <battle-command-popup v-model="open">
        <golden-order-table />
      </battle-command-popup>
    </v-container>
    <v-dialog v-model="dialog" max-width="600">
      <golden-order-table />
    </v-dialog>
  </div>
</template>

<script>
import Brainfuck from "../../plugins/brainfuck.js";
import DefaultBtn from "@/components/commons/DefaultBtn.vue";
import GoldenOrderTable from "@/components/goldenOrder/GoldenOrderTable.vue";
import BattleCommandPopup from "@/components/main/battle/BattleCommandPopup.vue";

export default {
  name: "Battle",
  components: {
    DefaultBtn,
    GoldenOrderTable,
    BattleCommandPopup,
  },
  data: function () {
    return {
      writtenCode: "Taurus Demon {\n\n}You Died.",
      compiledCode: "",
      dialog: false,
      open: false,
    };
  },
  methods: {
    runBF: function () {
      let program = new Brainfuck(this.writtenCode);
      let output = "";
      program.write = function (charCode) {
        output += String.fromCharCode(charCode);
      };
      program.read = function () {
        return String.charCodeAt(prompt("Input"), 0);
      };
      program.run();
      this.compiledCode = output;
      return output;
    },
  },
  watch: {
    writtenCode: function () {
      console.log(this.runBF());
    },
  },
};
</script>

<style scoped>
.subtitle-text {
  font-size: 40px;
  font-weight: 600;
}

.Battle {
  color: aliceblue;
}
</style>
