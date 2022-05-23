<template>
  <div class="mb-0" style="min-height: 90vh">
    <v-card
      style="background-color: rgba(0, 0, 0, 0.8)"
      class="text-center py-10 align-center"
      min-height="450"
    >
      <v-card-title
        class="justify-center pt-15 mt-5 mb-10"
        style="
          font-family: Cinzel;
          font-size: 80px;
          font-weight: 600;
          color: #dcbf72;
        "
        >Elden-Lang</v-card-title
      >
      <v-card-text class="pt-2 pb-5" style="font-size: 40px; color: white"
        >Prepare to debug</v-card-text
      >
      <v-card-actions class="justify-center pt-8">
        <v-btn x-large>Epic Boss Fight</v-btn>
        <v-btn x-large>The Golden Order</v-btn>
      </v-card-actions>
    </v-card>
    <div class="pt-10" style="background-color: rgba(0, 0, 0, 0.5)">
      <v-card
        class="justify-center py-5"
        min-height="300"
        style="background-color: rgba(0, 0, 0, 0); color: white"
      >
        <v-row class="justify-center align-self-center">
          <v-card-title style="font-size: 40px">
            Need an<br />
            epic bossfight?
          </v-card-title>
          <v-img
            max-width="300"
            src="https://dcimg4.dcinside.co.kr/viewimage.php?id=2bafdf2bf6dd3eb279bec4b0&no=24b0d769e1d32ca73feb80fa11d028315f52e6e1fc8bbd14245a9b9fd2ad519786299874f0e5852dcefd12920eb4d3a3e503cc024c392ab9d40807186b803f15d95b2e70dd67e7"
          />
        </v-row>
      </v-card>
      <v-card
        class="justify-center py-5"
        min-height="300"
        style="background-color: rgba(0, 0, 0, 0); color: white"
      >
        <v-row class="justify-center align-self-center pt-10">
          <v-img
            max-width="300"
            src="https://img-9gag-fun.9cache.com/photo/arGv6B0_460s.jpg"
          />
          <v-card-title style="font-size: 40px">
            Have to fight <br />against bugs?
          </v-card-title>
        </v-row>
      </v-card>
      <v-card
        class="justify-center text-center py-5"
        min-height="300"
        style="background-color: rgba(0, 0, 0, 0); color: white"
      >
        <v-row class="justify-center align-self-center">
          <v-card-title class="text-center" style="font-size: 40px">
            Life is TOO short. <br />You need 'Elden-Lang'.
          </v-card-title>
          <v-img
            max-width="300"
            src="https://preview.redd.it/0gp7pfwvwrk81.png?width=640&crop=smart&auto=webp&s=e702ede14fd71311dce1f328fb031b4c82679b2d"
          />
        </v-row>
      </v-card>
      <v-card
        class="justify-center align-center text-center py-5"
        min-height="300"
        style="background-color: rgba(0, 0, 0, 0); color: white"
      >
        <v-btn x-large class="align-self-center mt-15"
          >Fight Against demigods</v-btn
        >
      </v-card>
      <v-card
        class="justify-center align-center text-center py-5"
        min-height="300"
        style="background-color: rgba(0, 0, 0, 0); color: white"
      >
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style>
.backdrop {
  z-index: -1;
  position: absolute;
  margin-top: -9rem;
  margin-left: -5rem;
  left: 0;
  top: 0;
  width: 115vw;
}
.backdrop-img {
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.852) 60%
  );
  width: 100%;
}
</style>
