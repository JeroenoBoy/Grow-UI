<template>
  <v-card class="mx-0 my-2 py-5">
    <p class="text-center font-weight-bold title">Catagories</p>
    <Item
      v-on:click="$emit('click', cat)"
      v-for="(cat, i) in catagories"
      :key="i"
      :cat="activeCat"
      :msg="cat"
    />
  </v-card>
</template>

<script>
import Item from "@/components/layout/Item.vue";

export default {
  name: "sidebar",
  components: { Item },
  sockets: {
    catagoryList(pack) {
      this.catagories = pack;
    }
  },
  props: {
    activeCat: String
  },
  data() {
    return {
      catagories: []
    };
  },
  created() {
    this.$socket.client.emit("getCatagories", "");
  }
};
</script>

<style>
</style>