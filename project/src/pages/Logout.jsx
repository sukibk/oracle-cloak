import { client } from "../hooks/useAuth.jsx";
import { redirect } from "react-router";

export async function loader() {
  const response = await client
    .logout(
      "http://localhost:8080/realms/oracle-development/protocol/openid-connect/logout"
    )
    .then(() => {
      alert("Successful logout");
      redirect("/");
    })
    .catch(() => alert("Something went wrong"));
}
