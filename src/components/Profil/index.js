import './style.css'
import axios from 'axios'
import { Button, Icon, Header, Modal, Input } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'

export default function Profil() {
    const token = localStorage.getItem("token")
    const [nickname, setNickname] = useState()
    const [newNickname, setNewNickname] = useState()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastName] = useState()
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
    const [data, setData] = useState(false)
    const [open, setOpen] = useState(false)

    // console.log(dataToken)

    const handleNickname = (event) => {
        event.preventDefault()
        document.querySelector(".profil--subtitle").style.display = "none";
        document.querySelector(".form-nickname").style.display = "block";
        document.querySelector(".input-edit").style.display = "inline"
        document.querySelector(".button").style.display = "none"
    }
    useEffect(() => {
        document.title = "Profil"
     }, []);
     
    useEffect(() => {
        axios.get("https://kidozanges.herokuapp.com/api/user/", {
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                setNickname(response.data.user.nickname)
                setEmail(response.data.user.email)
                setLastName(response.data.user.lastname)
                setFirstname(response.data.user.firstname)
                setGender(response.data.user.gender)

            })
            .catch(error => console.log(error))
    })

    const submitNickname = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token")

        const response = await axios.patch("https://kidozanges.herokuapp.com/api/user/updatenickname", {
            nickname: newNickname
        }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        setData(true)
        // dataToken.nickname = newNickname

        // console.log(dataToken)

        console.log(response.data.newNickname);
        setNickname(response.data.newNickname)
        document.querySelector(".profil--subtitle").textContent = nickname;
        window.location.reload();
    }
    // console.log(dataToken.nickname)

    const deleteProfil = async () => {

        await axios.delete("https://kidozanges.herokuapp.com/api/user/delete", {
            headers: {
                authorization: `Bearer ${token}`
            },
        })
        localStorage.removeItem("token")
        return (
            <Redirect to="/logout" />
        )

    }

    return (
        <div id="profil">
            <div className="box--profil">


                <div className="profil--card">
                    <div className="profil--card__info">
                        <span>Civilité :</span>
                        <span>{gender}</span>
                    </div>
                    <div className="profil--card__info">
                        <span className="pseudo"> Pseudo :</span>
                        <button className="ui icon button petit" onClick={handleNickname} >Modifier<i aria-hidden="true" className="pencil icon"></i></button>
                        <span className="profil--subtitle">{nickname}</span>
                        <form action="" className="form-nickname" onSubmit={submitNickname}>
                            <Input className="input-edit" placeholder='Votre nouveau pseudo' onChange={(event) => setNewNickname(event.target.value)}> <input data-testid='my-input-1' /> </Input>
                            <button className="input--validation ui icon">Valider</button>
                        </form>
                    </div>

                    <div className="profil--card__info">
                        <span>Nom :</span>
                        <span>{lastname}</span>
                    </div>
                    <div className="profil--card__info">
                        <span>Prénom :</span>
                        <span>{firstname}</span>
                    </div>
                    <div className="profil--card__info">
                        <span>Mail :</span>
                        <span>{email}</span>
                    </div>
                    <Modal
                        closeIcon
                        open={open}
                        trigger={<div className="delete--button"><button className="ui negative button">Supprimer votre profil</button></div>}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}>
                        <Header icon='warning' content='ATTENTION:' />
                        <Modal.Content>
                            <p>
                                Vous allez supprimer votre compte, êtes-vous sûr de vouloir continuer ?
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red' onClick={() => setOpen(false)}>
                                <Icon name='remove' /> No
                            </Button>
                            <Button color='green' onClick={deleteProfil}>
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>

            </div>
        </div>
    )
}
