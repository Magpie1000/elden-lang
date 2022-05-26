<template>
  <div class="TheGoldenOrder text-center" style="min-height: 100vh">
    <v-container
      class="mt-10 pb-15"
      style="background-color: rgba(0, 0, 0, 0.8); border-radius: 1rem"
    >
      <h1 class="title-text pt-10 mt-15">The Golden Order</h1>
      <h2 class="subtitle-text">a.k.a documentation</h2>
      <v-divider dark class="my-9 mx-15" />

      <h2 class="heading-text my-10">Introduction</h2>
      <v-row class="mt-5" justify="center">
        <p class="noto text-start main-text">
          'Elden-Lang' is esolang of 'Brainfxxk', programming language noted for
          its extreme minimalism and was created in 1993 by Urban Müller. You
          can literally program everything with simple 8 letters.
          <br />
          <br />
          You can beat the whole 'Elden ring' game with 6 moves. Roll, R1, R2,
          Jump, Guard, Parry. I know you like spamming R1 or panic-rolling. You
          can do the same with your code too.
          <br />
          <br />
        </p>
      </v-row>

      <h2 class="heading-text mt-15">translation table</h2>
      <golden-order-table class="my-5" />

      <v-divider dark class="my-9 mx-15" />

      <v-container justify-content="center" style="max-width: 800px">
        <h2 class="subtitle-text mt-15">The Golden Order</h2>
        <h3 class="heading-text mt-1">(a.k.a how to code)</h3>
        <v-divider dark class="my-9 mx-15" />
        <h3 class="subheading-text mt-15">Basic Rules</h3>
        <v-row justify="center" class="mt-5">
          <p class="main-text noto text-start">
            1. 'Elden-lang' is case-insensitive. <br />
            2. 'Elden-lang' ignores every codes but 8 reserved words.<br />
          </p>
        </v-row>
        <v-divider dark class="my-9 mx-15" />
        <h3 class="subheading-text mt-15">1. Type a pair of curly brackets</h3>
        <v-row justify="center" class="mt-5">
          <GoldenOrderCodeBlock :text="`{}`" />
        </v-row>
        <v-divider dark class="my-9 mx-15" />
        <h3 class="subheading-text mt-15">2. Choose your enemy.</h3>
        <v-row class="mt-5" justify="center">
          <p class="main-text noto text-start">
            Put it in front of your brackets. <br />
            Your code is going to look like this.<br />
          </p>
        </v-row>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock :text="`Magma Wyrm {}`" />
        </v-row>
        <v-divider dark class="my-9 mx-15" />

        <h3 class="subheading-text mt-15">3. Determine your destiny.</h3>
        <v-row class="mt-5" justify="center">
          <p class="main-text noto text-start">
            There are 3 options available. <br />Put one of them after the
            brackets.<br />
            <br />
            1. YOU DIED.<br />
            2. ENEMY FELLED.<br />
            3. GREAT ENEMY FELLED.
          </p>
        </v-row>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock :text="`Magma Wyrm {\n } ENEMY FELLED.`" />
        </v-row>
        <v-divider dark class="my-9 mx-15" />
        <h3 class="subheading-text mt-15">4. Enjoy</h3>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock
            :text="`Magma Wyrm { \n\n ROLL ROLL ROLL \n SPAM R1 \n PANIC ROLL \n\n} ENEMY FELLED.`"
          />
        </v-row>
        <v-divider dark class="my-9 mx-15" />
        <h3 class="subheading-text mt-15">5. Be creative.</h3>
        <v-row class="mt-5" justify="center">
          <p class="noto text-start main-text">
            Elden-Lang automatically ignores other code but 8 reserved words. So
            BE CREATIVE! Use your imagination. Make your battle epic.
            <br /><br />
            This does exact same job that the previous code does.
          </p>
        </v-row>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock
            :text="`Magma Wyrm { \n\n CAST IRON BODY \n CAST FIREBALL \n SUMMON JELLYFISH \n 
            ROLL ROLL ROLL \n SPAM R1 \n PANIC ROLL \n\n} ENEMY FELLED.`"
          />
        </v-row>
      </v-container>
      <v-divider dark class="my-9 mx-15" />
      <h2 class="subtitle-text mt-15">examples</h2>
      <h3 class="subheading-text mt-15">
        1. The classic 'Hello, world' sample
      </h3>
      <v-row class="mt-5" justify="center">
        <GoldenOrderCodeBlock
          :text="`Magma Wyrm {\n\n summon jellyfish\n\nr2 r2 r2 r2
          r2 r2 r2 r2 \n r2 r2 spam roll\nr2 r2 r2 r2 r2 r2 r2 roll\n r2 r2 r2 r2 r2 r2 
          r2 r2 r2 r2 roll\nr2 r2 r2 roll r2 r1 r1 r1 r1 jump \n\npanic roll \n\nuse flask of tears\n\nr2 r2 guard roll r2 guard 
          r2 r2 r2 r2 r2 r2 r2 \nguard guard r2 r2 r2 guard roll r2 \nr2 guard r1 r1 r2 r2 r2 r2 \nr2 r2 r2 r2 r2 r2 r2 r2 r2 r2 
          r2 guard roll guard r2 r2 r2 guard\njump jump jump jump jump jump\n guard jump jump jump \njump jump jump jump jump guard roll\n r2 guard roll guard
          \n} Enemy felled.`"
        />
      </v-row>
      <h3 class="subheading-text mt-15">2. You died.</h3>
      <v-row class="mt-5" justify="center">
        <GoldenOrderCodeBlock
          :text="`Bloodhound Knight Darriwil { \n\n r2 spam jump jump jump roll 
          r2 r2 r1 \n\npanic roll\n\n r2 r2 r2\nguard spam\n jump roll r2 r2 r2 r2 r2 r2 r2 r1
          \npanic roll\n\nguard r2 r2 r2 r2 \nr2 r2 guard jump spam jump\n jump jump jump roll r2 r1 
          \npanic roll\n\nr2 r2 r2 guard \nr2 spam jump roll r2 r2 \nr2 r1 \n\npanic roll\n
          r2 guard r2 r2 r2 r2 r2 \nguard jump jump jump jump\nguard jump guard spam jump\nroll r2 r2 r2 r1
          \npanic roll\n\nr2 r2 guard\n\n} YOU DIED.`"
        />
      </v-row>
      <h3 class="subheading-text mt-15">3. Enemy felled.</h3>
      <v-row class="mt-5" justify="center">
        <GoldenOrderCodeBlock
          :text="`Starscourge Radahn {\n\n r2 r2 r2 r2 \nspam r2\nr2 r2 r2 roll jump jump\njump r1 
          \npanic roll \n\nuse flask of tears\nuse flask of tears\n\nr2 r2 guard jump spam 
          jump jump jump roll \nr2 r1 \n\npanic roll\n\n r2 r2 guard jump jump jump \njump jump jump jump
          jump jump guard r2 r2\nr2 r2 r2 r2 r2 r2\nguard jump jump spam \njump jump jump roll 
          r2 r1 \n\npanic roll\n\nuse flask of tears\nuse flask of tears\n\nguard jump spam jump 
          jump jump jump roll \nr2 r1 \n\npanic roll\n\nr2 r2 guard r2 \nr2 spam\njump roll r2 r2
          r2 r1 \n\npanic roll\n\n guard jump guard r2\n r2 r2 r2 r2 r2 r2\nguard guard jump 
          jump jump jump jump jump \njump guard jump guard\nspam jump roll r2 r2\nr2 r1 
          \npanic roll\n\n r2 r2 guard \n\n} ENEMY FELLED.`"
        />
      </v-row>
      <v-row class="mt-15" justify="center">
        <default-btn
          @click.native="$goToBattle()"
          text="Start Your own battle"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GoldenOrderTable from "@/components/goldenOrder/GoldenOrderTable.vue";
import GoldenOrderCodeBlock from "@/components/goldenOrder/GoldenOrderCodeBlock.vue";
import DefaultBtn from "@/components/commons/DefaultBtn.vue";

export default {
  name: "GoldenOrder",
  components: {
    GoldenOrderTable,
    GoldenOrderCodeBlock,
    DefaultBtn,
  },
  data: () => ({}),
};
</script>

<style scoped>
.subtitle-text {
  font-size: 40px;
  font-weight: 600;
}

.heading-text {
  font-size: 35px;
  font-weight: 600;
  color: aliceblue;
}

.subheading-text {
  font-size: 25px;
  font-weight: 450;
  color: aliceblue;
}

.main-text {
  max-width: 580px;
  font-size: 20px;
  font-weight: 200;
  line-height: 140%;
}

.TheGoldenOrder {
  color: aliceblue;
}
</style>
