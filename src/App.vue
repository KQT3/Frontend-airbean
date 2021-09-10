<template>
  <div id="app" :class="this.$store.state.toggleColor">
    <Header v-if="headerShow" />
    <router-view />
    <Footer v-if="footerShow" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    headerShow() {
      return this.$store.state.headerShow;
    },
    footerShow() {
      return this.$store.state.footerShow;
    },
  },
   mounted() {
    this.$store.dispatch("getApi");
    if (localStorage.User)
      this.$store.dispatch("getLocalStorageUser", JSON.parse(localStorage.User));
    if (localStorage.OrderHistory)
      this.$store.dispatch("getOrderHistory", JSON.parse(localStorage.OrderHistory));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  padding: 0px;
}
.base-color {
  background-color: #2f8c91;
}
.beige-color {
  background-color: #cfac8c;
}
.black-color {
  background-color: #000000;
}
</style>
