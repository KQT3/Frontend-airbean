<template>
  <div class="landing" v-if="$store.state.landingShow">
    <router-link to="/meny">
      <section  @click="hideLanding">
        <div class="img1"></div>
        <div class="w-100 text-center">
          <img src="../assets/graphics/loader.png" class="mb-5" />
          <h1 class="text-center text-white">AIR BEAN</h1>
        </div>
        <div class="img2"></div>
      </section>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods:{
    hideLanding(){
      this.$store.commit("hideLanding")
      this.$store.commit("headerToggle", true)
      this.$store.commit("footerToggle", true)
    }
  }
};
</script>
<style lang="scss" scoped>
.landing {
  background-color: #2f8c91;
  width: 100%;
  height: 100%;
}
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.img1 {
  background-image: url("../assets/graphics/intro-graphic-left.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 1000px;
  width: 1000px;
}
.img2 {
  background-image: url("../assets/graphics/intro-graphic-right.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 1000px;
  width: 1000px;
}
</style>
