import axios from "axios";
import { useState } from "react";

const useUpdate = () => {
  const [status, setStatus] = useState("");
  const handleUpdate = (id, data) => {
    axios
      .put("http://localhost:3000/employee/update/" + id, data)
      .then((resp) => setStatus(resp.data))
      .catch((err) => setStatus(err));
  };
  return { status, handleUpdate };
};

export default useUpdate;
