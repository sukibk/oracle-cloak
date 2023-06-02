import { useEffect } from "react";
import PageLayout from "../components/HomeLogin/PageLayout";
import { redirect } from "react-router";

export default function HomePage() {
  // useEffect(() => {
  //   document.title = "Oracleclock";
  // });
  return <PageLayout />;
}

// export async function loader({ params }) {
//   console.log("loading");
//   return null;
// }

export async function action({ params, request }) {
  console.log("checker");
  return redirect("/dashboard");
}
