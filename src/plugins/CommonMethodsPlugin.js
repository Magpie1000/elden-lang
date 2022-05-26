const MyPlugin = {};
MyPlugin.install = function (Vue) {
  // 1. routes
  Vue.prototype.$goToHome = function () {
    if (this.$route.name !== "Home") {
      this.$router.push({ name: "Home" });
      return;
    }
    window.scrollTo(0, 0);
  };

  Vue.prototype.$goToBattle = function () {
    if (this.$route.name !== "Battle") {
      this.$router.push({ name: "Battle" });
      return;
    }
    window.scrollTo(0, 0);
  };

  Vue.prototype.$goToGoldenOrder = function () {
    if (this.$route.name !== "GoldenOrder") {
      this.$router.push({ name: "GoldenOrder" });
      return;
    }
    window.scrollTo(0, 0);
  };
  // 2. send html as props
  Vue.prototype.$breakLine = function (string) {
    return string.replace(/(?:\r\n|\r|\n)/g, "<br />");
  };
  // 3. scroll to top
  Vue.prototype.$scrollToTop = function () {
    window.scrollTo(0, 0);
  };

  // Vue.prototype.$goToCollectionDetail = function (collection_pk) {
  //   this.$router.push({ name: 'Collection', params: {collection_pk: `${collection_pk}`}})
  // }
};
export default MyPlugin;
