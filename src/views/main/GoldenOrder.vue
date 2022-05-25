<template>
  <div class="TheGoldenOrder text-center" style="min-height: 100vh">
    <v-container
      class="mt-10 pb-15"
      style="background-color: rgba(0, 0, 0, 0.8); border-radius: 1rem"
    >
      <h1 class="py-10 my-15" style="font-size: 80px; font-weight: 600">
        The Golden Order
      </h1>
      <h2 class="my-2 subtitle">Introduction</h2>
      <v-row class="mt-5" justify="center">
        <p
          class="noto text-start"
          style="max-width: 800px; font-size: 22px; font-weight: 200"
        >
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
      <h2 class="mt-15">translation table</h2>
      <golden-order-table class="my-5" />

      <v-container justify-content="center" style="max-width: 800px">
        <h2 class="mt-15">The Golden Order</h2>
        <h3 class="mt-5">(a.k.a how to code)</h3>

        <h3 class="mt-15">1. Type a pair of curly brackets</h3>
        <v-row justify="center" class="mt-5">
          <GoldenOrderCodeBlock :text="`{}`" />
        </v-row>

        <h3 class="mt-15">2. Choose your enemy.</h3>
        <v-row class="mt-5" justify="center">
          <p
            class="noto text-start"
            style="max-width: 800px; font-size: 22px; font-weight: 200"
          >
            Put it in front of your brackets. <br />
            Your code is going to look like this.<br />
          </p>
        </v-row>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock :text="`Taurus demon {}`" />
        </v-row>
        <v-row class="mt-5" justify="center">
          <p
            class="noto text-start"
            style="max-width: 800px; font-size: 22px; font-weight: 200"
          >
            Here are some suggestions for you.<br />
            <br />
            1. Prowling Magus and Congregation <br />
            2. Covetous Demon <br />
          </p>
        </v-row>

        <h3 class="mt-15">3. Determine your destiny.</h3>
        <v-row class="mt-5" justify="center">
          <p
            class="noto text-start"
            style="max-width: 800px; font-size: 22px; font-weight: 200"
          >
            There are 3 options available. <br />Put one of them after the
            brackets.<br />
            <br />
            1. YOU DIED.<br />
            2. ENEMY FELLED.<br />
            3. GREAT ENEMY FELLED.
          </p>
        </v-row>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock :text="`Taurus demon {\n } Enemy felled.`" />
        </v-row>

        <h3 class="mt-15">4. Enjoy</h3>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock
            :text="`Taurus demon { \n\n ROLL ROLL ROLL \n SPAM R1 \n PANIC ROLL \n\n} Enemy felled.`"
          />
        </v-row>

        <h3 class="mt-15">5. Be creative.</h3>
        <v-row class="mt-5" justify="center">
          <p
            class="noto text-start"
            style="max-width: 800px; font-size: 22px; font-weight: 200"
          >
            Elden-Lang automatically ignores other code but 8 reserved words.
            <br />
            So be creative. Use your imagination. Make your battle epic.
            <br /><br />
            This does exact same job that the previous code does.
          </p>
        </v-row>
        <v-row class="mt-5" justify="center">
          <GoldenOrderCodeBlock
            :text="`Taurus demon { \n\n CAST IRON BODY \n CAST FIREBALL \n SUMMON JELLYFISH \n 
            ROLL ROLL ROLL \n SPAM R1 \n PANIC ROLL \n\n} Enemy felled.`"
          />
        </v-row>

        <h2 class="mt-15">examples</h2>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import GoldenOrderTable from "@/components/goldenOrder/GoldenOrderTable.vue";
import GoldenOrderCodeBlock from "@/components/goldenOrder/GoldenOrderCodeBlock.vue";

export default {
  name: "GoldenOrder",
  components: {
    GoldenOrderTable,
    GoldenOrderCodeBlock,
  },
  data: () => ({}),
};
</script>

<style scoped>
.TheGoldenOrder {
  color: aliceblue;
}

/* .subtitle {
  font-size: "30px" !important; */
/* } */
</style>
