<script setup>
import UploadFilled from 'element-plus'
</script>

<template>
  <el-upload
      class="upload-demo"
      drag
      with-credentials
      accept=".mp4"
      :limit="1"
      :auto-upload="false"
      :on-change="handleOnChange"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        mp4 files with a size less than 100M
      </div>
    </template>
  </el-upload>
  <video>

  </video>
</template>

<style scoped>

</style>