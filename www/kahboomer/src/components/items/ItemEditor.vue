<template>
  <v-row justify="center">
    <v-dialog v-model="enabled" persistent max-width="400">
      <v-card>
        <v-form class="pa-5 pd-0">
          <v-card-title class="headline">{{item.name}}</v-card-title>

          <v-row>
            <v-text-field v-model="item.name" class="pa-2 col-6" color="success" label="Name" />
            <v-text-field v-model="item.item" class="pa-2 col-6" color="success" label="Item id" />
          </v-row>
          <v-text-field v-model="item.buy" color="success" label="Buy Price" />
          <v-row>
            <v-switch class="pl-5 pr-0 col-2" v-model="item.sellable" color="error"></v-switch>
            <v-text-field
              v-model="item.sell"
              class="pa-5 col-10"
              color="success"
              label="Sell Price"
              :disabled="!this.item.sellable"
            />
          </v-row>
          <v-row class="ma-0 pa-0">
            <v-btn color="col-7 success" @click="() => {$emit('complete'); this.editItem()}">Edit</v-btn>
            <v-btn color="col-5 error" @click="$emit('complete')">Cancel</v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ItemEditor",
  props: {
    item: {
      id: String,
      cat: String,
      Item: String,
      Name: String,
      Buy: Number,
      sell: Number,
      sellable: Boolean
    },
    enabled: Boolean
  },
  methods: {
    editItem() {
      this.$socket.client.emit("editItem", this.item);
    }
  }
};
</script>