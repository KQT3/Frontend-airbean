<template>
  <button class="btn">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props:{
      btnTitle: String
  }
};
</script>

<style scoped>
button {
  font-size: 200%;
  border-radius: 30px;
  background-color: black;
  color: white;
}
</style>
