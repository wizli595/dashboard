import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ id }) => {
  const [data, setData] = useState({
    loading: true,
    users: [],
    err: "",
  });
  const { loading, users, err } = data;
  if (!id) id = "";
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee" + id)
      .then((resp) => {
        setData({
          loading: false,
          users: resp.data,
          err: "",
        });
      })
      .catch((rr) => {
        setData({
          loading: false,
          users: [],
          err: rr.message,
        });
      });
  }, [id]);
  return { loading, users, err };
};

export default useFetch;
