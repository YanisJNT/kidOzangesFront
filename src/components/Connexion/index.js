import React from "react";
import { Button, Modal, Form, Header } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export default function Connexion() {

  const [open, setOpen] = React.useState(false);
  const [userRedirect, setUserRedirect] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      setUserRedirect(!userRedirect)


      const response = await axios.post("https://kidozanges.herokuapp.com/api/user/login", {

        email,
        password

      })/*.then((res) => {
        console.log(res)
  s
      }).catch((error) => {
        console.log(error)
      })*/

      if (response.data.error) {
        setUserRedirect(false)
      } else {
        setUserRedirect(true)
        console.log(response.data.user)
      }

      console.log(response.data.error)
      //setError(response.data.errors)


    }
    catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {

    if (userRedirect) {
      const redirect = setTimeout(() => {
        setOpen(false)
      }, 1000)
      return () => clearTimeout(redirect)
    }
  });
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<a>Connexion</a>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header className="center aligned large" content='Connexion' />
      <Modal.Content id="modal--content">
        <Form id="form" method="POST" onSubmit={handleSubmit}>
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
          <Button className="button-submit green" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );

}

/*

<Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
</Modal>
*/
