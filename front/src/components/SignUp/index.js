import { useState , useEffect} from 'react'
import { Form,  Radio,  Select} from 'semantic-ui-react'

import axios  from 'axios'
import './style.css'
import { useHistory } from 'react-router'



export default function SignUp() {
  const [userRedirect,setUserRedirect] = useState(false)
  const [nickname,setNickname] = useState("");
  const [firstname, setfirstname] =  useState("");
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirm,setPasswordConfirm] = useState("");
  const [gender,setGender] = useState("M");


  const history = useHistory()


  

  const handleSubmit = async (event) => {
    event.preventDefault()

    setUserRedirect(!userRedirect)
    //http://localhost:3000/api/user/signup

    await axios.post("http://localhost:3000/api/user/signup",{
      nickname,
      firstname,
      lastname,
      email,
      password,
      passwordConfirm,
      gender
    })

  }

  useEffect(() => {
    if(userRedirect){
      const redirect = setTimeout(() => {
        history.push("/")
      },1000)
      return () => clearTimeout(redirect)
    }
  });
  




  return (
    <div>

      <Form id="form"  method="POST"  onSubmit={handleSubmit} >
        <h1 id="form__title">Inscription</h1>  
        <Form.Group id="form__group" widths='equal'>
          <Form.Field>
            <Radio
              label='Monsieur'
              name='gender'
              value="M"
              checked={gender ==="M"}
              onChange={() => {setGender("M")}}
  
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Madame'
              name='gender'
              value="Mme"
              checked={gender === "Mme"}
              onChange={() => {setGender("Mme")}}

            />
          </Form.Field>

          <Form.Input
              fluid label='Nickname'
              placeholder='nickname'
              name="nickname" 
              value={nickname}
              onChange={(e) => {setNickname(e.target.value)}}
              />
    
            <Form.Input
              fluid label='Firstname'
              placeholder='firstname'
              name="firstname"
              value={firstname}
              onChange={(e) => {setfirstname(e.target.value)}} />
            <Form.Input
              fluid label='Lastname'
              placeholder='Lastname'
              name="lastname"
              value={lastname}
              onChange={(e) => {setLastname(e.target.value)}} /> 
    
            
            <Form.Input
              fluid label='Email'
              placeholder='email'
              name="email" 
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}

              />
            <Form.Input
              fluid label='Password'
              placeholder='password'
              name="password" 
              value={password}
              onChange={(e) => {setPassword(e.target.value)}} />
    
            <Form.Input
              fluid label='Confirmer votre password'
              placeholder='password'
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => {setPasswordConfirm(e.target.value)}} />
          </Form.Group>
          
          <Form.Button type="submit"  id="button" >ENVOYER</Form.Button>
      </Form>
    </div>
  )

}