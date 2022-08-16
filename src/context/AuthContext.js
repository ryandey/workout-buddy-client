import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

// determine the initial state
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // check local storage for user
  // automatically logs them in and updates that state in the UI
  useEffect(() => {
    // parse local storage item into json from string
    const user = JSON.parse(localStorage.getItem("user"));

    // set auth context if user is found in local storage
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
