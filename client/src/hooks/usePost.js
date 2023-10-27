import axios from "axios";
import { useState } from "react";

const usePost = () => {
  const [status, setStatus] = useState("");
  const handlePost = (data) => {
    axios
      .post("http://localhost:3000/employee/create", data)
      .then((rsp) => setStatus(rsp.data))
      .catch((err) => setStatus(err.message));
  };

  return { status, handlePost };
};
export default usePost;
