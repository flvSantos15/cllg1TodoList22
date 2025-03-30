import { destroyCookie, parseCookies } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { signOutFirebase } from "../shared/services/firebase/auth";

interface IAuthContextData {
  isAuthenticated: boolean;
  signOut: () => Promise<void>;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

async function signOut() {
  const url = window.location.href;
  const isHomePage = url.includes("/home");

  if (!isHomePage) return;

  await destroyCookie(undefined, "token", {
    path: "/",
  });
  await destroyCookie(undefined, "user", {
    path: "/",
  });

  await signOutFirebase();

  window.location.href = "/";
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { user } = parseCookies();
    const { token } = parseCookies();
    const url = window.location.href;
    const isHomePage = url.includes("/home");

    if (user && token) {
      setIsAuthenticated(true);

      if (!isHomePage) {
        window.location.href = "/home";
      }
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
