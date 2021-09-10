<template>
  <div class="nav">
    <header>
      <div>
        <div @click="navShow" class="nav-icon">
          <img v-if="showNav == false" src="../assets/graphics/navicon.svg" />
          <img v-if="showNav == true" src="@/assets/graphics/close.svg" />
        </div>
      </div>
      <div>
        <router-link to="/cart">
          <div class="cart-icon">
            <img src="../assets/graphics/bag.svg" />
            <span>{{ cartCounter() }}</span>
          </div>
        </router-link>
      </div>
    </header>
    <section v-if="showNav" @click="navShow">
      <img v-if="showNav == true" src="@/assets/graphics/close.svg" />
      <ul class="d-flex flex-column justify-content-center">
        <router-link to="/meny">
          <li>Meny</li>
          <hr />
        </router-link>
        <router-link to="/about">
          <li>vårt kaffe</li>
          <hr />
        </router-link>
        <router-link to="/profile" @click.native="$router.go()">
          <li>Min Profile</li>
          <hr />
        </router-link>
        <router-link to="/status" >
          <li>Orderstatus</li>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  props: {},
  data() {
    return {
      showNav: false,
      cartShow: false,
    };
  },
  methods: {
    navShow() {
      this.showNav = !this.showNav;
      this.$store.dispatch("footerToggle", !this.showNav);
    },
    cartCounter() {
      let result = 0;
      this.$store.state.cart.forEach((element) => {
        result += element.amount;
      });
      return result;
    },
  },
  created() {
    this.cartCounter();
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-left: 60px;
  margin-right: 60px;
}
ul {
  list-style: none;
  width: 100%;
  background-color: black;
  height: 1300px;
  text-align: center;
  font-size: 150%;
  li {
    color: white;
    padding: 10px;
    cursor: pointer;
    font-size: 200%;
    padding-top: 50px;
    &:hover {
      text-decoration: underline;
    }
  }
}
section {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  background-color: black;
  img {
    background-color: white;
    position: absolute;
    left: 60px;
    top: 60px;
  }
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  div {
    padding-top: 20px;
  }
  .nav-icon img {
    background-color: white;
  }
  .cart-icon img {
    background-color: black;
  }
  img {
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    -webkit-box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.43);
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.43);
  }
}
.cart-icon {
  text-align: center;
  width: 20px;
  height: 20px;
  top: 30px;
  span {
    border-radius: 50px;
    position: absolute;
    top: 50px;
    right: 30px;
    background-color: orange;
    color: white;
    width: 20px;
  }
}
hr {
  background-color: white;
  width: 50px;
}
</style>
