import './style.css'
import Logo from '../../Logo_v1.png'
import Connexion from '../Connexion'
export default function Header(){


    return(
        <header className="header">
            <img src={Logo} alt="logo du site"  width="400"/>
            <div className="box--title">
                <h1>Kid'Oz'Anges</h1>
            </div>

            <nav className="navBar">
                <a href="/">Recherche</a>
                <a href="/signup">Inscription</a>
                <Connexion/>
            </nav>

        </header>
    )
}