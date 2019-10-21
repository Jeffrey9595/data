<template>
  <div class="shopping-price">
    <p class="price-title">PRICE:</p>
    <ul class="price-list">
      <li
        class="price-list-item"
        v-for="(section,index) in sections"
        :key="index"
        :class="{'active':active.index === index}"
      >
        <span @click="switchSection(section)" v-if="section.type==='all'">All</span>
        <span @click="switchSection(section)" v-else>{{`${section.min}.00-${section.max}.00`}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shopping-price",
  data() {
    return {
      // 当前选中项
      active: { index: 0, type: "all" },
      // 区间列表
      sections: [
        { index: 0, type: "all" },
        { index: 1, type: "section", max: 100, min: 0 },
        { index: 2, type: "section", max: 500, min: 100 },
        { index: 3, type: "section", max: 1000, min: 500 },
        { index: 4, type: "section", max: 2000, min: 1000 }
      ]
    };
  },
  methods: {
    switchSection(section) {
      this.$emit("switchSection", section);
      this.active = section;
    }
  }
};
</script>

<style scoped>
@import url("./css/shopping-price.css");
</style>
