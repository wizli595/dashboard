import { useContext } from "react";
import userContext from "./userCtxt";
export const useUser = () => {
  return useContext(userContext);
};
