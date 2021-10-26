import React from "react";
import { Button, Modal, Form ,Header} from "semantic-ui-react";
import "./style.css";

export default function Connexion() {
    const [open, setOpen] = React.useState(false);
    return (
        <main>
            <Modal
                closeIcon
                open={open}
                trigger={<Button>Show Modal</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >   
                <Header  className="center aligned" content='Connexion' />
                <Modal.Content>
                    <Form>
                        <Form.Field className="form-field black">
                            <label className="label">Email</label>
                            <input type="email" placeholder="Email" name="email" />
                        </Form.Field>
                        <Form.Field className="form-field black">
                            <label>Password</label>
                            <input type="password" placeholder="Password" name="password"/>
                        </Form.Field>
                        <Button className="green" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </main>
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
