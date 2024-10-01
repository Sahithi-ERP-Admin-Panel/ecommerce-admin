import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      debugger
      // const response = await fetch("http://localhost:8080/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      const res = {
        message : "success",
        token : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYWx1IiwiaWF0IjoxNzI3NzU0MzIwLCJleHAiOjE3Mjc3NTYxMjB9.Tn9d9v_M5rV3UFV-BdIQZ6lsch2W0xHgap5Ot3ORFQw",
        userName : "balu"
      }

      //await response.json();
      if (res.token) {
        setUser(res.userName);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/dashboard");
        return;
      } else {
        if (res.message)
          alert(res.message)
        else
          alert("something went wrong");
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};