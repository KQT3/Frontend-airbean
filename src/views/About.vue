<template>
  <div>
    <div class="about">
      <h1>Vårt Kaffe</h1>
      <article>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui velit tempore
          cumque iusto aperiam iure nam ea voluptatem?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in, molestiae qui
          enim rem pariatur quibusdam, dignissimos cumque, ut veniam distinctio
          perspiciatis corporis nemo odit nulla odio porro repellat laudantium asperiores
          impedit. Et itaque magni at assumenda dolorem placeat voluptate est odit ipsa
          totam voluptates deserunt, expedita suscipit libero aspernatur? Lorem ipsum
          dolor sit, amet
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo autem iste fugit
          eligendi nulla dolor. Dolor aspernatur necessitatibus aliquam, iure at fugiat
          blanditiis quibusdam quaerat, dicta maxime aliquid, quia quod officia saepe
          ipsam ducimus explicabo. Quos numquam quia tempore assumenda deleniti impedit.
          Suscipit assumenda aspernatur aliquam, sunt quisquam vitae! Error. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Impedit culpa omnis earum quia
          quasi eius
        </p>
      </article>
      <div class="text-center">
        <img src="@/assets/graphics/eva-cortado.jpg" alt="" />
        <h5>Eva Cortado</h5>
        <p>VD</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    this.$store.commit("toggleColor", 'beige-color');
    this.$store.dispatch("headerToggle", true);
    this.$store.dispatch("footerToggle", true);
  },
};
</script>

<style scoped>
.about {
  color: black;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  text-align: center;
  width: 100%;
  justify-content: center;
}
article {
  display: flex;
  flex-direction: column;
  width: 800px;
}
img {
  border-radius: 100%;
  margin-top: 50px;
}
</style>
