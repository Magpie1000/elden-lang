<template>
  <v-row class="justify-center">
    <v-data-table
      disable-sort
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
        { text: "Brain-fxxk", value: "brainfuck" },
        { text: "meaning", value: "meaning" },
      ],
      languages: [
        {
          name: "roll",
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

<style scoped>
.v-data-table::v-deep th {
  font-size: 22px !important;
  padding-top: 1em !important;
  padding-bottom: 1em !important;
  text-align: center !important;
}
.v-data-table::v-deep td {
  font-size: 16px !important;
}

.v-data-table::v-deep td:nth-child(1) {
  font-size: 20px !important;
  text-align: center !important;
}

.v-data-table::v-deep td:last-child {
  font-size: 15px !important;
  font-family: "Noto Sans";
}

.v-data-table::v-deep td:nth-child(2) {
  font-size: 23px !important;
  font-family: "Noto Sans";
  text-align: center !important;
}
</style>
