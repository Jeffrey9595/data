<template>
  <div class="shopping-list">
    <ul class="list-box">
      <li v-for="(item,index) in listData" :key="index" class="list-item" v-show="item.show">
        <img class="list-item-img" :src="'../../static/'+item.productImage" alt />
        <div class="list-item-right">
          <p class="list-item-name">{{item.productName}}</p>
          <p class="list-item-price">￥{{item.salePrice}}.00</p>
          <button class="list-item-but">加入购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shopping-list",
  props: ['listData']
};
</script>

<style scoped>
@import url("./css/shopping-list.css");
</style>
