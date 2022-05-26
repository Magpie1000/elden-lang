const MyPlugin = {};
MyPlugin.install = function (Vue) {
  // 1. routes
  Vue.prototype.$goToHome = function () {
    this.$router.push({ name: "Home" });
  };

  Vue.prototype.$goToBattle = function () {
    this.$router.push({ name: "Battle" });
  };

  Vue.prototype.$goToGoldenOrder = function () {
    this.$router.push({ name: "GoldenOrder" });
  };
  // 2. send html as props
  Vue.prototype.$breakLine = function (string) {
    return string.replace(/(?:\r\n|\r|\n)/g, "<br />");
  };

  // Vue.prototype.$goToCollectionDetail = function (collection_pk) {
  //   this.$router.push({ name: 'Collection', params: {collection_pk: `${collection_pk}`}})
  // }
};
export default MyPlugin;
