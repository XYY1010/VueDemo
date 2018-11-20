<template>
  <div>
    {{getOrder}}
    {{getPrice}}
  </div>
</template>

<script>
export default {
  name: 'health1',
  data() {
    return {

    }
  },
  computed: {
    getOrder() {
      return this.$store.getters.getOrder;
    },
    getPrice() {
      return this.$store.getters.getPrice;
    }
  }
}
</script>

<style scoped>
</style>
