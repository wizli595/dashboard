import { useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";
import { useState } from "react";
import axios from "axios";

const useLogIn = (info) => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", info)
      .then((rs) => {
        setStatus(rs.data);
        if (rs.data.success) {
          setUser(rs.data.user._id);
          navigate("/");
        }
      })
      .catch((err) => setStatus(err.error));
  };
  return { status, handleLogIn };
};

export default useLogIn;
