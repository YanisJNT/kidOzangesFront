import React from 'react'
import { Rating } from 'semantic-ui-react'
import { useState } from 'react'
import { useParams } from 'react-router'
import './style.css'
import axios from 'axios'


export default function DetailActivity() {

  const { id } = useParams()
  const [town, setTown] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [posinset, setPosinset] = useState("3")
  const handleChange = (evt) => {
    setPosinset(evt.target.ariaPosInSet)
  }

  axios.get(`https://kidozanges.herokuapp.com/api/activity/${id}`)
    .then((response) => {
     console.log(response.data)
      setTown(response.data.activity.town)
      setTitle(response.data.activity.title)
      setDescription(response.data.activity.description)
    })
    .catch((error)=>{
      console.error(error)
    })
  return (


    <div className="activity__container">
      
      <div className="activity__presentation">
        <img src={'https://tse3.mm.bing.net/th?id=OIP.voR5IYjSALKRwo92e5gKPAHaEK&pid=Api&P=0&w=338&h=191'} className="activity__detail--img" alt="bordel" />
        <Rating className="rating__Ofactivity" size="huge" icon='star' defaultRating={0} maxRating={5} />
        <h1 className="activity__title">{title}</h1>
        <p className="activity__town">{town}</p>
        <p className="activity__description">{description}</p>

        <form className="form__detailActivity" action="" method="post">
          <label htmlFor="textarea">Commentaire</label>
          <textarea className="textarea__detailActivity" name="test" id="textarea" cols="30" rows="10"></textarea>
          <Rating className="rating__activity" maxRating={5} value={posinset} defaultRating={3} icon='star' size='huge' onClick={handleChange} />
          <input type="hidden" name="rate" value={posinset} />
          <button className="button__activity" type="submit">ENVOYER</button>
        </form>

        <p className="activity__url">url site</p>

      </div>
    </div>
  )
}
