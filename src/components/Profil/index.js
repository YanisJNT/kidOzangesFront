import './style.css'
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from 'react'
import userEvent from '@testing-library/user-event'

export default function Profil() {
    const token = localStorage.getItem("token")
    const dataToken = jwt_decode(token)

    const [data, setData] = useState("")



    const change = (event) => {
        const value = event.target.value;
        console.log(value);
        setData(value)
    }





    return (
        <div id="profil">
            <p className="profil--subtitle">{dataToken.nickname} </p>
            <p >{dataToken.lastname}</p>
            <p>{dataToken.firstname}</p>
            <p>{dataToken.email}</p>
            <p>{dataToken.gender}</p>
            <input type="file" name="file_path" value={data} onChange={change}     />
            <img src={data} alt="" width="250" height="250" />
        </div>
    )
}
