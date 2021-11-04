import './style.css'
import jwt_decode from 'jwt-decode'

export default function Profil() {
    const token = localStorage.getItem("token")
    const dataToken = jwt_decode(token)

    return (
        <div id="profil">
            <p className="profil--subtitle">{dataToken.nickname} </p>
            <p >{dataToken.lastname}</p>
            <p>{dataToken.firstname}</p>
            <p>{dataToken.email}</p>
            <p>{dataToken.gender}</p>
        </div>
    )
}
