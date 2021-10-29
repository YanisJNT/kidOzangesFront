import React, { Component, useState } from 'react';
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
  const [titleActivity, setTitleActivity] = useState("");
  const [descriptionActivity, setDescriptionActivity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  

  const handleSubmitActivity = async (evt) => {
    evt.preventDefault()
    await axios.post("http://localhost:3000/api/submitactivity", {

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
          value={titleActivity}
          onChange={(evt) => {setTitleActivity(evt.target.value)}}
        />


        <Form.Field
          control={TextArea}
          name='descriptionActivity'
          label="Descrition de l'activitée"
          placeholder="Descrition de l'activitée"
          value={descriptionActivity}
          onChange={(evt) => {setDescriptionActivity(evt.target.value)}}
        />
        <Form.Field
        name='postalCode'
        label="Code Postale"
        placeholder="Code Postale"
        value={postalCode}
        onChange={(evt) => {setPostalCode(evt.target.value)}}
        />


        <Form.Group inline>

          <Form.Field
            control={Radio}
            label='gratuite'
            value='gratuite'

          />
          <Form.Field
            control={Radio}
            label='payante'
            value='payante'

          />
        </Form.Group>
        <Form.Field id="form--activity__button" control={Button}>Submit</Form.Field>
      </Form>
    </div>

  )
}