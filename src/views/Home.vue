<template>
  <div class="home">
    我是home组件
    <el-button type="primary"
               @click="toAbout">跳转到about页面</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  created () {
    this.$get("/json/data.json").then(res => {
      console.log(res);
    })
    setTimeout(() => {
      this.$get("/json/data2.json").then(res => {
        console.log(res);
      })
    }, 1000)
  },
  methods: {
    toAbout () {
      this.$router.push({ name: 'About' });
    }
  }
};
</script>
