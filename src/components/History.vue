<script>
export default {
  name: "History",
  data() {
    return {
      historyData: [
        {
          id: 1,
          date: '2023-10-9',
          name: 'oceans.mp4',
          status: '处理成功',
        },
        {
          id: 2,
          date: '2023-10-13',
          name: 'forests.mp4',
          status: '处理中',
        }
      ],
      selectRow: null
    }
  },
  methods: {
    detailClick() {
      this.$router.push({path: '/detail', query: {id: this.selectRow.id}})
    },
    rowClick(row) {
      this.selectRow = row
    }
  }
}
</script>

<template>
  <el-table :data="historyData" @cell-mouse-enter="rowClick" ref="historyTable">
    <el-table-column label="日期" prop="date"/>
    <el-table-column label="视频名" prop="name"/>
    <el-table-column label="状态" prop="status"/>
    <el-table-column label="操作">
      <template #default>
        <el-button type="primary" @click="detailClick">详情</el-button>
        <el-button type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>