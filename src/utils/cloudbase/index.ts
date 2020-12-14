import cloudbase from '@cloudbase/js-sdk'

// 实例化app
export const app = cloudbase.init({
  env: process.env.REACT_APP_ENV_ID || ''
})

// 实例化auth
// 鉴权保存方式 - localstorage
export const auth = app.auth({persistence: 'local'})

// 微信鉴权
export const weixinAuth = auth.weixinAuthProvider({
  appid: process.env.REACT_APP_APP_ID || '',
  scope: 'snsapi_userinfo'
})
