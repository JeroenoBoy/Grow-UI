<template>
  <div class="Dashboard">
    <v-subheader class="grey--text">Dashboard</v-subheader>
    <v-container fluid>
      <v-row class="mx-5">
        <v-col class="col-2">
          <sidebar
            :activeCat="cat"
            v-on:click="(cat) => {
              this.$socket.client.emit('requestContent', {time: 0, cat: cat});
              this.cat = cat;
            }"
          />
        </v-col>

        <v-col class="col-10">
          <mhead :cat="cat" />
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.id"
              class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2"
            >
              <itemContainer
                v-on:click="() => {clickedItem = item; editItemEnabled = true}"
                :item="item"
              />
            </v-col>
          </v-row>
        </v-col>

        <ItemEditor
          v-on:complete="() => {editItemEnabled = false; clickedItem = clickedItemReset}"
          :item="clickedItem"
          :enabled="editItemEnabled"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import itemContainer from "@/components/items/item.vue";
import mhead from "@/components/items/head.vue";
import sidebar from "@/components/layout/Sidebar.vue";
import ItemEditor from "@/components/items/ItemEditor.vue";

export default {
  name: "Dashboard",
  components: { itemContainer, sidebar, mhead, ItemEditor },
  sockets: {
    connect() {
      console.log("Connected!");
    },
    disconnect() {
      console.log("Disconnected!");
    },
    contentUpdate(pack) {
      if (pack.err) return console.error(pack.err);
      if (pack.cat == this.cat) {
        this.time = pack.time;
        this.items = pack.data;
      }
    }
  },
  data() {
    return {
      time: 0,
      items: [],
      cat: "blocks",
      clickedItemReset: {
        name: "",
        item: "",
        price: "",
        sellable: "",
        buy: ""
      },
      clickedItem: this.clickedItemReset,
      editItemEnabled: false
    };
  },
  created() {
    this.$socket.client.emit("requestContent", {
      time: this.time,
      cat: "blocks"
    });
  },
  methods: {}
};
</script>

