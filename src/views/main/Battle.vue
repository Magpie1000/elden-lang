<template>
  <div class="Battle text-center" style="min-height: 100vh">
    <v-container
      class="mt-10 pb-15"
      style="background-color: rgba(0, 0, 0, 0.8); border-radius: 1rem"
    >
      <h1 class="title-text pt-10">The Battle</h1>
      <h2 class="subtitle-text">a.k.a code</h2>
      <v-row class="my-10" justify="center">
        <default-btn
          @click.native.stop="isExampleDialogShown = true"
          class="mr-5"
          text="LOAD EXAMPLES"
        />
        <default-btn
          @click.native.stop="isCommandDialogShown = true"
          text="COMMANDS"
        />
      </v-row>

      <!-- TextFields -->
      <v-divider dark class="my-9 mx-15" />
      <v-row justify="center">
        <div v-gamepad:button-a="pressedA" />
        <div v-gamepad:button-b="pressedB" />
        <div v-gamepad:button-x="pressedX" />
        <div v-gamepad:button-y="pressedY" />
        <div v-gamepad:trigger-right="pressedR2" />
        <div v-gamepad:trigger-left="pressedL2" />
        <div v-gamepad:shoulder-left="pressedR1" />
        <div v-gamepad:shoulder-right="pressedL1" />
        <v-textarea
          style="font-size: 27px; max-width: 800px"
          rows="25"
          dark
          filled
          color="white"
          placeholder="Your battle starts here."
          v-model="writtenCode"
        ></v-textarea>
      </v-row>
      <!-- Btn: Run Code  -->
      <default-btn @click.native="runCode()" class="mb-15" text="run code" />
    </v-container>
    <!--dialogues -->
    <!-- 1. Load Examples -->
    <v-dialog v-model="isExampleDialogShown" max-width="600">
      <battle-example-dialog
        :BattleScenarios="BattleScenarios"
        @clickLoadScenario="clickLoadScenario"
      />
    </v-dialog>
    <!-- 2. Commands -->
    <v-dialog v-model="isCommandDialogShown" max-width="600">
      <golden-order-table />
    </v-dialog>
    <!-- 3. Code-Run Dialog -->
    <v-dialog v-model="isCodeRunDialogShown" max-width="600">
      <battle-code-run-dialog
        :compiledCode="compiledCode"
        :bfResult="bfResult"
        :ending="ending"
      />
    </v-dialog>
    <!-- Pop-up Command Sheet -->
    <battle-command-popup v-model="open">
      <golden-order-table />
    </battle-command-popup>
  </div>
</template>

<script>
import DefaultBtn from "@/components/commons/DefaultBtn.vue";
import GoldenOrderTable from "@/components/goldenOrder/GoldenOrderTable.vue";
import BattleCommandPopup from "@/components/main/battle/BattleCommandPopup.vue";
import BattleExampleDialog from "@/components/main/battle/BattleExampleDialog.vue";
import BattleCodeRunDialog from "@/components/main/battle/BattleCodeRunDialog.vue";
import { translateELtoBF } from "@/plugins/EldenLangTranslator.js";
import BattleScenarios from "@/components/main/battle/BattleScenarios.js";
import { bf } from "@/plugins/brainf.js";

export default {
  name: "Battle",
  components: {
    DefaultBtn,
    GoldenOrderTable,
    BattleCommandPopup,
    BattleExampleDialog,
    BattleCodeRunDialog,
  },
  data: function () {
    return {
      writtenCode: "",
      compiledCode: "",
      bfResult: "",
      isCommandDialogShown: false,
      isExampleDialogShown: false,
      isCodeRunDialogShown: false,
      ending: "",
      open: false,
      BattleScenarios: BattleScenarios,
      text_text: "ㅁㄴㅇㅁㄴㅇ",
    };
  },

  // var ButtonNames = ['button-a', 'button-b', // 'button-x', 'button-y',
  // 'shoulder-left', 'shoulder-right', 'trigger-left', 'trigger-right',
  // 'button-select', 'button-start', 'left-stick-in', 'right-stick-in',
  // 'button-dpad-up', 'button-dpad-down', 'button-dpad-left',
  // 'button-dpad-right', 'vendor'];
  methods: {
    clickLoadScenario: function (index) {
      this.isExampleDialogShown = false;
      this.writtenCode = this.BattleScenarios[index].code;
    },
    runCode: function () {
      if (this.checkELValidation()) {
        const parsedCode = this.parsedEL[1].toLowerCase();
        const bFcode = translateELtoBF(parsedCode);
        this.compiledCode = bFcode;
        this.bfResult = bf(bFcode);
        this.ending = this.parsedEL[2].trim().toLowerCase();
        this.isCodeRunDialogShown = true;
      }
    },
    pressedA: function () {
      this.writtenCode += "jump ";
      console.log("콘솔!");
    },
    pressedB: function () {
      this.writtenCode += "roll ";
      console.log("콘솔!");
    },
    pressedX: function () {
      this.writtenCode += "spam";
      console.log("콘솔!");
    },
    pressedY: function () {
      this.writtenCode += "panic";
      console.log("콘솔!");
    },
    pressedR1: function () {
      this.writtenCode += "R1 ";
      console.log("콘솔!");
    },
    pressedR2: function () {
      this.writtenCode += "R2 ";
      console.log("콘솔!");
    },
    pressedL1: function () {
      this.writtenCode += "guard ";
      console.log("콘솔!");
    },
    pressedL2: function () {
      this.writtenCode += "parry ";
      console.log("콘솔!");
    },

    checkELValidation: function () {
      if (this.parsedEL.length !== 3) {
        // message: you only want to have one curly brackets {}
        return false;
      }
      const ending = this.parsedEL[2].trim().toLowerCase();
      if (
        ending !== "you died." &&
        ending !== "enemy felled." &&
        ending !== "great enemy felled."
      ) {
        // message: your battle should end with one of three.
        // 1. "you died." &&
        // 2. "enemy felled." &&
        // 3. "great enemy felled."
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
  computed: {
    parsedEL: function () {
      const parsedEldenLan = this.writtenCode.split(/[{,}]/);
      return parsedEldenLan;
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};

// var ButtonNames = ['button-a', 'button-b',
// 'button-x', 'button-y', 'shoulder-left', 'shoulder-right',
// 'trigger-left', 'trigger-right', 'button-select', 'button-start',
// 'left-stick-in', 'right-stick-in', 'button-dpad-up', 'button-dpad-down', 'button-dpad-left',
// 'button-dpad-right', 'vendor'];
</script>

<style scoped>
.subtitle-text {
  font-size: 35px;
  font-weight: 600;
}

.Battle {
  color: aliceblue;
}
</style>
