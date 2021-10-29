import React from "react";
import { Button, Modal, Form ,Header} from "semantic-ui-react";
import "./style.css";

export default function Connexion() {
    const [open, setOpen] = React.useState(false);
    return (
            <Modal
                closeIcon
                open={open}
                trigger={<a>Connexion</a>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >   
                <Header  className="center aligned large" content='Connexion' />
                <Modal.Content id="modal--content">
                    <Form id="form" action="http://localhost:3000/api/user/login"  method="POST">
                        <Form.Field className="form-field black" id="form-field">
                            <label className="label">Email</label>
                            <input type="email" placeholder="Email" name="email"  required/>
                        </Form.Field>
                        <Form.Field className="form-field black" id="form-field">
                            <label className="label">Password</label>
                            <input type="password" placeholder="Password" name="password" required/>
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
