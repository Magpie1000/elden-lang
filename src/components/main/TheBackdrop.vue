<template>
  <div class="backdrop" :style="`margin-left: -${leftMargin}rem;`">
    <img
      :src="`https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/UAnLUUMdxA9cow8TEe8IfhuC.png`"
      class="backdrop-img"
      alt="backdrop image"
    />
    <div
      style="background-color: rgba(0, 0, 0, 0.8); align-items: stretch"
    ></div>
  </div>
</template>

<script>
export default {
  name: "TheBackdrop",
  data: function () {
    return {
      windowWidth: 0,
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  created: function () {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    leftMargin: function () {
      if (this.windowWidth > 1500) {
        return 15;
      }
      return 6;
    },
  },
};
</script>

<style>
.backdrop {
  z-index: -1;
  position: absolute;
  margin-top: -9rem;
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
