<template>
  <div>
    <input type="text" :value="val" @input="inputChange($event)" />
  </div>
</template>

<script>
export default {
  model: {
    event: 'change',
    prop: 'val'
  },
  props: {
    val: {
      type: String,
      default: ''
    }
  },
  beforeCreate() {
    console.log('beforeCreate', 'zi')
  },
  created() {
    console.log('crated', 'zi')
  },
  beforeMount() {
    console.log('beforeMount', 'zi')
  },
  mounted() {
    console.log('mounted', 'zi')
  },
  methods: {
    inputChange(event) {
      this.$emit('change', event.target.value)
      console.log(this.val)
    }
  }
}
</script>

<style>
</style>