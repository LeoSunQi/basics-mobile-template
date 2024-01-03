/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-12-29 10:15:52
 * @LastEditTime: 2024-01-03 11:46:32
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'

export const COMMON = {
  id: '@id',
  create_time: '@datetime',
  update_time: '@now',
}

export const USER_TOKEN = '@string(64)'

export const SMS_CODE = '@integer(1000, 9999)'

export const BASICS_USER = {
  uid: '@id(6)',
  user_name: '@cname',
  avatar: '@image("200x200", "#3b82f6", "#fff", "avatar")',
  phone: '@phone',
  email: '@email',
  sex: '@integer(1, 3)',
  birthday: '@datetime("yyyy-MM-dd")',
  nick_name: '@cname',
}

export const USER_BAND_INFO = {
  wx_code: '@string(5, 10)',
  is_wx: '@boolean',
  qq_code: '@integer(100000, 1000000000)',
  is_qq: '@boolean',
  wb_code: '@string(5, 10)',
  is_wb: '@boolean',
}

export const USER_INFO = {
  ...BASICS_USER,
  ...USER_BAND_INFO,
}

export const BANNER_URL = Mock.mock(
  '@image("750x400", "#eff6ff", "#475569", "Magic Cat Banner")',
)

export const CommonNotices = Mock.mock({
  'list|10-40': [
    {
      ...COMMON,
      title: '@ctitle(10, 20)',
      is_read: '@boolean',
    },
  ],
})

export const CommonBanner = Mock.mock({
  'swipe|2-4': [
    {
      ...COMMON,
      url: '@image("750x400", "#eff6ff", "#475569", "每日免费限时开放")',
    },
  ],
})

export const CommonUser = Mock.mock({ ...USER_INFO, ...COMMON })

export const CommonSms = Mock.mock({
  code: SMS_CODE,
})

export const CommonAuth = Mock.mock({
  token: USER_TOKEN,
  user_info: USER_INFO,
})
