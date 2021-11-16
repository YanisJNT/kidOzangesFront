import React from 'react'
import { useEffect } from 'react'
import './style.css'
import Enfant from "../../img/enfantperdu.jpg"

export default function Page404(){
  useEffect(() => {
    document.title = "Page 404"
 }, []);
  
  return (
    <div
      className="page404__container">
      <div className="page404__img">
        <img  className="page404__img--image"src={Enfant} alt="image enfant perdu" />
      </div>
      <div className="page404__content">
        <h1 className="page404__title">Oups !!!</h1>
        <p className="page404__para">Tu sembles t'être égaré sur notre site</p>
        <a href="/" classname="page404__button">Retourner à l'accueil</a>
      </div>
    </div>
  )
}