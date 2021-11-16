import React from 'react'
import { useEffect } from 'react'
import './style.css'

export default function Page404(){
  useEffect(() => {
    document.title = "Page 404"
 }, []);
  
  return (
    <div
      className="page404__container">
      <a className="page404__img" href="/"><img src ="../../img/gohome_home_11162.png" alt="bouton retour" ></img></a>
      <h1 className="page404__title">404</h1>
      <p className="page404__para">not found</p>

    </div>
  )
}