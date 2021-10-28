import { useState } from 'react'
import { Form,  Radio,  Select} from 'semantic-ui-react'


import './style.css'



export default function SignUp() {
  const [value,setValue] = useState("M")

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(event.target)
    const data = new FormData(event.target)
    console.log(data.get("password"))
    
  }

  return (
    <div>

      <Form id="form" action="http://localhost:3000/api/user/signup" method="POST"    >
        <h1 id="form__title">Inscription</h1>  
        <Form.Group id="form__group" widths='equal'  >

          <Form.Field>
            <Radio
              label='Monsieur'
              name='gender'
              value="M"
              checked={value === "M"}
              onChange={() => {setValue("M")}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Madame'
              name='gender'
              value='Mme'
              checked={value === "Mme"}
              onChange={() => {setValue("Mme")}}
            />
          </Form.Field>

          <Form.Input
              fluid label='Nickname'
              placeholder='nickname'
              name="nickname" />
            <Form.Input
              fluid label='Firstname'
              placeholder='firstname'
              name="firstname" />
            <Form.Input
              fluid label='Lastname'
              placeholder='Lastname'
              name="lastname" />
    
            
            <Form.Input
              fluid label='Email'
              placeholder='email'
              name="email" />
            <Form.Input
              fluid label='Password'
              placeholder='password'
              name="password" />
            <Form.Input
              fluid label='Confirmer votre password'
              placeholder='password'
              name="passwordConfirm" />
          </Form.Group>
          
          <Form.Button type="submit"  id="button" >ENVOYER</Form.Button>
      </Form>
    </div>
  )

}