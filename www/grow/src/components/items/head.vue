<template>
  <v-card class="pa-5 my-2">
    <v-btn @click="addItem" :disabled="disable" outlined color="success">
      <span>Add Item</span>
      <v-icon>add</v-icon>
    </v-btn>

    <v-slide-x-transition>
      <v-title class="font-weight-light ma-auto mx-5" v-if="disable">Added new item</v-title>
    </v-slide-x-transition>
  </v-card>
</template>

<script>
export default {
  name: "Head",
  components: {},
  props: {
    cat: String
  },
  data() {
    return {
      add: false,
      disable: false
    };
  },
  methods: {
    addItem() {
      this.disable = true;
      this.$socket.client.emit("addItem", this.cat);
      setTimeout(() => {
        this.disable = false;
      }, 2000);
    }
  }
};
</script>

<style>
</style>