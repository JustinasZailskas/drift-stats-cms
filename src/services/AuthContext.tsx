import { createContext, useEffect, useState } from "react";
import ChildrenProps from "../interface/ChildrenProps";
import { useNavigate } from "react-router";

interface UserInterface {
  username: string;
  password: string;
}
type AuthType = {
  user: UserInterface;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const initialUser: UserInterface = {
  username: "",
  password: "",
};

const AuthContext = createContext<AuthType>({
  user: initialUser,
  isAuthenticated: false,
  error: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: ChildrenProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface>(initialUser);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {}, [user, isAuthenticated]);

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch("http://localhost:7438/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Nepavyko prisijungti");
      setIsAuthenticated(true);
      setError(null);
      localStorage.setItem("token", data.token); // Saugo tokeną
      navigate("/dashboard", { replace: true });
      return data;
    } catch (error: any) {
      setError(error.message);
    }
  };

  const logout = () => {
    setUser(initialUser);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate({ pathname: "" }, { replace: true });
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
