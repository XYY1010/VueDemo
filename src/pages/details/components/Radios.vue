<template>
  <div class="choose-component">
    <ul class="choose-list">
      <li @click="handleClick(index)" v-for="(item, index) in Radios" :class="{'active':index == nowIndex}">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "radios",
  data() {
    return {
      nowIndex: 0
    }
  },
  props: {
    Radios: {
      type: Array,
      default: function() {
        return [
          {
            title: "test",
            value: 1
          }
        ]
      }
    }
  },
  methods: {
    handleClick(index) {
      this.nowIndex = index;
      this.$emit("getGoodInfo", this.Radios[index].value);
      this.$store.dispatch("updateOrder", ["radios", this.Radios[index].value]);
    }
  }
}
</script>

<style scoped>
.choose-component {
    position: relative;
    display: inline-block;
}
.choose-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    border-right: 0;
    height: 30px;
    line-height: 30px;
    padding: 0 25px;
    text-align: center;
    cursor: pointer;
}
.choose-list li:last-child {
  border-right: 1px solid #e3e3e3;
}
.choose-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: white;
}
</style>
