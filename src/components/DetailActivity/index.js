import React from 'react'
import { Rating } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './style.css'
import axios from 'axios'

export default function DetailActivity() {

  const { id } = useParams()
  const [town, setTown] = useState("")
  const [title, setTitle] = useState("")
  const [titleDescription, setTitleDescription] = useState("")
  const [description, setDescription] = useState("")
  const [comment, setComment] = useState()
  const [isFree, setIsFree] = useState()
  const [posinset, setPosinset] = useState("3")

  let rate = posinset

  //handler to give rate
  const handleChange = (evt) => {
    setPosinset(evt.target.ariaPosInSet)
  }
  //handler of the textarea(comment)
  const handleCommentChange = (evt) => {
    setComment(evt.target.value)
  }
  const handleTitleComment = (evt) => {
    setTitleDescription(evt.target.value)
  }
  //handle to submit rate and comment
  const handleSubmitComment = (evt) => {
    evt.preventDefault();
    const response = axios.post(`https://kidozanges.herokuapp.com/api/activity/:id/comment`, {
      rate,
      comment,
      titleDescription
    }).then((res) => {
      console.log(res)

    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    axios.get(`https://kidozanges.herokuapp.com/api/activity/${id}`)
      .then((response) => {
        console.log("réponse axios", response.data)
        setTown(response.data.activity.town)
        setTitle(response.data.activity.title)
        setDescription(response.data.activity.description)
        setIsFree(response.data.activity.free)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <div className="activity__container">
      <div className="activity__presentation">
        <img src={'https://tse3.mm.bing.net/th?id=OIP.voR5IYjSALKRwo92e5gKPAHaEK&pid=Api&P=0&w=338&h=191'} className="activity__detail--img" alt="bordel" />

        <Rating className="rating__Ofactivity" size="huge" icon='star' defaultRating={0} maxRating={5} />
        {
          (isFree) ?
            <p className="payable">Cette activité est gratuite</p> :
            <p className="payable">Payant donne du cache</p>
        }
        <h1 className="activity__title">{title}</h1>
        <p className="activity__town">{town}</p>
        <p className="activity__description">{description}</p>

        <form className="form__detailActivity" action="" onSubmit={handleSubmitComment} method="POST">
          <label htmlFor="title">titre du commentaire</label>
          <input className="title__detailActivity" type="text" name="title" onChange={handleTitleComment} value={titleDescription}></input>
          <label htmlFor="textarea">Commentaire</label>
          <textarea className="textarea__detailActivity" onChange={handleCommentChange} value={comment} name="test" id="textarea" cols="30" rows="10"></textarea>
          <Rating className="rating__activity" maxRating={5} value={posinset} defaultRating={0} icon='star' size='huge' onClick={handleChange} />
          <input type="hidden" name="rate" value={posinset} />
          <button className="button__activity" type="submit">ENVOYER</button>
        </form>

        <p className="activity__url">url site</p>

      </div>
    </div>
  )
}
