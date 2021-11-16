import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Logout() {
    useEffect(() => {
        document.title = "Déconnection"
     }, []);

    const history = useHistory();
    localStorage.removeItem("token")
    history.push("/");
    window.location.reload();


    return;
}