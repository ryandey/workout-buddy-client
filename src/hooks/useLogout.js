import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    // update auth context
    dispatch({ type: "LOGOUT" });

    // clear global state on logout
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
