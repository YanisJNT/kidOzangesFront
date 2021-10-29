import React, { Component, useState } from 'react';
import './style.css';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'


const handleChange = () => {

}

export const SubmitActivity = () => {

  const [state, setstate] = useState("")
  return (

    <div className="container">
      <Form id="form--activity">
        
          <Form.Field
            control={Input}
            label="Titre de l'activitée"
            placeholder="Titre de l'activitée"
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />
        <Form.Group inline>
          
          <Form.Field
            control={Radio}
            label='gratuite'
            value='gratuite'
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='payante'
            value='payante'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field id="form--activity__button" control={Button}>Submit</Form.Field>
      </Form>
    </div>

  )
}