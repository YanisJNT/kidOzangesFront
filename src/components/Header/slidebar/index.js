import './style.css'
/* eslint-disable react-hooks/rules-of-hooks */
import './style.css'

import Connexion from '../../Connexion'

import jwt_decode from 'jwt-decode'

import {
    Icon,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'

export default function slideBar() {
    const token = localStorage.getItem("token");

    const loginNav = () => {
        if (token) {
            const dataToken = jwt_decode(token)
            if(dataToken.role === "user") {
                return (
                    <nav className="navBarTic">
                        <NavLink to="/submitactivity">Soumettre une activité</NavLink>
                        <NavLink to="/recherche">Rechercher une activité</NavLink>
                        <NavLink to="/profil">Profil</NavLink>
                        <NavLink to="/logout">Déconnexion</NavLink>
                    </nav>
    
                )
            } else if (dataToken.role === "admin") {
                return (
                <nav className="navBarTic">
                        <NavLink to="/admin">Administrer</NavLink>
                        <NavLink to="/submitactivity">Soumettre une activité</NavLink>
                        <NavLink to="/recherche">Rechercher une activité</NavLink>
                        <NavLink to="/profil">Profil</NavLink>
                        <NavLink to="/logout">Déconnexion</NavLink>
                </nav>
                )
            }
            
        } else {
            return (
                <nav className="navBarTic">
                    <NavLink to="/recherche">Rechercher une activité</NavLink>
                    <NavLink to="/signup">Inscription</NavLink>
                    <Connexion />
                </nav>
            )
        }
    }


    const closeHamburger = () => {
        document.querySelector("#slidebar").style.width="0px";
        document.querySelector("#slidebar").style.padding="0rem"
    }


    return (
        <div id="slidebar">
            <Icon className="close--header" onClick={closeHamburger} size="big" name="close" color="blue" />
            {loginNav()}
        </div>
    )
}