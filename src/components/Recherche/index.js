import React from "react";
import { Button, Modal, Form, Header } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Icon } from 'semantic-ui-react'
import { Redirect, useHistory} from "react-router";
import { Input } from "semantic-ui-react";
import { Radio } from "semantic-ui-react";


export default function Recherche() {
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const [zipcode, setZipCode] = useState("");

    const [free, setFree] = useState("");


    const [town, setTown] = useState("");
    const [dataTown, setDataTown] = useState("");
    const [activeChangeInput, setActiveChangeInput] = useState(false)
    const [limitData, setLimitData] = useState(5)

    const inputCode = async () => {
        try {
            const responce = await axios.get(`https://geo.api.gouv.fr/communes?nom=${town}&fields=nom,codeDepartement&limit=${limitData}&boost=population`);
            console.log(responce.data)
            // eslint-disable-next-line array-callback-return
            setDataTown(responce.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const jsxVille = () => {
        if (activeChangeInput) {
            const res = dataTown.map(home => {
                const getName = () => {
                    setTown(home.nom)
                    document.querySelector("#form--activity ul").style.display = "none"
                    setZipCode(home.codeDepartement)
                }


                const jsx = <li onClick={getName} key={home.code}>{home.nom} ({home.codeDepartement})</li>
                return jsx
            })

            return res
        }
    }

    useEffect(() => {
        inputCode()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [town])



    const handleSubmit = async () => {
       /* const response = await axios.post("https://kidozanges.herokuapp.com/api/searchactivity", {
            town,
            free
        })*/

       // console.log(response.data)

        setOpen(false)

        return(
            history.push(`/searchActivity?town=${town}&free=${free}`)
        )
    }


    return (
        <Modal
            id="login"
            closeIcon
            open={open}
            trigger={<a>Recherche</a>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content id="modal--content">
                <Form id="form--activity" method="POST" onSubmit={handleSubmit}>
                    <Form.Field
                        control={Input}

                        type="text"
                        name="town"
                        icon="search"
                        label="Ville"
                        placeholder="Entrez une ville"
                        value={town}
                        onChange={(evt) => {
                            setTown(evt.target.value);
                            setActiveChangeInput(true)
                            document.querySelector("#form--activity ul").style.display = "block"
                        }}
                    />

                    <ul>
                        {jsxVille()}
                    </ul>

                    <Form.Group inline>
                        <Form.Field
                            control={Radio}
                            label="Gratuite"
                            name="freeOrPaying"
                            value={free}
                            checked={free === "true"}
                            onChange={() => {
                                setFree("true");
                            }}
                        />
                        <Form.Field
                            control={Radio}
                            label="Payante"
                            name="freeOrPaying"
                            value={free}
                            checked={free === "false"}
                            onChange={() => {
                                setFree("false");
                            }}
                        />
                    </Form.Group>


                    <Button className="button-submit green" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Content>
        </Modal>
    );

}
