<template>
  <div class="mx-0" id="menuButton">
    <v-btn @click="$emit('click')" text :color="cat == msg ? 'blue' : 'green'" width="100%">
      <span>{{msg}}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
    cat: String
  }
};
</script>

<style scoped>
.button {
  width: 100%;
  font-size: 20px;
}

.button > #buttonLogo {
  color: #fff;
}
</style>