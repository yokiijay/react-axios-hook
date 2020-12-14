import React, { useEffect, useState } from 'react'
import { auth } from '../utils/cloudbase'

const AuthContext = React.createContext<unknown>(null)

// hooks
export function useAuth() {
  return React.useContext(AuthContext)
}

// Provider
export const AuthProvider: React.FC = ({ children })=>{
  const [loginState, setLoginState] = useState<unknown>()

  // 应用初始化时注册一个 权限变换监听器
  useEffect(()=>{
    // 当权限变化时触发修改状态
    auth.onLoginStateChanged((loginState:unknown)=>{
      console.log(loginState)
      setLoginState(loginState)
    })
  }, [])

  const values = {
    loginState
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
