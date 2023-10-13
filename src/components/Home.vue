<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {

    }
  }
}
</script>

<template>
  <el-container class="up-container">
    <el-header>
      <div>
        <span>几何重建</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
  </el-container>
  <el-container class="down-container">
    <el-aside width="200px">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="this.$route.path"
        router
        style="height: 100%">
        <el-menu-item index="/index">
          首页
        </el-menu-item>
        <el-menu-item index="/history">
          历史记录
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<style scoped>
.up-container {
  height: 8vh;
}
.down-container {
  height: 92vh;
}
.el-header {
  height: 100%;
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
</style>