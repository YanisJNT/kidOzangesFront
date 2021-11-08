import './style.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function Profil() {
    const token = localStorage.getItem("token")
    let   dataToken = jwt_decode(token)
    const [nickname, setNickname] = useState(dataToken.nickname)
    const [newNickname, setNewNickname] = useState("sqdqsdqsd")
    const [newEmail, setNewEmail] = useState()

    
    const handleNickname = (event) => {
        event.preventDefault()
        document.querySelector(".profil--subtitle").style.display = "none";
        document.querySelector(".form-nickname").style.display = "block";
    }

    const handleEmail = (event) => {
        event.preventDefault()
        document.querySelector(".profil--subtitle--email").style.display = "none";
        document.querySelector(".form-email").style.display = "block";

    }

    const submitNickname = async (event) => {
        event.preventDefault();
        const token  =  localStorage.getItem("token")

        const response  =  await axios.patch("https://kidozanges.herokuapp.com/api/user/updatenickname",{
            nickname : newNickname
        },{
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        dataToken.nickname =  newNickname
        console.log(response.data)
        //window.location.reload();
    }

    const submitEmail = (event) => {
        event.preventDefault();
        console.log(newEmail);
    }
    console.log(dataToken.nickname)

    return (
        <div id="profil">
            <div className="box--profil">
                <p className="profil--subtitle">{dataToken.nickname} </p>
                <button className="profil--button" onClick={handleNickname}> Modifier le surnom </button>

                <form action="" className="form-nickname" onSubmit={submitNickname}>
                    <input type="text" className="input-edit" onChange={(event) => setNewNickname(event.target.value)} />
                    <button>Valider Votre nouveau pseudo</button>
                </form>
                <p >{dataToken.lastname}</p>
                <p>{dataToken.firstname}</p>
                <p className="profil--subtitle--email">{dataToken.email}</p>
                <form action="" className="form-email" onSubmit={submitEmail}>
                    <input type="email" className="input-edit" onChange={(event) => setNewEmail(event.target.value)} />
                    <button>Valider votre nouvel email</button>
                </form>
                <button className="profil--button" onClick={handleEmail}> Modifier l'email </button>
                <p>{dataToken.gender}</p>
            </div>
        </div>
    )
}

