import './style.css'
import Logo from '../../Logo_v1.png'
import Connexion from '../Connexion'
export default function Header(){
    const token = localStorage.getItem("token");

    const loginNav = () => {
        if(token){
            return(
                <nav className="navBar">
                    <a href="/">Recherche</a>
                    <a href="/logout">déconnexion</a>
                    <a href="/">Mon profile</a>
                </nav>
            )
        } else{
            return(
                <nav className="navBar">
                    <a href="/">Recherche</a>
                    <a href="/">Inscription</a>
                    <Connexion/>
                </nav>
            )
        }
    }

    return(
        <header className="header">
            <img src={Logo} alt="logo du site"  width="400"/>
            <div className="box--title">
                <h1>Kid'Oz'Anges</h1>
            </div>

            {loginNav()}

        </header>
    )
}