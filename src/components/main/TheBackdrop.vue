<template>
  <div class="backdrop">
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
