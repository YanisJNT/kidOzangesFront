import { useHistory } from "react-router";

export default function Logout() {
    const history = useHistory();
    localStorage.removeItem("token")
    history.push("/");
    window.location.reload();


    return;
}