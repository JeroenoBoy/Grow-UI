<template>
  <v-card flat @click="$emit('click')" class="ma-1 pa-3" hover>
    <v-row>
      <v-col class="col-3 pa-0 ml-5 my-auto">
        <v-img
          height="50px"
          width="50px"
          aspect="1.1"
          :src="require(`@/assets/items/${this.itemImage()}.png`)"
        />
      </v-col>
      <v-col class="col-5 pa-0 ma-0 pr-0">
        <v-card-title class="subtitle-2 pr-0">{{item.name}}</v-card-title>
        <v-card-subtitle class="caption pr-0">Item Id: {{item.item}}</v-card-subtitle>
      </v-col>
    </v-row>

    <v-card-text display="flex" class="py-1 px-5 row">
      <div class="col-7 pa-0 ma-0">
        <v-icon>store</v-icon>
        <span>Buy</span>
      </div>
      <div class="col-4 pa-0 ma-0 success--text">
        <span class="pa-0 ma-0">${{item.buy}}</span>
      </div>
    </v-card-text>

    <v-card-text display="flex" class="py-1 px-5 row">
      <div class="col-7 pa-0 ma-0">
        <v-icon>storefront</v-icon>
        <span>Sell</span>
      </div>
      <div class="col-4 pa-0 ma-0 error--text">
        <span class="pa-0 ma-0">{{item.sellable ? '$'+item.sell : '/'}}</span>
      </div>
    </v-card-text>

    <v-card-text display="flex" class="py-1 px-5 row">
      <div class="col-7 pa-0 ma-0">
        <v-icon>done_all</v-icon>
        <span>Sellable</span>
      </div>
      <div :class="`col-4 pa-0 ma-0 ${item.sellable ? 'success' : 'error'}--text`">
        <span class="pa-0 ma-0">{{item.sellable}}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "itemContainer",
  props: {
    item: Object
  },
  methods: {
    itemImage() {
      const itm = this.item.item.split(":");
      if (!itm[1]) return `${itm[0]}-0`;
      return `${itm[0]}-${itm[1]}}`;
    }
  }
};
</script>