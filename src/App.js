import './App.css';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SubmitActivity from './components/SubmitActivity';
import DetailActivity from './components/DetailActivity';
import Page404 from './components/Page404';
import About from './components/About';

import LegalNotice from './components/MentionsLégales';
import Profil from './components/Profil';
import Admin from './components/Admin'
import Logout from './components/Logout';
import Recherche from './components/Recherche';
//import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode'



function App() {
  const token =  localStorage.getItem("token")
  // check si l'user a la perm admin
  const checkPermUser = (component) => {
    const token = localStorage.getItem("token")

    if (!token){
      return(<Page404 />)
    }
    else {
      const dataToken = jwt_decode(token)
      if (dataToken.role === "user" || dataToken.role === "admin") return (component)
    }
  } 
  const checkPermAdmin = () => {
    const token =  localStorage.getItem("token")
    
    if(!token){
      return(
        <Redirect to="/"/>
      )

    } 
    else {
      const dataToken = jwt_decode(token)
      if(dataToken.role === "admin"){
        return(
          <Admin/>
        )
      } else if(dataToken.role === "user"){
        return(
          <Redirect to="/"/>
        )
      }
    }

  }

  
  return (
    <div className="App">
      <Header />
     
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/signup" exact>
          <SignUp/>
        </Route>

        <Route path="/submitactivity" exact>
          {checkPermUser(<SubmitActivity />)}
        </Route>

        <Route path="/detailactivity/:id" exact>
          <DetailActivity />  
        </Route>

        <Route path="/aboutus" exact>
            <About/>
        </Route>

        <Route path="/admin"   exact>
            {checkPermAdmin()}
        </Route>

        <Route path="/recherche">
          <Recherche/>
        </Route>    

        <Route path="/logout" exact>
          <Logout/>
        </Route>

        <Route path="/LegalNotice" exact>
          <LegalNotice />
        </Route>

        <Route path="/profil" exact>
          {checkPermUser(<Profil />)}
        </Route>

        <Route status={404}>
          <Page404 />
        </Route>

      </Switch>

      <Footer className="footer" />

    </div>
  );
}

export default App;
