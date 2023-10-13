<script>
import UploadFilled from "element-plus";

export default {
  name: "Index",
  components: {UploadFilled},
  data() {
    return {
      fileName: null
    }
  },
  methods: {
    handleOnChange(uploadFile, uploadFiles) {
      this.fileName = uploadFile.name
    },
    handleOnRemove() {
      console.log("remove")
      this.fileName = null
    }
  }
}
</script>

<template>
  <el-upload
      class="upload-demo"
      drag
      with-credentials
      accept=".mp4"
      :limit="1"
      :on-change="handleOnChange"
      :on-remove="handleOnRemove"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽文件 或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        mp4文件大小要求小于100MB
      </div>
    </template>
  </el-upload>
  <video v-if="fileName !== null" src="http://vjs.zencdn.net/v/oceans.mp4" controls>

  </video>
</template>

<style scoped>

</style>