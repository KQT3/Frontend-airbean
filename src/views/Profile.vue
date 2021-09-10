<template class="test">
  <div class="profile">
    <div class="profile-page" v-if="createdAccount">
      <header>
        <img src="../assets/graphics/One_User_Orange.png" />
        <h1>{{ user.name }}</h1>
        <p>{{ user.email }}</p>
      </header>
      <section>
        <table>
          <tr>
            <th>Orderhistorik</th>
          </tr>
          <tr v-for="order in orderHistory" :key="order.orderNumber" class="mb-4">
            <td>{{ order[0].orderNumber }} <span>{{order[0].date}}</span></td>
            <td>
              Total Ordersumma <span>{{ order[0].total }}</span> kr
            </td>
          </tr>
          <p>Totalt Spenderat <span>{{ totalSpent }}</span> kr</p>
        </table>
      </section>
    </div>
    <div class="create-account" v-if="!createdAccount">
      <header>
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      </header>
      <section>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Namn</label>
            <input type="text" class="form-control" id="name" v-model="name" />
            <p class="error" v-if="error">Fyll I Namn</p>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Epost</label>
            <input type="text" class="form-control" id="email" v-model="email" />
            <p class="error" v-if="error">Fyll I Epost</p>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="checkbox"
              v-model="checkbox"
            />
            <label class="form-check-label" for="checkbox">GDRP Ok!</label>
          </div>
          <router-link to="/profile">
            <Button :btnTitle="'Brew me a cup!'" @click.native="userProfile" />
          </router-link>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Profile",
  components: {
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
      checkbox: false,
      error: false,
    };
  },
  computed: {
    createdAccount() {
      return this.$store.state.userProfile[0].createdAccount;
    },
    user() {
      return this.$store.state.userProfile[1];
    },
    orderHistory() {
      return this.$store.state.orderHistory;
    },
    totalSpent() {
      let result = 0;
      this.$store.state.orderHistory.forEach((element) => {
        result += element[0].total;
      });
      return result;
    },
  },
  methods: {
    userProfile() {
      let user = {
        name: this.name,
        email: this.email,
        checkbox: this.checkbox,
      };
      if (user.name.length > 1 && user.email.length > 1) {
        this.error = false;
        localStorage.User = JSON.stringify(user);
      } else this.error = true;
      this.$store.dispatch("getLocalStorageUser", JSON.parse(localStorage.User));
    },
  },
  created() {
    this.$store.commit("toggleColor", "black-color");
    this.$store.dispatch("headerToggle", true);
    this.$store.dispatch("footerToggle", true);
  },
};
</script>

<style lang="scss" scoped>
.profile {
  color: white;
  margin-left: 100px;
  margin-right: 100px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  .create-account {
    background-color: #e28e3fd5;
    border-radius: 20px;
  }
  header {
    font-size: 150%;
    text-align: center;
  }
  section {
    margin-top: 100px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div {
      width: 300px;
    }
    button {
      width: 300px;
      margin-top: 50px;
      margin-bottom: 200px;
    }
  }
}
.profile-page {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
  }
  section {
    display: grid;
    justify-items: center;
    align-items: center;
  }
}
.error {
  color: rgba(255, 0, 0, 0.527);
}
table {
  list-style-type: none;
  tr {
    th{
      font-size: 150%;
      margin-bottom: 20px;
    }
    width: 510px;
    display: grid;
    gap: 10px;
    margin-top: 10px;
    border-bottom: 1px solid #6c757d;
    span {
      margin-left: 310px;
    }
  }
  p {
    margin-top: 20px;
    font-size: 150%;
  }
  span{margin-left: 250px;}
}
</style>
