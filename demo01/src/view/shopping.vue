<template>
  <div class="shopping">
    <div class="shopping-head">
      <!-- 购物排序 -->
      <shopping-sort @switchSort="switchSort"></shopping-sort>
    </div>
    <div class="shopping-main">
      <!-- 购物价格 -->
      <shopping-price @switchSection="switchSection"></shopping-price>
      <!-- 购物列表 -->
      <shopping-list :listData="renderData"></shopping-list>
    </div>
  </div>
</template>

<script>
import shoppingList from "@/components/shopping/shopping-list";
import shoppingSort from "@/components/shopping/shopping-sort";
import shoppingPrice from "@/components/shopping/shopping-price";
export default {
  name: "shopping",
  components: {
    shoppingList,
    shoppingSort,
    shoppingPrice
  },
  data: () => ({
    listData: [],

    renderData: []
  }),
  mounted() {
    this.getListData();
  },
  methods: {
    switchSection(section) {
      if (section.type === "all") {
        this.renderData = this.listData;
      } else {
        this.renderData = this.listData.filter(item => {
          return (
            Number.parseInt(item.salePrice) > section.min &&
            Number.parseInt(item.salePrice) < section.max
          );
        });
      }
    },
    switchSort(sort) {
      if (!sort) {
        this.renderData.sort(function(n, m) {
          return n.salePrice - m.salePrice;
        });
      } else {
        this.renderData.sort(function(n, m) {
          return m.salePrice - n.salePrice;
        });
      }
    },
    getListData() {
      this.axios.get("../../static/data.json").then(res => {
        this.listData = this.listData.concat(res.data.result.list);
        this.axios.get("../../static/data2.json").then(res => {
          this.listData = this.listData.concat(res.data.result.list);
          this.axios.get("../../static/data3.json").then(res => {
            this.listData = this.listData.concat(res.data.result.list);

            this.listData.forEach(item => {
              item.show = true;
            });

            this.renderData = this.listData;
          });
        });
      });
    }
  }
};
</script>

<style scoped>
@import url("./css/shopping.css");
</style>
