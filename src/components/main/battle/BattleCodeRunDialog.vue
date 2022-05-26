<template>
  <v-card
    v-if="compiledCode"
    style="
      overflow-x: hidden;
      background-color: rgba(0, 0, 0, 1);
      color: aliceblue;
    "
  >
    <v-row justify="center">
      <v-card-title class="my-10" style="font-size: 30px">Battle</v-card-title>
    </v-row>
    <v-row justify="center">
      <v-card
        :img="imgUrl"
        min-height="300"
        min-width="400"
        :style="
          reversed
            ? '-webkit-transform: scaleX(-1); transform: scaleX(-1); border:1px solid grey'
            : 'border:1px solid grey'
        "
      />
    </v-row>
    <v-row class="mt-10 my-5" justify="center">
      <v-progress-linear
        color="white"
        class="mx-15"
        dark
        :value="progression"
      />
    </v-row>
    <v-divider dark class="my-9 mx-2" />
    <v-row justify="center">
      <v-card-title style="font-size: 30px">Result</v-card-title>
    </v-row>
    <golden-order-code-block class="ma-5 mb-15" :text="bfResult" />
  </v-card>
</template>

<script>
import GoldenOrderCodeBlock from "../../goldenOrder/GoldenOrderCodeBlock.vue";

const imgTable = {
  // roll
  ">": "https://1.bp.blogspot.com/-qI12YK5rzDk/W64Dz9DKZdI/AAAAAAABPJ4/YwMEVyDlGv40te9_R6c1YT4tyiMFCil6gCLcBGAs/s350/ninja_chugaeri.png",
  // r1
  "<": "https://2.bp.blogspot.com/-FPlJFdf2PCI/VsGsTsBtAGI/AAAAAAAA3_E/rpaD1WNraI4/s400/ninja_syuriken_man.png",
  // r2
  "+": "https://3.bp.blogspot.com/-Yzkkg1TNj8Y/VtWt025IBXI/AAAAAAAA4Ro/oxr9S45MihE/s800/ninja_kaginawa.png",
  // jump
  "-": "https://4.bp.blogspot.com/-LR15Oq6EtMU/WIHlLRIvmDI/AAAAAAABBNc/jkw1qsdLeIAIgD0An9qA7b3wYkWKFQMsACLcB/s180-c/ninja_kabe.png",
  // guard
  ".": "https://1.bp.blogspot.com/-0nob6XcvhNg/XQNuhAfaLZI/AAAAAAABTIw/NtV3rF3zX5wQrX8RV5-ncADArIKnBSWaACLcBGAs/s180-c/ninja_kakuremi.png",
  // parry
  ",": "https://4.bp.blogspot.com/-B1UcHm1jM7I/V0zS5kLrlWI/AAAAAAAA7Dk/A0haIWiM3e8A3UbrmctX1TwcYBpjTUEyQCLcB/s180-c/ninja_kemuridama.png",
  // spam
  "[": "https://1.bp.blogspot.com/-0e99en4V-PI/VsGsSG6jBKI/AAAAAAAA3-w/epwxeq31bAE/s180-c/ninja_kumogakure.png",
  // panic
  "]": "https://1.bp.blogspot.com/-NtU5JNgVjWU/XdttpL8mjPI/AAAAAAABWKc/kkAwHanXFaYHmtokY-z3VtO6SOsBi8BRwCNcBGAsYHQ/s300/ninja_man_face3_sad.png",
};

export default {
  name: "BattleCodeRunDialog",
  components: { GoldenOrderCodeBlock },
  props: ["compiledCode", "bfResult", "ending"],
  data: () => ({
    imgUrl:
      "https://4.bp.blogspot.com/-m89hBAoaDQo/Ws2vpB-1mlI/AAAAAAABLXA/u26J1oHQnQItAu7m6wxhK29U2Mz2jLMVACLcBGAs/s800/ninja_shinobiashi.png",
    progression: 0,
    reversed: false,
    lastMove: null,
    currentFrame: 0,
    finalFrame: 0,
  }),
  methods: {
    changeImg: function () {
      if (this.currentFrame === this.finalFrame) {
        this.endBattle();
        return;
      }
      const syl = this.compiledCode[this.currentFrame];
      if (this.lastMove === syl && this.reversed === false) {
        this.reversed = true;
      } else {
        this.reversed = false;
      }
      this.imgUrl = imgTable[syl];
      this.lastMove = syl;
      this.currentFrame++;
      this.progression = (this.currentFrame / this.finalFrame) * 100;
      setTimeout(this.changeImg, 150);
    },
    endBattle: function () {
      switch (this.ending) {
        case "enemy felled.":
          this.imgUrl =
            "https://1.bp.blogspot.com/-ufCJ3ZHUQLE/Xdttog7uuCI/AAAAAAABWKU/Mf019u5dKIEuWZ6rkdzIEuYvrvbnSOHsgCNcBGAsYHQ/s300/ninja_man_face1_smile.png";
          break;
        case "great enemy felled.":
          this.imgUrl =
            "https://1.bp.blogspot.com/-sadFj2bqST8/XdttprUHo2I/AAAAAAABWKg/IzElobqXJhA6s1Ydw4XF3BcY8EUNxy6EACNcBGAsYHQ/s300/ninja_man_face4_laugh.png";
          break;
        default:
          this.imgUrl =
            "https://4.bp.blogspot.com/-uc3uCTzTSME/UYoNImF9RBI/AAAAAAAARnI/bP0uBN8V1BQ/s800/halloween_grave.png";
      }
    },
  },
  watch: {
    compiledCode() {
      this.finalFrame = this.compiledCode.length;
      this.currentFrame = 0;
      this.changeImg();
    },
  },
  mounted() {
    this.finalFrame = this.compiledCode.length;
    this.currentFrame = 0;
    this.changeImg();
  },
  // updated() {
  //   this.finalFrame = this.compiledCode.length;
  //   this.currentFrame = 0;
  //   this.changeImg();
  // },
};
</script>

<style scoped></style>
