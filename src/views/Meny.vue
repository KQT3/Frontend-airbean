<template>
  <div>
    <div class="meny">
      <div class="text-center mb-3">
        <h1>Meny</h1>
      </div>
      <div>
        <ul>
        <b-spinner variant="primary" label="Spinning" v-if="loading"></b-spinner>
          <li v-for="item in menu" :key="item.id">
            <div class="btn-add" v-on:click="addItems(item)">
              <img src="../assets/graphics/add.svg" />
            </div>
            <div class="d-flex flex-column">
              <span class="font-weight-bold"
                >{{ item.title }}............ {{ item.price }}</span
              >
              <span>{{ item.desc }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meny",

  data() {
    return {
      tmpCart: [],
    };
  },
  methods: {
    addItems(item) {
      let bean = this.tmpCart.find((element) => element.title == item.title);
      if (bean) {
        bean.amount += 1;
      } else {
        this.tmpCart.push({ title: item.title, price: item.price, amount: 1 });
      }
      this.$store.dispatch("addItem", this.tmpCart);
    },
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
     loading() {
      return this.$store.state.loadingStatus;
    },
  },
  created() {
    this.$store.commit("toggleColor", 'beige-color');
    this.$store.dispatch("headerToggle", true);
    this.$store.dispatch("footerToggle", true);
  },
};
</script>

<style lang="scss" scoped>
.meny {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  margin: 50px;
  .btn-add {
    border-radius: 50%;
    background-color: black;
    height: 30px;
    margin-right: 10px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
  img {
    width: 15px;
    color: red;
  }
  li {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
}
</style>
