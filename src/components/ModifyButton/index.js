import {React,useState} from 'react'
import Profil from '../Profil'


export default function Modify() {
    const [modify,SetModify] = useState
    const onClick = () => SetModify()

    return (
        <div>
            <input type="text" value="Modifier" onClick={onClick} />
            {modify} ? <Profil />
        </div>
    )
}
