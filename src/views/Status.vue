<template>
  <div class="status">
    <div>
      <div v-if="orderVisible">Ordernummer: {{ order[0].orderNumber }}</div>
      <img src="../assets/graphics/drone.svg" />
      <div v-if="orderVisible">
        <h1>Din beställning är på väg!</h1>
        <Counter />
      </div>
      <div v-if="!orderVisible">
        <h1>Gör en beställning!</h1>
      </div>
      <router-link to="/meny">
        <Button v-if="orderVisible" :btnTitle="'Ok, cool'"/>
        <Button v-if="!orderVisible" :btnTitle="'Meny'"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import Button from "@/components/Button";
export default {
  name: "Status",
  components: {
    Counter,
    Button
  },
  computed: {
    orderVisible() {
      return this.$store.state.orderVisible;
    },
    order() {
      return this.$store.state.order;
    },
  },
  created() {
    this.$store.dispatch("headerToggle", false);
    this.$store.dispatch("footerToggle", false);
  },
};
</script>

<style lang="scss" scoped>
.status {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: orangered;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  div {
    margin-top: 100px;
    color: white;
    img {
      margin-top: 50px;
    }
    h1 {
      margin-top: 100px;
      font-size: 350%;
    }
    h2 {
      margin-top: 50px;
    }
    button {
      margin-top: 100px;
    }
  }
}
button {
  background-color: white;
  color: black;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 150%;
}
</style>
