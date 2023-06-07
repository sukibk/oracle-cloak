import { useSelector } from "react-redux";
import Button from "../utils/Button/Button";

export default function ProtectedElement(props) {
  const userRoles = useSelector(
    (state) => state.authorization.user.realm_access.roles
  );

  const isAdmin = userRoles.some((role) => {
    console.log(role);
    if (role === "admin") {
      return true;
    } else return false;
  });

  console.log(isAdmin);

  return <>{isAdmin && props.children}</>;
}
