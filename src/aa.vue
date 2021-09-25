<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    API測試
  </div>
  <h1>test haha</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>

// export default {

// data() {
//    return{
//      tableData: []  //宣告個空陣列
//    }
//  },
//  methods: {
//       async packageGetData() {
//       const url = 'tableData'  // json-server  API 位置
//       let res = await this.$api.get(url)
//       this.tableData = [...res]  // 透過ES6語法將res的內容直接繼承到tableData
//       console.log(res)
//     },
//   },

//   created() {
//     this.packageGetData() // 在created 階段把API資料叫進來
//   }

// }

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'aa',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
