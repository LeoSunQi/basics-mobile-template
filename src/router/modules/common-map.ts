/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2024-01-01 15:34:13
 * @LastEditTime: 2024-01-03 12:09:27
 * Copyright (c) 2024 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/result/:type',
    name: 'Result',
    component: () => import('@/views/common/Result.vue'),
    meta: { title: '购买成功/失败' },
  },
  {
    path: '/notices',
    name: 'Notices',
    component: () => import('@/views/common/Notices.vue'),
    meta: { title: '消息通知' },
  },
] as RouteRecordRaw[]
