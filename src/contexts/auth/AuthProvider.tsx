import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import userService from "../../services/user/user.service";

interface AuthProviderProps {
  children: ReactNode | JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const validatetoken = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        const { data } = await userService.validadeAccess();
        if (data) {
          setUser(data);
        }
      }
    }
    validatetoken();
  }, [])

  const signin = async (email: string, password: string): Promise<boolean> => {
    const { data } = await userService.login({ email, password });
    if (data) {
      setUser(data.user);
      setToken(data.access_token)
      return true;
    }
    return false;
  }

  const signout = () => {
    //userService.signout();
    setUser(null)
    setToken('')
  }

  const setToken = (token: string) => {
    localStorage.setItem('access_token', token)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}