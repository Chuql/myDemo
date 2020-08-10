<template>
  <div>
    

      <el-dialog :visible="visible">
        要放弃修改吗？

        <el-button @click="click(false)">不放弃</el-button>
        <el-button @click="click(true)">放弃</el-button>
      </el-dialog>
    <br>
    
    <el-tree
      :data="data"
      show-checkbox
    >
      <template #default="{node, data}">
        <div>
        <i>{{node.label}}
          1111111111111
        </i>
        <b>{{data.flag}}</b>
        </div>
      </template>
    </el-tree>
    <br>
    <br>
    
  </div>
</template>

<script>
export default {
  provide() {
    return {
      app: this
    }
  },
  components: {
Cell
  },
  data() {
    return {
      node: {},
      elEvent: {},
      elValue: null,

      visible: false,
      data: [
        {
          label: '123',
          flag: false,
          children: [
            {
              label: '123',
              flag: false,
              children: [
                {label: 2344, flag: false}
              ]
            },
            {
              label: '345',
          flag: false,

            }
          ],
          b: '456'
        },
        {
          label: '13',
          flag: false,

        },
        {
          label: '111',
          b: '333',
          flag: true
        }
      ],
    }
  },
  methods: {
    

    // 点击弹框按钮 flag :  false 不放弃  true 放弃
    click(flag){
      this.visible = false
      this.node.data.flag = flag
      if (flag === false) {
        this.elEvent.target.checked = !this.elEvent.target.checked
        this.elValue = !this.elValue
      }
      setTimeout(() => {
        this.node.data.flag = false
      })
    },

  }
}
</script>

<style>
.a {
  background: red;
}
</style>