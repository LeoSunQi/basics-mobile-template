<template>
  <div class="page-bg">
    <div class="banner-container">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="b in banners" :key="b.id">
          <van-image :src="b.url" class="base-image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="refresh-list">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh(onLoad(apis.MCommonNotices))"
      >
        <van-list
          v-model:loading="loading"
          v-model:error="error"
          :finished="finished"
          :finished-text="finishedText"
          error-text="请求失败，点击重新加载"
          @load="onLoad(apis.MCommonNotices)"
        >
          <div class="list-item">
            <ul class="l-grid-container l-grid-columns-2">
              <li v-for="l in list" :key="l.id">{{ l.id }}</li>
            </ul>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup lang="ts">
import apis from '@/api'
import { onMounted, ref } from 'vue'
import { usePullRefresh } from '@/hooks'

const {
  onRefresh,
  onLoad,
  loading,
  error,
  finished,
  finishedText,
  refreshing,
  list,
} = usePullRefresh()
const banners = ref()

const getBanners = async () => {
  const { code, data } = await apis.MCommonSwipeBanner()
  if (+code === 0) {
    banners.value = data
  }
}
onMounted(() => {
  getBanners()
})
</script>

<style scoped lang="scss">
.page-bg {
  min-height: 100%;
}
.banner-container {
  min-height: 200px;
}
.refresh-list {
  padding-bottom: 60px;
}
</style>
