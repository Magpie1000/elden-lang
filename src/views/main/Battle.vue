<template>
  <div class="Battle text-center" style="min-height: 100vh">
    <v-container class="mt-10" style="background-color: rgba(0, 0, 0, 0.8)">
      <h1
        class="py-10 my-10 title-text"
        style="font-size: 80px; font-weight: 600"
      >
        The Battle
      </h1>
      <v-row justify="center">
        <v-textarea
          style="font-size: 27px; max-width: 800px"
          dark
          filled
          color="white"
          name="input-7-4"
          label="Filled textarea"
          v-model="writtenCode"
        ></v-textarea>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Brainfuck from "../../plugins/brainfuck.js";

export default {
  name: "Battle",
  data: function () {
    return {
      writtenCode: "Taurus Demon {\n\n}You Died.",
      compiledCode: "",
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
.Battle {
  color: aliceblue;
}
</style>
