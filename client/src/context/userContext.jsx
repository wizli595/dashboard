import { useEffect, useState } from "react";
import userContext from "./userCtxt";


// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {

    return localStorage.getItem('userId');
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('userId', user);
    } else {
      localStorage.removeItem('userId');
    }
  }, [user]);
  const value = {
    user,
    setUser,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
