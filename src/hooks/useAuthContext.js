import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  // consume context
  const context = useContext(AuthContext);

  if (!context) {
    // verify scope
    throw Error("useAuthContext must be used within an AuthContext Provider");
  }

  return context;
};
