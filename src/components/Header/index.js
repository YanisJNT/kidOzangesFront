/* eslint-disable react-hooks/rules-of-hooks */
import './style.css'
import Logo from '../../Logo_v1.png'
import Connexion from '../Connexion'
import { useState } from 'react'
import Recherche from '../Recherche'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'


export default function header() {
  const [visible, setVisible] = useState(false)
  const token = localStorage.getItem("token");
  /*hamburger.addEventListener("click", () => {
      document.querySelector(".hiddenNav").style.display="block";
  })*/

  const handleHamburger = (event) => {
    console.log(document.querySelector("#icon-hamburger"))
    document.querySelector(".toggle").classList.toggle("hiddenNav")
  }


  const loginNav = () => {
    if (token) {
      return (
        <nav className="navBar">
          <div className="toggle hiddenNav">
            <NavLink to="/recherche"><Icon name='search' /></NavLink>
            <NavLink to="/profil"><Icon name='user circle' /></NavLink>
            <NavLink to="/logout"><Icon color="red" name='log out' /></NavLink>
          </div>

        </nav>

      )
    } else {
      return (
        <nav className="navBar">
          <NavLink to="/recherche"><Icon name='search' /></NavLink>
          <NavLink to="/signup">Inscription</NavLink>
          <Connexion />
        </nav>
      )
    }
  }

  return (
    <header className="header">
      <div className="header-column">
        <img className="img--header" src={Logo} alt="logo du site" width="400" />
        <div className="box--title">
          <h1>Kid'Oz'Anges</h1>
        </div>



        {loginNav()}
      </div>
      <Icon onClick={handleHamburger} id="icon-hamburger" className="icon-hamburger" name='bars' size="big" />
    </header>
  )
}