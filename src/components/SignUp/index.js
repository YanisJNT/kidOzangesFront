import { useState, useEffect } from "react";
import { Form, Radio, Select, Message } from "semantic-ui-react";
import Error from "../Error";

import axios from "axios";

import "./style.css";
import { useHistory } from "react-router";

export default function SignUp() {
  const [userRedirect, setUserRedirect] = useState();
  const [nickname, setNickname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [gender, setGender] = useState("");

  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      //setUserRedirect(true)
      //http://localhost:3000/api/user/signup

      const response = await axios.post(
        "https://kidozanges.herokuapp.com/api/user/signup",
        {
          nickname,
          firstname,
          lastname,
          email,
          password,
          passwordConfirm,
          gender,
        }
      ); /*.then((res) => {
      console.log(res)

    }).catch((error) => {
      console.log(error)
    })*/

      if (response.data.errors) {
        setUserRedirect(false);
        history.push("/signup");
        setError(response.data.errors);
      } else {
        setUserRedirect(true);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userRedirect === true) {
      const redirect = setTimeout(() => {
        history.push("/");
      }, 1000);
      return () => clearTimeout(redirect);
    }
  });

  return (
    <div id="signup" className="signup">
      <Form method="POST" onSubmit={handleSubmit}>
        <div className="form-signup">
          <Form.Group id="form__group" widths="equal">
            <h1 id="form__title">Inscription</h1>
            <div className="box--radio">
              <Form.Field>
                <Radio
                  label="Monsieur"
                  name="gender"
                  value="M"
                  checked={gender === "M"}
                  onChange={() => {
                    setGender("M");
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Madame"
                  name="gender"
                  value="Mme"
                  checked={gender === "Mme"}
                  onChange={() => {
                    setGender("Mme");
                  }}
                />
              </Form.Field>
            </div>

            <Form.Input
              fluid
              label="Nickname"
              placeholder="Nickname"
              name="nickname"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              required
            />

            <Form.Input
              fluid
              label="Firstname"
              placeholder="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
              required
            />
            <Form.Input
              fluid
              label="Lastname"
              placeholder="Lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required
            />

            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <Form.Input
              fluid
              label="Confirmer votre password"
              placeholder="Password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
              required
            />

            <Error userRedirect={userRedirect} error={error} />

            <Form.Button type="submit" id="button">
              ENVOYER
            </Form.Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
