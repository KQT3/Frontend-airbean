<template>
  <div>
    <header>
      <Nav />
    </header>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style scoped>
header {
  background-image: url("../assets/graphics/graphics-header.svg");
  background-size: cover;
  height: 600px;
}
</style>
