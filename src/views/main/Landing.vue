<template>
  <div class="mb-0" style="min-height: 90vh">
    <v-card
      style="background-color: rgba(0, 0, 0, 0.8)"
      class="text-center py-10 align-center"
      min-height="450"
    >
      <v-card-title class="justify-center pt-15 mt-5 mb-10 title-text"
        >Elden-Lang</v-card-title
      >
      <v-card-text
        class="pt-2 pb-5"
        style="font-size: 40px; color: white; line-height: 70%"
        >Progressive turing-complete<br /><br />
        progaming langamage
      </v-card-text>
      <v-card-actions class="justify-center pt-8">
        <v-btn x-large @click="$goToBattle()">
          Epic Boss Battle<br />(code)
        </v-btn>
        <v-btn x-large @click="$goToGoldenOrder()">
          The Golden Order<br />(documentation)
        </v-btn>
      </v-card-actions>
    </v-card>
    <!--  -->
    <div class="pt-10" style="background-color: rgba(0, 0, 0, 0.5)">
      <v-container>
        <landing-info-card
          :title="`want epic \n boss battles?`"
          :isLefty="true"
          :imgUrl="`https://dcimg4.dcinside.co.kr/viewimage.php?id=2bafdf2bf6dd3eb279bec4b0&no=24b0d769e1d32ca73feb80fa11d028315f52e6e1fc8bbd14245a9b9fd2ad519786299874f0e5852dcefd12920eb4d3a3e503cc024c392ab9d40807186b803f15d95b2e70dd67e7`"
        />
        <landing-info-card
          :title="`dealing\n with bugs?`"
          :isLefty="false"
          :imgUrl="`https://img-9gag-fun.9cache.com/photo/arGv6B0_460s.jpg`"
        />
        <landing-info-card
          :title="`code with \n gamepad?`"
          :isLefty="true"
          :imgUrl="`https://cdn-icons-png.flaticon.com/512/626/626540.png`"
        />
      </v-container>
      <!-- 엘든-랭  -->
      <v-card
        class="justify-center text-center py-5"
        min-height="300"
        style="background-color: rgba(0, 0, 0, 1); color: white"
      >
        <v-row class="justify-center align-self-center pt-10">
          <v-card-title class="text-center" style="font-size: 40px">
            do it all at once!<br />
          </v-card-title>
        </v-row>
        <v-row class="justify-center align-self-center pt-5">
          <v-card-title class="text-center" style="font-size: 40px">
            with<br />
          </v-card-title>
        </v-row>
        <v-row class="justify-center align-self-center pt-10">
          <v-card-title
            class="text-center"
            style="font-size: 60px; color: #dcbf72"
          >
            'Elden-Lang'.
          </v-card-title>
        </v-row>
        <v-btn x-large class="align-self-center mt-15 mb-10"
          >Fight Against demigods</v-btn
        >
      </v-card>
    </div>
  </div>
</template>

<script>
import LandingInfoCard from "../../components/main/landing/LandingInfoCard.vue";
export default {
  components: { LandingInfoCard },
  name: "Landing",
};
</script>
