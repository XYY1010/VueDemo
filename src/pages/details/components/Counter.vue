<template>
  <div class="counter-component">
    <div class="counter-btn" @click="mins"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="inputHandler"/>
    </div>
    <div class="counter-btn" @click="maxs"> + </div>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      number: 1
    }
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  },
  methods: {
    mins() {
      if (this.number <= this.min) {
        return;
      }
      this.number--;
      this.$emit("getGoodInfo", this.number);
      this.$store.dispatch("updateOrder", ["counter", this.number]);
    },
    maxs() {
      if (this.number >= this.max) {
        return;
      }
      this.number++;
      this.$emit("getGoodInfo", this.number);
      this.$store.dispatch("updateOrder", ["counter", this.number]);
    },
    inputHandler() {
      // \D: 非数字
      let fix;
      if (typeof this.number === "string") {
        fix = Number(this.number.replace(/\D/g, ''));  // g 代表全局，replace 将非数字替换成‘’，Number 将‘’转换成 1
      } else {
        fix = this.number;
      }
      if (fix > this.max || fix < this.min) {
        fix = this.min;
      }
      this.number = fix;
      this.$emit("getGoodInfo", this.number);
      this.$store.dispatch("updateOrder", ["counter", this.number]);
  }
 }
}
</script>

<style scoped>
.counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
.counter-show {
    float: left;
}
.counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    width: 30px;
    outline: none;
    text-align: center;
    float: left;
}
.counter-btn {
    float: left;
    border: 1px solid #e3e3e3;
    height: 25px;
    width: 25px;
    line-height: 23px;
    text-align: center;
    cursor: pointer;
}
.counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: white;
}
</style>
