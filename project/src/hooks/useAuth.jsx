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
  const isRun = useRef(false); //Try to put this into LocalStorage and read from there and then leave it to
  // idle for 5 minutes and try to refresh the page

  const isLogin = useSelector((store) => store.authorization.isLoggedIn);
  const loginDispatch = useDispatch();

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    if (isLogin === true) return;
    console.log("Auth triggered");
    client.init({ onLoad: "login-required" }).then((res) => {
      loginDispatch(authorizationActions.logUserIn());
      loginDispatch(
        authorizationActions.setUser({
          user: client.tokenParsed,
        })
      );
    });

    // loginDispatch(loadUserData());
    document.title = "Oracleclock";
  });

  return isLogin;
}
