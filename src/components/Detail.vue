<script>
export default {
  name: "Detail",
  data() {
    return {
      processedData: {
        id: 1,
        name: "oceans",
        date: '2023-10-9',
        status: "处理成功",
        videoSrc: "http://vjs.zencdn.net/v/oceans.mp4",
        backImage: "http://www.runoob.com/images/pulpit.jpg"
      },
      dataId: this.$route.query.id
    }
  },
  methods: {
    BackClick() {
      this.$router.push('/history')
    }
  }
}
</script>

<template>
  <el-page-header @back="BackClick">
    <template #title>返回</template>
  </el-page-header>
  <el-form label-width="120px">
    <el-form-item label="视频名称:">
      <el-text>{{processedData.name}}</el-text>
    </el-form-item>
    <el-form-item label="上传日期:">
      <el-text>{{processedData.date}}</el-text>
    </el-form-item>
    <el-form-item label="状态:">
      <el-text>{{processedData.status}}</el-text>
    </el-form-item>
    <el-form-item label="原视频:">
      <video :src="processedData.videoSrc" controls>
      </video>
    </el-form-item>
    <el-form-item label="处理结果:">
      <el-image :src="processedData.backImage" />
    </el-form-item>
  </el-form>
</template>

<style>
.el-form-item__label {
  font-weight: bold;
  color: black;
}
</style>