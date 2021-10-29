import React, { useState } from 'react';
import axios from 'axios'
import './style.css';
import {
  Button,
  Form,
  Input,
  Radio,
  TextArea,
} from 'semantic-ui-react'

export const SubmitActivity = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [town, setTown] = useState("");
  const [free, setFree] = useState(true)


  const handleChangeFree = (evt) => {
    console.log('free')
    setFree(evt.target.value === true)
  }
  

  const handleSubmitActivity = async (evt) => {
    evt.preventDefault()
    await axios.post("http://localhost:3000/api/submitactivity", {
      title,
      description,
      town,
      free
    })
  }

  return (

    <div className="container">
      <Form id="form--activity" method="POST" onSubmit={handleSubmitActivity}>

        <Form.Field
          control={Input}
          name='titleActivity'
          label="Titre de l'activitée"
          placeholder="Titre de l'activitée"
          value={title}
          onChange={(evt) => { setTitle(evt.target.value) }}
        />


        <Form.Field
          control={TextArea}
          name='descriptionActivity'
          label="Descrition de l'activitée"
          placeholder="Descrition de l'activitée"
          value={description}
          onChange={(evt) => { setDescription(evt.target.value) }}
        />
        <Form.Field
          control={Input}
          name='postalCode'
          label="Code Postale"
          placeholder="Code Postale"
          value={town}
          onChange={(evt) => { setTown(evt.target.value) }}
        />
        <Form.Group inline>

          <Form.Field
            control={Radio}
            label='Gratuite'
            name='freeOrPaying'
            value="free"
            checked={free === true}
            onClick={handleChangeFree}

          />
          <Form.Field
            control={Radio}
            label='Payante'
            name='freeOrPaying'
            value="paying"
            checked={free === false}
            onClick={handleChangeFree}

          />
        </Form.Group>
        <Form.Field id="form--activity__button" control={Button}>Submit</Form.Field>
      </Form>
    </div>

  )
}