import React, { useState,useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Button, Form, Input, Radio, TextArea } from "semantic-ui-react";

export default function SubmitActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [free, setFree] = useState();
  const [town,setTown] = useState("Nice")

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
  return (
    <div className="container">
      <Form id="form--activity" method="POST" onSubmit={handleSubmitActivity}>
        <Form.Field
          control={Input}
          name="title"
          label="Titre de l'activité"
          placeholder="Titre de l'activité"
          value={title}
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />

        <Form.Field
          control={TextArea}
          name="description"
          label="Descrition de l'activité"
          placeholder="Descrition de l'activité"
          value={description}
          onChange={(evt) => {
            setDescription(evt.target.value);
          }}
        />
        <Form.Field
          control={Input}
          type="number"
          name="zipcode"
          label="Code Postal"
          placeholder="Code Postal"
          value={zipcode}
          onChange={(evt) => {
            setZipCode(evt.target.value);
          }}
        />
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
