import { Form,  Select } from 'semantic-ui-react'

import './style.css'

export default function SignUp() {
  const genderOptions = [
    { key: 'm', text: 'Monsieur', value: 'M' },
    { key: 'f', text: 'Madame', value: 'Mme' },
    ]

  return (
    <div>
      <header id="header"></header>
     
      <Form id="form" method="POST" action="/api/user/signup">
      <h1 id="form__title">Inscription</h1>  
      <Form.Group id="form__group" widths='equal'>
        <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Civilité', htmlFor: 'form-select-control-gender' }}
        placeholder='Civilité'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />  
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
        
        <Form.Button id="button" >ENVOYER</Form.Button>
      </Form>
      <footer id="footer"></footer>
    </div>
  )

}