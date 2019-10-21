<template>
  <div class="shopping-sort">
    <p class="sort-right">
      Sort by:
      <span @click="switchSort('')" :class="{'active':sortRule===''}">Default</span>
      <span
        @click="switchSort(sortRule!==''?!sortRule:false)"
        :class="{'active': typeof sortRule === 'boolean'}"
      >{{sortRule==false?'正序 ↑':'倒序 ↓'}}</span>
    </p>
    <p class="sort-filterby">
      <span>filter by</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "shopping-sort",
  data() {
    return {
      // 排序 ""/默认 true/倒序 false/正序
      sortRule: ""
    };
  },
  mounted() {},
  methods: {
    switchSort(sort) {
      console.log(sort);
      this.sortRule = sort;
      this.$emit("switchSort", sort);
    }
  }
};
</script>

<style scoped>
@import url("./css/shopping-sort.css");
</style>
