import axios from "axios";
import { useState } from "react";

const useSignIn = (info) => {
  const [status, setStatus] = useState(null);
  const handleSign = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", info)
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => setStatus(err));
  };
  return { status, handleSign };
};

export default useSignIn;
