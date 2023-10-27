import axios from "axios";
import { useState } from "react";

const useDelete = () => {
  const [status, setStatus] = useState("");
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/employee/delete/" + id)
      .then((res) => setStatus(res.data))
      .catch((err) => setStatus(err.message));
  };
  return { status, handleDelete };
};

export default useDelete;
