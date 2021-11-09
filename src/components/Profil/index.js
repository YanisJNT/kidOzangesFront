import './style.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { useState,useEffect, useRef } from 'react'

export default function Profil() {
    const token = localStorage.getItem("token")
    let  dataToken = jwt_decode(token)
    const [nickname, setNickname] = useState(dataToken.nickname)
    const [newNickname, setNewNickname] = useState()
    const [newEmail, setNewEmail] = useState()
    const [data, setData] = useState(false)
    

    console.log(dataToken)


    
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
    
    useEffect(()=> {
        axios.get("https://kidozanges.herokuapp.com/api/user/", {
        headers: {
            authorization: `Bearer ${token}`
        },
    })
        .then((response) => {
           setNickname(response.data.user.nickname)
        })
        .catch(error=> console.log(error))})

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
        setData(true)
        dataToken.nickname =  newNickname

        console.log(dataToken)
 
        console.log(response.data.newNickname);
        setNickname(response.data.newNickname)
        document.querySelector(".profil--subtitle").textContent = nickname;
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
                <p className="profil--subtitle">{nickname} </p>
                <button className="profil--button" onClick={handleNickname}> Modifier le surnom </button>

                <form action="" className="form-nickname" onSubmit={submitNickname}>
                    <input type="text" className="input-edit" onChange={(event) => setNewNickname(event.target.value)} />
                    <button>Valider Votre nouveau pseudo</button>
                </form>
                <p >{dataToken.lastname}</p>
                <p>{dataToken.firstname}</p>
                <p className="profil--subtitle--email">{dataToken.email}</p>
                <p>{dataToken.gender}</p>
            </div>
        </div>
    )
}