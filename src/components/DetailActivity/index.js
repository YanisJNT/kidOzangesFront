import React from 'react'
import Comments from './Comments'
import { Rating } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { useParams, useHistory} from 'react-router'

import { Button } from 'semantic-ui-react'
import axios from 'axios'

import Page404 from '../Page404'
//import jwt_decode from 'jwt-decode'
import './style.css'


export default function DetailActivity() {
  const history = useHistory()
  useEffect(() => {
    document.title = "Détail d'une activité"
 }, []);
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
  const [posinset, setPosinset] = useState(0)
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
  //function for not rate 2 time
  const secondRateNotPossible = (secondRateAfter) => {
    document.querySelector(".pvide").textContent = 'Vous ne pouvez pas noter deux fois l\'activité'
    setPosinset("")
    setTimeout(secondRateAfter = () => {
      document.querySelector(".pvide").textContent = ''
    }, 2000)
  }




  //handle to submit rate and comment
  const handleSubmitComment = async (evt, callback) => {
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
    const secondRate = response.data.erreur
    secondRate ? secondRateNotPossible() :
      console.log("post", response.data.erreur)
    getData()
    setComment('')

  }

  const getData = () => {
    axios.get(`https://kidozanges.herokuapp.com/api/activity/${id}`)
      .then((response) => {
        if(response.data.erreur) {
          return(
            history.push("/notFound")
          )
        }
        setTown(response.data.activity.town)
        setActivityTitle(response.data.activity.title)
        setDescription(response.data.activity.description)
        setIsFree(response.data.activity.free)
        setPicture(response.data.activity.url)
        setReceiveComment(response.data.comments)
        setActivityAverageRate(response.data.rate.moyenne)
        setZipCode(response.data.activity.zipcode)
      })
      .catch((error) => {
        console.log(error)
        
      })
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="activity__container">
      <div className="activity">
        <section className="header--card">
          <img
            src={picture}
            className="activity__detail--img"
            alt="activité"
          />

          <section id="text--presentation">
            <p className="activity__detail--rate"> {activityAverageRate > 0.001 ? `Note moyenne: ${activityAverageRate}/5` : "Cette activité n'a pas encore été notée."}</p>

            <h1 className="activity__title">{activityTitle}</h1>
            <p className="activity__description">{description}</p>
            <p className="activity__town">{town}-{zipCode} </p>
            {
              (isFree) ?
                <p className="payable">Cette activité est gratuite.</p> :
                <p className="payable">Cette activité est payante.</p>
            }
          </section>
        </section>

        {/* <Rating
          className="rating__Ofactivity"
          size="huge"
          icon='star'
          rating={activityAverageRate}
          maxRating={5}
          disabled
        />*/}

        <div className="chat__comment--container">
          {receiveComment !== "Cette activité ne contient pas de commentaire" ? <Comments
            class
            listComment={receiveComment}
          /> : <p id="notComment">{receiveComment}</p>
          }


          <form className="form__detailActivity"
            action=""
            onSubmit={handleSubmitComment}
            method="POST"
            value="dsfsdfsd">
            <h3>Donner un avis ?</h3>
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
            <p className="pvide"></p>
            <div>
              <Rating

                className="rating__activity"
                maxRating={5}
                value={posinset}
                defaultRating={0}
                icon='star'
                size='huge'
                onClick={handleChange}
              />
            </div>
            <input
              type="hidden"
              name="rate"
              value={posinset} />

            <Button id="button__activity">Envoyer</Button>
          </form>
        </div>
      </div>

    </div>
  )
}
