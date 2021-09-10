<template>
  <div>
    <div class="cart">
      <h1 class="text-center">Din Beställning</h1>
      <section v-if="cart == 0" class="cart-empty">
        <h1>Din Varukorg Är Tom</h1>
        <router-link to="/meny">
          <Button :btnTitle="'Meny'" />
        </router-link>
      </section>
      <section class="d-flex flex-column align-items-center" v-if="cart.length > 0">
        <ul>
          <li v-for="item in cart" :key="item.id">
            <div class="d-flex flex-column text-center">
              <img src="../assets/graphics/arrow-up.svg" v-on:click="btnArrowUp(item)" />
              <div class="d-flex flex-row align-items-center">
                <span> {{ item.title }} ............................</span>
                <span>{{ item.amount }}</span>
                <span class="delete-item" @click="deleteItem(item)">x</span>
              </div>
              <img
                src="../assets/graphics/arrow-down.svg"
                v-on:click="btnArrowDown(item)"
              />
            </div>
            <div>{{ item.price * item.amount }} kr</div>
          </li>
        </ul>
        <div class="mt-5">
          <h1>Total ............................ {{ totalCart }} kr</h1>
          <p>inkl moms + drönarleverans</p>
        </div>
        <router-link to="/status">
          <Button :btnTitle="'Take my money!'" @click.native="placeOrder" />
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Cart",
  components: {
    Button,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalCart() {
      return this.$store.state.cartTotal;
    },
    createdAccount() {
      return this.$store.state.userProfile[0].createdAccount;
    },
  },
  methods: {
    cartTotal() {
      let total = 0;
      let cart = this.$store.state.cart;
      cart.forEach((element) => {
        total += element.price * element.amount;
      });
      this.$store.dispatch("cartTotal", total);
    },
    btnArrowUp(item) {
      let idx = this.$store.state.cart.indexOf(item);
      this.$store.commit("incrementAmount", idx);
      this.cartTotal();
    },
    btnArrowDown(item) {
      let idx = this.$store.state.cart.indexOf(item);
      if (this.$store.state.cart[idx].amount > 0)
        this.$store.commit("decrementAmount", idx);
      this.cartTotal();
    },
    deleteItem(item) {
      let idx = this.$store.state.cart.indexOf(item);
      this.$store.commit("deleteItem", idx);
      this.cartTotal();
    },
    orderNumber(length) {
      let result = "#";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    date() {
      let date = new Date();
      let dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
      let mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
      let today = `${date.getFullYear()} ${mm} ${dd}`;
      return today;
    },
    placeOrder() {
      let order = [];
      let orderNumber = this.orderNumber(7);
      let total = this.$store.state.cartTotal;
      order.push({
        orderNumber: orderNumber,
        total: total,
        date: this.date(),
      });
      order.push(this.$store.state.cart);
      if (this.createdAccount == true) {
        if (localStorage.OrderHistory) {
          let oldData = JSON.parse(localStorage.getItem("OrderHistory"));
          oldData.push(order);
          localStorage.setItem("OrderHistory", JSON.stringify(oldData));
        } else localStorage.setItem("OrderHistory", JSON.stringify([order]));
      }
      this.$store.commit("orderVisible", true);
      this.$store.commit("placeOrder", order);
    },
  },
  created() {
    this.cartTotal();
    this.$store.commit("toggleColor", "beige-color");
    this.$store.dispatch("headerToggle", true);
    this.$store.dispatch("footerToggle", true);
  },
};
</script>

<style lang="scss" scoped>
.cart {
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 50px;
  li {
    font-size: 200%;
  }
  img {
    cursor: pointer;
    height: 15px;
    margin-left: 400px;
  }
  ul {
    margin-top: 50px;
    list-style: none;
  }
  h1 {
    margin-top: 50px;
    padding-top: 50px;
  }
  button {
    margin-top: 50px;
    margin-bottom: 200px;
    font-size: 200%;
    border-radius: 30px;
    width: 300px;
  }
}
.delete-item {
  cursor: pointer;
  font-size: 150%;
  position: absolute;
  right: 600px;

  &:hover {
    color: red;
  }
}
.cart-empty {
  text-align: center;
  margin: 100px;
  padding-bottom: 100px;
}
</style>
