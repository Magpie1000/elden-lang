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
import { translateELtoBF } from "@/plugins/EldenLangTranslator.js";
export default {
  name: "Battle",
  components: {
    DefaultBtn,
    GoldenOrderTable,
    BattleCommandPopup,
  },
  data: function () {
    return {
      writtenCode: "",
      compiledCode: "",
      dialog: false,
      open: false,
    };
  },
  methods: {
    runCode: function () {
      if (this.checkELValidation()) {
        const parsedCode = this.parsedEL[1].toLowerCase();
        const bFcode = translateELtoBF(parsedCode);
        console.log(this.runBF(bFcode));
        console.log(bFcode);
        // this.translate(this.parsedEL[1]);
        // console.log(this.translateELtoBF(this.parsedEL[1]));
        // console.log(translateELtoBF("spam"));
        // console.log(this.translateELtoBF(this.parsedEL[1]));
        // this.runBF(this.parsedEL[1]);
      }
    },
    runBF: function (code) {
      let program = new Brainfuck(code);
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
    checkELValidation: function () {
      if (this.parsedEL.length !== 3) {
        // console.log(123);
        return false;
      }
      // const starting = this.parsedEL[0].trim().toLowerCase();
      const ending = this.parsedEL[2].trim().toLowerCase();
      if (
        ending !== "you died." &&
        ending !== "enemy felled." &&
        ending !== "great enemy felled."
      ) {
        return false;
      }

      let opens = false;
      let closes = false;
      for (let char in this.writtenCode) {
        if (char === "{") {
          if (opens === true || closes === true) {
            return false;
          }
          opens = true;
        } else if (char === "}") {
          if (!opens || closes) {
            return false;
          }
          closes = true;
        }
      }
      return true;
    },
  },
  watch: {
    writtenCode: function () {
      this.runCode();
    },
  },
  computed: {
    parsedEL: function () {
      const parsedEldenLan = this.writtenCode.split(/[{,}]/);
      return parsedEldenLan;
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
