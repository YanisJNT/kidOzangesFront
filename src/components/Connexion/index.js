import React from "react";
import { Button, Modal, Form,Header } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router";

import { Link } from "react-router-dom";


export default function Connexion() {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [userRedirect, setUserRedirect] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //qsdqsdqsdqsds


  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      const response = await axios.post("https://kidozanges.herokuapp.com/api/user/login", { email, password, })

      if (response.data.error) {
        setUserRedirect(false);
        setError([response.data.error]);
      }
      else {
        setUserRedirect(true)
        console.log(response.data.user)
        localStorage.setItem("token", response.data.accessToken);

      }

    }
    catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {

    if (userRedirect) {
      const redirect = setTimeout(() => {
        history.push("/");
        window.location.reload()
        setOpen(false)
      }, 1000)
      return () => clearTimeout(redirect)
    }
  });
  return (
      <Modal
        id="login"
        closeIcon
        open={open}
        trigger={<a >Connexion</a>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Content id="modal--content">
          <Form id="form-login" method="POST" onSubmit={handleSubmit}>
            <Form.Field className="form-field black" id="form-field">
              <label className="label">Email</label>
              <input type="email" placeholder="Email" name="email" value={email}
                onChange={(e) => { setEmail(e.target.value) }} required />
            </Form.Field>
            <Form.Field className="form-field black" id="form-field">
              <label className="label">Password</label>
              <input type="password" placeholder="Password" name="password" value={password}
                onChange={(e) => { setPassword(e.target.value) }} required />
            </Form.Field>
            {userRedirect === false ? (
              <div className="box--error">
                <h4>Erreur de connexion  : {error.length}   <Icon disabled name='level down alternate' /></h4>
                <ol>
                  <p>{error[0]}</p>
                </ol>
              </div>
            ) : null}
            <Button className="button-submit green" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
  );

}
