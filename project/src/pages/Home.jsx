import { useEffect, useRef, useState } from "react";
import PageLayout from "../components/HomeLogin/PageLayout";
import { redirect } from "react-router";
import Keycloak from "keycloak-js";
import useAuth from "../hooks/useAuth.jsx";
import { useLoaderData } from "react-router-dom";
import { client } from "../hooks/useAuth.jsx";
import { useSelector } from "react-redux";

export default function HomePage() {
  const isLogin = useAuth();
  const isLoggedIn = useSelector((store) => store.authorization.isLoggedIn);
  console.log(isLogin);

  useEffect(() => {
    document.title = "Oracleclock";
    if (isLoggedIn) {
      client
        .loadUserProfile()
        .success((profile) => {
          alert(JSON.stringify(profile.firstName, null, ""));
        })
        .error(() => alert("Failed"));
    }
  }),
    [];
  return isLoggedIn ? <PageLayout /> : <h1>Not Logged In</h1>;
}

export async function action({ params, request }) {
  console.log("checker");
  return redirect("/dashboard");
}
