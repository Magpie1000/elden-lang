<template>
  <div class="home">
    <landing />
  </div>
</template>

<script>
import Landing from './main/Landing.vue'

export default {
  name: 'Home',
  components: {
    Landing,
  },
  data: function () {
    return {
      windowWidth: null
    }
  },
  methods: {
    handleResize() {
    this.windowWidth = window.innerWidth
    if (this.windowWidth <= 768) {
      this.trigger = false
    } else {
      this.trigger = true
    }
    },
  }
}
</script>
