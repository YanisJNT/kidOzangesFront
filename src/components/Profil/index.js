import './style.css'
import jwt_decode from 'jwt-decode'
import { useState } from 'react'
import Modify from '../ModifyButton'

export default function Profil() {
    const token = localStorage.getItem("token")
    const dataToken = jwt_decode(token)
    const [nickname,setNickname]= useState(false)
    const [email,setEmail] = useState(false)
    const [newNickname,setNewNickname] = useState()
    const [newEmail,setNewEmail] = useState()
    
    const handleNickname = (event)=> {
        event.preventDefault()
        setNickname(!nickname)
        document.querySelector(".profil--subtitle").style.display="none";
        document.querySelector(".form-nickname").style.display="block";

    }

    const handleEmail = (event)=> {
        event.preventDefault()
        setEmail(!email)
        document.querySelector(".profil--subtitle--email").style.display="none";
        document.querySelector(".form-email").style.display="block";

    }

    const submitNickname = (event) => {
        event.preventDefault();
        console.log(newNickname)

    }

    const submitEmail = (event) => {
        event.preventDefault();
        console.log(newEmail)

    }

    
    return (
        <div id="profil">
        <div className="box--profil">
            <p className="profil--subtitle">{dataToken.nickname} </p>
            <button className="profil--button" onClick={handleNickname}> Modifier le surnom </button>
            
            <form action="" className="form-nickname" onSubmit={submitNickname}>
                <input type="text" className="input-edit" onChange={(event) =>setNewNickname(event.target.value) }/>
                <button>Valider Votre nouveau pseudo</button>
            </form>
            <p >{dataToken.lastname}</p>
            <p>{dataToken.firstname}</p>
            <p className="profil--subtitle--email">{dataToken.email}</p>
            <form action="" className="form-email" onSubmit={submitEmail}>
                <input type="email" className="input-edit" onChange={(event) => setNewEmail(event.target.value) }/>
                <button>Valider votre nouvel email</button>
            </form>
            <button className="profil--button" onClick={handleEmail}> Modifier l'email </button>
            <p>{dataToken.gender}</p>
        </div>
        </div>
    )
}

// L'idée du button modifier : il doit modifier le state du token.nickmane en fonction de ce que l'utilisateur va rentrer dans un input qui apparaitra
// 1 : créer un créer un state
// 2 : mettre en state initial le button avec la valeur du token 'nickname' de départ>
// 3 : modifier le state avec le setter du hook 'setnickname'
// 4 : appeler 