import { createContext, useState } from 'react'

export type TUser = string

interface AuthProviderProps {
  children: React.ReactNode
}

interface IAuthContext {
  user: string | null
  signin: (newUser: string, callback: Function) => void
  signout: (callback: Function) => void
}

const initialAuthContext: IAuthContext = {
  user: null,
  signin: () => {},
  signout: () => {},
}

export const AuthContext = createContext(initialAuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null)

  const signin = (newUser: string, callback: Function) => {
    setUser(newUser)
    callback()
  }

  const signout = (callback: Function) => {
    setUser(null)
    callback()
  }

  const contextValue = { user, signin, signout }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
