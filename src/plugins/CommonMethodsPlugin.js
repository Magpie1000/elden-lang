const MyPlugin = {};
MyPlugin.install = function (Vue) {
  Vue.prototype.$goToHome = function () {
    this.$router.push({ name: "Home" });
  };

  Vue.prototype.$goToFight = function () {
    this.$router.push({ name: "Fight" });
  };

  Vue.prototype.$goToGoldenOrder = function () {
    this.$router.push({ name: "GoldenOrder" });
  };

  // Vue.prototype.$goToCollectionDetail = function (collection_pk) {
  //   this.$router.push({ name: 'Collection', params: {collection_pk: `${collection_pk}`}})
  // }
};
export default MyPlugin;
