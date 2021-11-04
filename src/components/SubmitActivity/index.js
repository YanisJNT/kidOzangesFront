import React, { useState,useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Button, Form, Input, Radio, TextArea } from "semantic-ui-react";

export default function SubmitActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [zipcode, setZipCode] = useState("");
  
  const [free, setFree] = useState("");
  const [town,setTown] = useState("");
  const [dataTown,setDataTown] = useState("");
  const [activeChangeInput,setActiveChangeInput] = useState(false)
  const [limitData,setLimitData] = useState(5)


  const handleSubmitActivity = async (evt) => {
    evt.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);

    axios.post("https://kidozanges.herokuapp.com/api/submitactivity",
    {
      title,
      description,
      zipcode,
      free,
      town
    },
    {
      headers: {
        authorization:`Bearer ${token}`,
      },
    },
    
    )
  };

  const inputCode = async () => {
    try{
      const responce = await axios.get(`https://geo.api.gouv.fr/communes?nom=${town}&fields=nom,codeDepartement&limit=${limitData}&boost=population`);
      console.log(responce.data)
      // eslint-disable-next-line array-callback-return
      setDataTown(responce.data)
    }
    catch(error){
      console.log(error)
    }
  }

  const jsxVille = () => {
    if(activeChangeInput){
      const res = dataTown.map(home => {
        const getName = () => {
          setTown(home.nom)
          document.querySelector("#form--activity ul").style.display="none"
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


  return (
    <div className="container">
      <Form id="form--activity" method="POST" onSubmit={handleSubmitActivity}>
        <Form.Field
          control={Input}
          name='title'
          label="Titre de l'activité"
          placeholder="Titre de l'activité"
          value={title}
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />

        <Form.Field
          control={TextArea}
          name='description'
          label="Descrition de l'activité"
          placeholder="Descrition de l'activité"
          value={description}
          onChange={(evt) => {
            setDescription(evt.target.value);

          }}
        />
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
            document.querySelector("#form--activity ul").style.display="block"
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
        <Form.Field id="form--activity__button" control={Button}>
          Submit
        </Form.Field>
      </Form>
    </div>
  );
}
