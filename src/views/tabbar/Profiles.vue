<template>
  <div class="profiles">
    <div class="user-container">
      <van-row :gutter="20" class="user-row">
        <van-col span="7">
          <div class="basice-avatar">
            <van-image :src="user?.avatar" class="base-image" />
          </div>
        </van-col>
        <van-col span="13">
          <div class="user-name">
            {{ user?.user_name }}
            <span>{{ store.sex }}</span>
          </div>
          <div class="user-desc">{{ store.phone }}</div>
        </van-col>
        <van-col span="4" @click="$router.push('/notices')">
          <van-badge :content="5">
            <van-icon name="bell" size="24" color="#6b7280" />
          </van-badge>
        </van-col>
      </van-row>
    </div>
    <div class="radian" />
    <div class="logout">
      <van-button type="primary" block plain @click="store.logout"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useAppStore from '@/store/use-app'

const store = useAppStore()
const user = computed(() => store.userinfo)
</script>

<style scoped lang="scss">
.profiles {
  width: 100%;
  height: 100%;
  .user-container {
    box-sizing: border-box;
    width: 100%;
    padding: 40px $l-spacing-xxl 0 $l-spacing-xxl;
    background: $l-slate-1;
    .basice-avatar {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      border-radius: 100%;
      overflow: hidden;
    }
    .user-row {
      display: flex;
      align-items: center;
      line-height: $l-lh-lg;
      .user-name {
        font-size: $l-fz-title-lg;
        span {
          margin-left: $l-spacing-xs;
          font-size: $l-fz-text-lg;
        }
      }
      .user-desc {
        font-size: $l-fz-text-lg;
        color: $l-text-color-tertiary;
      }
    }
  }
  .radian {
    width: 100%;
    height: 60px;
    background: $l-slate-1;
    border-radius: 0 0 100% 100%;
  }
  .logout {
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
  }
}
</style>
