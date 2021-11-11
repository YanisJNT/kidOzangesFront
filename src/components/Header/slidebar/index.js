import './style.css'
/* eslint-disable react-hooks/rules-of-hooks */
import './style.css'

import Connexion from '../../Connexion'
import Logo from '../../../Logo_v1.png'

import {
    Icon,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'

export default function slideBar() {
    const token = localStorage.getItem("token");

    const loginNav = () => {
        if (token) {
            return (
                <nav className="navBarTic">
                    <NavLink to="/recherche"><Icon name='search' /></NavLink>
                    <NavLink to="/profil"><Icon name='user circle' /></NavLink>
                    <NavLink to="/logout"><Icon color="red" name='log out' /></NavLink>
                </nav>

            )
        } else {
            return (
                <nav className="navBarTic">
                    <NavLink to="/recherche"><Icon disabled name='search' /> Recherche</NavLink>
                    <NavLink to="/signup"><Icon disabled name='signup' /> Inscription</NavLink>

                    <Connexion />
                </nav>
            )
        }
    }


    const closeHamburger = () => {
        document.querySelector("#slidebar").style.width="0px";
        document.querySelector("#slidebar").style.padding="0rem"
        document.querySelector(".icon-hamburger").style.display="block";
    }


    return (
        <div id="slidebar">
    
            <Icon className="close" onClick={closeHamburger} size="big" name="close" />

            <img src={Logo} alt="logo du site" width="200" />

            {loginNav()}

        </div>
    )
}