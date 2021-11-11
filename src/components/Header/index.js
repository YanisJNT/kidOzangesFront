/* eslint-disable react-hooks/rules-of-hooks */
import './style.css'
import Logo from '../../Logo_v1.png'
import Connexion from '../Connexion'
import { useState } from 'react'
import Recherche from '../Recherche'
import {
  Icon,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'
import SlideBar from './slidebar'


export default function header() {
  const token = localStorage.getItem("token");
  /*hamburger.addEventListener("click", () => {
      document.querySelector(".hiddenNav").style.display="block";
  })*/

  const handleHamburger = (event) => {
    console.log(document.querySelector("#icon-hamburger"))
    //console.log(document.querySelector("#slidebar"))
    document.querySelector("#slidebar").style.width = "250px"
    document.querySelector("#slidebar").style.padding = "1rem"
    setTimeout(() => {
      document.querySelector(".icon-hamburger").style.display="none";
    },800)


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
      <SlideBar />
      <div className="header-column">
        <div className="box--img">
          <img className="img--header" src={Logo} alt="logo du site" width="300" />
        </div>
        <div className="box--title">
          <h1>Kid'Oz'Anges</h1>
        </div>



        {loginNav()}
        <div className="box--hamburger">
          <Icon onClick={handleHamburger} id="icon-hamburger" className="icon-hamburger" name='bars' size="big" />
        </div>
      </div>
  


    </header>
  )
}