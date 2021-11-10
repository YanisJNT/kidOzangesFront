import React from 'react'
import Comments from './Comments'
import { Rating } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
//import jwt_decode from 'jwt-decode'
import './style.css'


export default function DetailActivity() {
  const token = localStorage.getItem("token")
  //const dataToken = jwt_decode(token)
  //let user = dataToken.nickname


  const { id } = useParams()
  const [town, setTown] = useState("")
  const [activityTitle, setActivityTitle] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [comment, setComment] = useState()
  const [isFree, setIsFree] = useState()
  const [posinset, setPosinset] = useState("0")
  const [picture, setPicture] = useState()
  const [receiveComment, setReceiveComment] = useState([])
  const [activityAverageRate, setActivityAverageRate] = useState()
  const [zipCode, setZipCode] = useState()


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
    setTitle(evt.target.value)
  }
  //handle to submit rate and comment

  const handleSubmitComment = async (evt) => {
    evt.preventDefault();
    const response = await axios.post(`https://kidozanges.herokuapp.com/api/activity/${id}/comment`, {

      title,
      rate,
      comment,
    }, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

  }

  //useEffect(() => {
    axios.get(`https://kidozanges.herokuapp.com/api/activity/${id}`)
      .then((response) => {
        setTown(response.data.activity.town)
        setActivityTitle(response.data.activity.title)
        setDescription(response.data.activity.description)
        setIsFree(response.data.activity.free)
        setPicture(response.data.activity.url)
        setReceiveComment(response.data.comments)
        setActivityAverageRate(response.data.rate.moyenne)
        setZipCode(response.data.activity.zipcode)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  //}, [id])
  console.log(receiveComment)
  console.log(activityAverageRate)
  return (
    <div className="activity__container">

      <div className="activity__presentation">
        <img
          src={picture}
          className="activity__detail--img"
          alt="bordel"
        />
        <p className="activity__detail--rate">Note: {activityAverageRate}/5</p>

        <h1 className="activity__title">{activityTitle}</h1>
        <p className="activity__description">{description}</p>
        <p className="activity__town">{town}-{zipCode} </p>

        {/* <Rating
          className="rating__Ofactivity"
          size="huge"
          icon='star'
          rating={activityAverageRate}
          maxRating={5}
          disabled
        />*/}
        {
          (isFree) ?
            <p className="payable">Cette activité est gratuite</p> :
            <p className="payable">Payant donne du cache</p>
        }
      </div>
      <div className="chat__comment--container">
        <Comments
          class
          listComment={receiveComment}
        />
        <form className="form__detailActivity"
          action=""
          onSubmit={handleSubmitComment}
          method="POST">
          <label
            htmlFor="title">titre du commentaire</label>
          <input
            className="title__detailActivity"
            type="text"
            name="title"
            onChange={handleTitleComment}
            value={title}></input>
          <label
            htmlFor="textarea">Commentaire
          </label>
          <textarea
            className="textarea__detailActivity"
            onChange={handleCommentChange}
            value={comment}
            name="test"
            id="textarea"
            cols="30"
            rows="10"
          >
          </textarea>

          <Rating

            className="rating__activity"
            maxRating={5}
            value={posinset}
            defaultRating={0}
            icon='star'
            size='huge'
            onClick={handleChange}
          />
          <input
            type="hidden"
            name="rate"
            value={posinset} />
          <button
            className="button__activity"
            type="submit"
          >
            ENVOYER</button>
        </form>


        <p className="activity__url">url site</p>


      </div>
    </div>
  )
}
