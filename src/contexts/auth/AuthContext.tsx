import { createContext } from "react";
import { User } from "../../types/User";

export interface AuthContextProps {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(null!);