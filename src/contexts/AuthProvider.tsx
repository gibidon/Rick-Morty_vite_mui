import { createContext, useState } from 'react'

export type TUser = string

interface AuthProviderProps {
  children: React.ReactNode
}

interface IAuthContext {
  user: TUser
  signin: (newUser: TUser, callback: Function) => void
  signout: (callback: Function) => void
}

const initialAuthContext:IAuthContext = {user:'',signin:()=>{},signout:()=>{}}

export const AuthContext = createContext<IAuthContext>(initialAuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<TUser>('')

  const signin = (newUser: TUser, callback: Function) => {
    setUser(newUser)
    callback()
  }

  const signout = (callback: Function) => {
    setUser('')
    callback()
  }

  const contextValue = { user, signin, signout }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
