import './style.css'
import Logo from '../../Logo_v1.png'
import Connexion from '../Connexion'
import { Icon } from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'
export default function Header(){
    const token = localStorage.getItem("token");

    const loginNav = () => {
        if(token){
            return(
                <nav className="navBar">
                    <NavLink to="/">Recherche</NavLink>
                    <NavLink to="/profil"><Icon  name='user circle' /></NavLink>
                    <NavLink to="/logout"><Icon  name='log out' /></NavLink>
                </nav>
            )
        } else{
            return(
                <nav className="navBar">
                    <NavLink to="/">Recherche</NavLink>
                    <NavLink to="/signup">Inscription</NavLink>
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