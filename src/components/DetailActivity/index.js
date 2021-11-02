import React from 'react'
import './style.css'

export default function DetailActivity() {
  return (
    <div className="activity__container">
      <div className="activity__presentation">
        <img src={'https://tse3.mm.bing.net/th?id=OIP.voR5IYjSALKRwo92e5gKPAHaEK&pid=Api&P=0&w=338&h=191'} className="activity__img" alt="bordel" />
        <h1 className="activity__title">Titre de l'activité</h1>
      </div>
      <div className="activity__detail--container">
        <p className="activity__detail">Adresse de l'activité:</p>
        <p className="activity__detail">Horaire de l'activité:</p>
        <p className="activity__detail">Description de l'activité:</p>
      </div>
      <p className="activity__url">url site</p>
    </div>
  )
}

