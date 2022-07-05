<template>
  <div>
      <el-tree
      :data="menus"
      show-checkbox
      node-key="name"
      :props="defaultProps"
      ref="tree">
      </el-tree>
      <el-button @click="getCheckedNodes">通过node节点获取</el-button>
  </div>
</template>

<script>
    export default {
        name:'User',
        data(){
          return {
            menus:[],
            defaultProps:{
              label:'name',
              children:'children',
            }
          }
        },
        created(){
          // console.log(this.$router.options.routes)
          this.menus = [...this.$router.options.routes]

        },
        methods:{
          getCheckedNodes(){
            let arr = this.$refs.tree.getCheckedNodes()
            console.log(arr)
          },
        }
    }
</script>

<style lang="scss">
</style>