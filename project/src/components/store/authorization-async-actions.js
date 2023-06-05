import { authorizationActions } from "./authorization-slice.js";
import { client } from "../../hooks/useAuth.jsx";

export const loadUserData = () => {
  return async (dispatch) => {
    const user = await client
      .loadUserProfile()
      .success((profile) =>
        dispatch(dispatch(authorizationActions.setUser({ user: user })))
      )
      .error("error in production");
  };
};
