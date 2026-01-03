import { createContext, useContext } from "react";

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
