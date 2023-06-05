import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authorizationActions } from "../components/store/authorization-slice.js";
import { loadUserData } from "../components/store/authorization-async-actions.js";

export const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

export default function useAuth() {
  // const [isLogin, setLogin] = useState(false);
  const isRun = useRef(false);

  const isLogin = useSelector((store) => store.authorization.isLoggedIn);
  const loginDispatch = useDispatch();

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    client
      .init({ onLoad: "login-required" })
      .then((res) => loginDispatch(authorizationActions.logUserIn()));
    //console.log(JSON.stringify(kc.tokenParsed));

    // loginDispatch(loadUserData());
    document.title = "Oracleclock";
  });

  return isLogin;
}
