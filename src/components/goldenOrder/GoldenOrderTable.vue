<template>
  <v-row class="justify-center">
    <v-data-table
      :headers="headers"
      :items="languages"
      class="elevation-1"
      hide-default-footer
      dark
      style="max-width: 600px"
    ></v-data-table>
  </v-row>
</template>

<script>
export default {
  name: "GoldenOrderTable",
  data() {
    return {
      headers: [
        {
          text: "Elden-Lang",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "Brainfxxk", value: "brainfuck" },
        { text: "meaning", value: "meaning" },
      ],
      languages: [
        {
          name: "Dodge",
          brainfuck: ">",
          meaning:
            "Increment the data pointer (to point to the next cell to the right).",
        },
        {
          name: "R1",
          brainfuck: "<",
          meaning:
            "Decrement the data pointer (to point to the next cell to the left).",
        },
        {
          name: "R2",
          brainfuck: "+",
          meaning: "Increment (increase by one) the byte at the data pointer.",
        },
        {
          name: "Jump",
          brainfuck: "-",
          meaning: "Decrement (decrease by one) the byte at the data pointer.",
        },
        {
          name: "Guard",
          brainfuck: ".",
          meaning: "Output the byte at the data pointer.",
        },
        {
          name: "Parry",
          brainfuck: ",",
          meaning:
            "Accept one byte of input, storing its value in the byte at the data pointer.",
        },
        {
          name: "spam",
          brainfuck: "[",
          meaning:
            "If the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.",
        },
        {
          name: "panic",
          brainfuck: "]",
          meaning:
            "	If the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.",
        },
      ],
    };
  },
};
</script>

<style></style>
